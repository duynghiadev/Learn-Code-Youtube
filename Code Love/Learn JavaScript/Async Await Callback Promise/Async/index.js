// 1. sync === blocking (hàm đồng bộ. Nó còn có tên gọi khác là blocking)
console.log('hello')
console.log('Duy Nghia')
console.log('Ku Nhi')

console.log('-------------------')

// 2. async === non-blocking (hàm bất đồng bộ. Nó còn có tên gọi khác là non-blocking)
console.log('before') // Chạy đồng bộ

setTimeout(function () {
	console.log('This is function setTimeout...')
}, 2000) // Chạy bất đồng bộ

console.log('after') // Chạy đồng bộ
