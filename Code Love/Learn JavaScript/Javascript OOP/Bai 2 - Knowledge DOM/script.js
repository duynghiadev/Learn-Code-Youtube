// 1. select ra 1 element object
const headerSelector = document.querySelector('.header')
console.log('headerSelector:', headerSelector)

// 2. select ra nhiều element object
const pAll = document.querySelectorAll('p')
console.log('Node List pAll:', pAll)

pAll.forEach(function (element) {
	console.log('p element:', element)
})
console.log(pAll)

/**
 * - Cách học nhanh các ngôn ngữ lập trình
 * + Học lý thuyết (đọc document)
 * + Làm bài tập
 * + Học lý thuyết
 *
 * => Cứ theo 3 chuẩn đó mà học, sẽ nhanh lên skill lắm
 * */

/**
 * - Các phương thức sau đây là children của querySelector và querySelectorAll
 *
 * - Chú ý querySelector và querySelectorAll là parent của những phương thức sau:
 * + document.getElementById()
 * + document.getElementByClassName()
 * + document.getElementByTagName()
 * */
