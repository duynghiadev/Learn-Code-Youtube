/**
 * - Trong bài này chúng ta học về Closure. Hãy tìm hiểu khái niệm closure là gì nhé?
 * + Closure là một khái niệm quan trọng trong JavaScript, và nó xuất hiện khi một hàm được khai báo trong phạm vi của một hàm khác và có thể truy cập các biến của hàm bên ngoài nó. Closure cho phép một hàm "ghi nhớ" và truy cập đến phạm vi của nó ngay cả khi nó được gọi ở nơi khác ngoài phạm vi khai báo.
 */

let i = 0
const makeCounter = () => {
  i++
  let privateCounter = 0

  const changeBy = (val) => {
    privateCounter += val
  }

  return {
    increment: () => {
      changeBy(1)
    },
    decrement: () => {
      changeBy(-1)
    },
    value: () => {
      return privateCounter
    }
  }
}

const counter1 = makeCounter()
counter1.increment()
console.log('counter1:', counter1.value())
console.log('i:', i)

counter1.increment()
console.log('counter1:', counter1.value())
console.log('i:', i)

counter1.decrement()
