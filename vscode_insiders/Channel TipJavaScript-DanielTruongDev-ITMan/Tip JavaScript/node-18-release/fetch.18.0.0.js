// trong file này thì mình phải chuyển version node qua node 18
// chuyển qua node 18 thì không cần phải import thư viện node-fetch như trong node 17

async function getUser() {
  const { login, id } = await (await fetch('https://api.github.com/users/anonystick')).json()
  console.log({ login, id })
}

getUser()
