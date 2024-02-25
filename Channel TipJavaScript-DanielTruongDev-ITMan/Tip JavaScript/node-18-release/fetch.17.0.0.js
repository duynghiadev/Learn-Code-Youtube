// trong file này thì mình phải chuyển version node qua node 17
import fetch from 'node-fetch'

async function getUser() {
  const { login, id } = await (await fetch(`https://api.github.com/users/anonystick`)).json()
  console.log({ login, id })
}

getUser()
