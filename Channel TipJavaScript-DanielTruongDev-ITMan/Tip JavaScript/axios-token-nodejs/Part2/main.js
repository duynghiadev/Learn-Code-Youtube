const instance = axios.create({
  baseURL: '/api',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  async (config) => {
    console.log('🛫 Request interceptor triggered')

    // Check if the request doesn't need access token validation
    if (config.url.includes('/login') || config.url.includes('/refreshToken')) {
      console.log('⛔ No need to check access token for login or refreshToken')
      return config
    }

    // Add access token to headers
    const token = await instance.getLocalAccessToken()
    config.headers['X-Token'] = token
    console.log('Before sending request:', token)

    return config
  },
  (err) => {
    console.error('❌ Request interceptor error:', err)
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  async (response) => {
    console.log('After server response:', response.data)
    const config = response.config

    // If the response is from login or refreshToken, return it directly
    if (config.url.includes('/login') || config.url.includes('/refreshToken')) {
      return response
    }

    const { code, msg } = response.data
    if (code && code === 401 && msg === 'jwt expired') {
      console.log('❌ Token expired: ❌', msg)
      const {
        elements: { accessToken }
      } = await refreshToken()
      if (accessToken) {
        console.log('Access token refreshed successfully')
        config.headers['X-Token'] = accessToken
        await instance.setLocalAccessToken(accessToken)
        return instance(config)
      }
    }

    return response
  },
  (err) => {
    console.error('❌ Response interceptor error:', err)
    return Promise.reject(err)
  }
)

const btn_login = document.getElementById('_login')
if (btn_login) {
  btn_login.addEventListener('click', async () => {
    try {
      const {
        status,
        elements: { accessToken }
      } = await login()
      if (status === 'success') {
        await instance.setLocalAccessToken(accessToken)
      }
    } catch (error) {
      console.error('❌ Error logging in:', error)
    }
  })
}

const btn_getlist = document.getElementById('_getlist')
if (btn_getlist) {
  btn_getlist.addEventListener('click', async () => {
    try {
      const { status, elements } = await getUsers()
      console.table(elements)
      console.log('------------------------------------------')
    } catch (error) {
      console.error('❌ Error fetching user data:', error)
    }
  })
}

async function getUsers() {
  console.log('📡 Fetching user data...')
  const response = await instance.get('/users')
  return response.data
}

async function login() {
  console.log('🔐 Logging in...')
  const response = await instance.get('/login')
  return response.data
}

async function refreshToken() {
  console.log('🔄 Refreshing access token...')
  const response = await instance.get('/refreshToken')
  return response.data
}

instance.setLocalAccessToken = async (token) => {
  window.localStorage.setItem('accessToken', token)
}

instance.getLocalAccessToken = async () => {
  return window.localStorage.getItem('accessToken') || null
}
