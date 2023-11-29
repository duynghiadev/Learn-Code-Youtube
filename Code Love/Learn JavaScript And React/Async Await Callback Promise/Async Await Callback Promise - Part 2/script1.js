/**
 * - Đây là cách 1 sử dụng callback
 * @param callback
 */

function showNameUser(callback) {
  const name = 'duynghiadev'
  callback(name)
}

showNameUser((name) => {
  console.log('callback:', name)
})

/**
 * - Đây là cách 2 sử dụng callback
 * - Ta cũng có thể sử dụng callback bằng cách này
 * @param callbackAge
 */

function hideNameUser(callbackAge) {
  const age = 12
  callbackAge(age)
}

const getAge = (age) => {
  console.log('Age callback:', age)
}

hideNameUser(getAge)

/**
 * - Ở trong bài này thì mọi người cố gắng hiểu callback nhé
 * - callback thực ra nó là 1 cái parameter nó được truyền vào function khác và được gọi trong function khác
 * - Bản chất của nó là callback đó được gọi và nhận vào parameter ở trong source code của bên trong function khác mà mình muốn public cái parameter khác ở trong function callback => dẫn đến chúng ta xử lý bên ngoài
 */

/**
 * - Callback này được sử dụng nhiều nhất trong ReactJS
 * - Đó là khi các bạn truyền data từ con lên cha (child to parent). Ở bên cha thì ta phải define cái function và ta phải truyền reference đó xuống các component con đến chỗ nào mà mình cần gọi và chúng ta kích hoạt thì chỗ đó chúng ta gọi cái function đó các bạn nhé.
 */
