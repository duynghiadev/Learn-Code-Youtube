/**
 * 1. Callback là gì?
 * 2. Tại sao cần callback, khi xử lý đồng bộ (synchronous) và bất đồng bộ (asynchronous)
 * 3. Các built-in callback của WebAPI, nodejs
 * 4. Convention khi viết callback
 */
function truoc() {
  setTimeout(() => {
    console.log('   Là task 1')
  }, 2000)
}

function sau() {
  setTimeout(() => {
    console.log(' Là task 2')
  }, 1000)
}

truoc()
sau()
console.log('Là task 3')
