window.onscroll = function () {
  setTimeout(() => {
    myFunction()
  }, 0)
}

let myFunction = () => {
  for (let i = 0; i < 10; i++) {
    console.log('index:', i)
  }
}
