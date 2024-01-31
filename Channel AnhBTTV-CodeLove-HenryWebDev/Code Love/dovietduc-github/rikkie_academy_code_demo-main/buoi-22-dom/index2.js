// 4. Thay đổi Dom (cuộc chơi gán lại value của object)
let pFirst = document.querySelector('p.error')
console.dir(pFirst)
console.log(pFirst.innerText)
// Thay đổi value của object
let innerTextValue = pFirst.innerText
pFirst.innerText = innerTextValue + ' anh đức'

// innerHTML
let divDemo = document.querySelector('.demo')
divDemo.innerHTML = '<p>Game end</p>' + divDemo.innerHTML

// Nhớ :
// Khi thay đổi html chúng ta dùng .innerHTML cho object
