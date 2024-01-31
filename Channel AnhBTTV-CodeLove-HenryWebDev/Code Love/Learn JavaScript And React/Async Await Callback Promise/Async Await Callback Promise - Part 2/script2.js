/**
 * 1. Khi chúng ta nói đến sync => thì khái niệm đó được hiểu như là blocking
 * - Lưu ý: sync và blocking nó là tương đương nhau (sync === blocking)
 */

console.log('before')
console.log('get user from database')
console.log('after')
console.log('----------------------')

/**
 * 2. Khi chúng ta nói đến async => thì khái niệm đó được hiểu như là non-blocking
 * - Lưu ý: async và non-blocking nó là tương đương nhau (async === non-blocking)
 * - Trong JavaScript các web APIs được viết hầu hết là non-blocking
 */

console.log('before') // Câu lệnh này là chạy đồng bộ
setTimeout(() => {
  console.log('get user from database') // Hàm setTimeout là chạy bất đồng bộ, bởi vì nó là web APIs
}, 1000)
console.log('after')
