// creating HTML element and styling it without touching HTML and CSS
let element = document.createElement('p')
element.innerHTML = 'Hello world'

element.style.cssText = `
  color: red;
  font-weight: bold;
  background-color: green;
`

element.style.background = 'blue'

document.body.append(element)
