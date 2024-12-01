let array = [1, 2, 3, 4, 5]

/**
 * Nếu viết code như này thì nó sẽ chạy vòng for trước => rồi nó mới chạy đến log các item
 */
array.forEach(function callback(item) {
  for (let i = 0; i < 10; i++) {
    console.log('index_first:', i)
  }
  console.log('item_first:', item)
  console.log('-------------------------')
})

/**
 * Còn đây là chúng ta sẽ log các item trước và vòng lặp for sẽ chạy sau khi hết timeout
 */
array.forEach(function callback(item) {
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      console.log('-------------------------')
      console.log('index_second:', i)
    }
  }, 1000)
  console.log('item_second:', item)
})
