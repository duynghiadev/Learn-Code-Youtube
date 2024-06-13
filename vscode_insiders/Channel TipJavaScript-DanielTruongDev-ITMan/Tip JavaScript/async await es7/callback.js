const functionCallback = (name) => {
  console.log(`hello ${name}`)
}

function asyncOperation(name, callback) {
  callback(name)
}

asyncOperation('anonystick', functionCallback)
