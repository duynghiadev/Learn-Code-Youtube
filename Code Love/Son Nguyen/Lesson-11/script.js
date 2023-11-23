const myAlert = () => {
  document.write('Chào mừng bạn đến CR7')
}

// const myAlert2 = () => {
//   setTimeout(myAlert, 3000)
// }
//
// myAlert2()

const myFunction = () => {
  setTimeout(myAlert, 3000)
}

const myFunction_1 = () => {
  setInterval(myAlert, 500)
}

let myFunction_2
myFunction_2 = setInterval(myAlert, 500)

const myStopFunction = () => {
  clearTimeout(myFunction_2)
  console.log('đã chặn function trước')
}
