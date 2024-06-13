/**
 * TRY CATCH Trong Javascript🚀
 */
/**
 * - Trong bài này mình sẽ học về: Error Handling in JS 🤷‍♀️🤷‍♀️🤷‍♀️
 *  - Throw statement
 *  - Try Catch Finally Nested
 *  - Promise
 */
// let a = null
// a.name // error

// Những lỗi này có thể bị crack chương trình (crack: có nghĩa là lỗi của chương trình mà chưa được xử lý, sẽ bị gây ra dừng chương trình luôn)
// throw 1
// throw true
// throw { name: 'Justin' }

// Example: throw error
function a() {
  try {
    console.log('1 ok')
    try {
      throw 'error 1'
    } catch (error) {
      console.error(error)
    }
    // return 1
  } catch (error) {
    console.log('2 ok')
    // throw 2
  } finally {
    console.log('3 ok')
  }
}
console.log(a())

// Dưới đây là ví dụ trong Promise trong ES6
/**
 * This is an example of an async function using Promises in ES6.
 */
// catch block luôn luôn đặt cuối cùng -> sau then
async function b() {
  return 1
}
b()
  .then((result) => {
    console.log('result1:', result)
    return result * 10
  })
  .then((result) => {
    console.log('result2:', result)
    throw 2
  })
  .catch((error) => console.error('error:', error))

// Other examples 🤷‍♂️🤷‍♂️🤷‍♂️
async function c() {
  Promise.reject('error async').catch((error) => console.log(error))
  return 'c ok'
}
c()
  .then((result) => {
    console.log('result3:', result)
    return Promise.reject('error async')
  })
  .catch((error) => console.error('error:', error))
