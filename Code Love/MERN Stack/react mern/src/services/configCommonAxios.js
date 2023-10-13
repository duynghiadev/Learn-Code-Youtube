import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000'

axios.interceptors.request.use(function (config)
{
	// Do something before request is sent
	const configUrl = config.url
	if (configUrl.includes('auth/admin')) {
		config.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
	}
	return config
}, function (error)
{
	// Do something with request error
	return Promise.reject(error)
})
