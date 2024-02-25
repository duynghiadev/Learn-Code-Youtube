async function fetchData() {
  try {
    const response = await fetch('https://api.github.com/users/anonystick')
    const { login, id } = await response.json()
    console.log({ login, id })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchData()
