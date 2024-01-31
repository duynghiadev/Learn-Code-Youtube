// get element
const contentElement = document.getElementById('content')

// create element
const divElement = document.createElement('div')
divElement.setAttribute('class', 'nav')

// create ul element
const ulElement = document.createElement('ul')

// create li element
const liElementFirst = document.createElement('li')
liElementFirst.innerText = 'ReactJS'
const liElementSecond = document.createElement('li')
liElementSecond.innerText = 'NodeJS'
const liElementThird = document.createElement('li')
liElementThird.innerText = 'VueJS'

// insert li to ul
ulElement.appendChild(liElementFirst)
ulElement.appendChild(liElementSecond)
ulElement.appendChild(liElementThird)

// insert ul to div
divElement.appendChild(ulElement)

// insert all content to div id content
contentElement.appendChild(divElement)
