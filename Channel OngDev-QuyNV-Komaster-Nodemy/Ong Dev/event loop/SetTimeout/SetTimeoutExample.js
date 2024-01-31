;[1, 2, 3, 4, 5].forEach(function (item) {
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      console.log('index:', i)
    }
  }, 0)
  console.log('item:', item)
  console.log('-------------------')
})
