// callback có thể hiểu đơn giản là hàm đặt là tham số của 1 hàm khác.

const printOut = (info) => {
  console.log(info)
}

const shoutLoud = (info) => {
  console.log(info.toUpperCase())
}

const processInfo = (name, age, callbackFunc) => {
  let info = `My name is ${name}. I am ${age} years old.`
  callbackFunc(info)
}

processInfo('Duynghiadev', 22, printOut)
processInfo('Jane Dow', 19, shoutLoud)
