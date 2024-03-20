const h1 = document.getElementsByTagName('h1')[0]
h1.style.color = 'red'

const h2 = document.createElement('h2')
h2.textContent = 'I am Duynghiadev'

console.log('h2 before created -->', document.getElementsByTagName('h2')[0])
document.body.appendChild(h2)
console.log('h2 after created -->', document.getElementsByTagName('h2')[0])
