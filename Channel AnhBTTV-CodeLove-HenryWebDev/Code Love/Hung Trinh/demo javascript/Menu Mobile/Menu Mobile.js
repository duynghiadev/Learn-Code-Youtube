let isShow = false
let actSubMenu = document.querySelectorAll('.act-sub-menu')
let subMenu = document.querySelectorAll('.sub-menu')

for (let i = 0; i < actSubMenu.length; i++) {
  actSubMenu[i].onclick = function (e) {
    for (let j = 0; j < subMenu.length; j++) {
      subMenu[j].style.display = 'none'
      console.log('none', subMenu[j])
    }
    e.target.nextElementSibling.style.display = 'block'
    console.log('display', e.target)
  }
}

function toggleMenu(element) {
  isShow = !isShow
  if (isShow) {
    document.querySelector('.menu').style.left = '0'
    element.style.marginLeft = '250px'
  } else {
    document.querySelector('.menu').style.left = '-240px'
    element.style.marginLeft = '10px'
  }
}
