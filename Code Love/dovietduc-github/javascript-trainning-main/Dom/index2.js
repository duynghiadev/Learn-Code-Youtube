// js
const tabContainer = document.getElementById('tabs')
const tabElementButtonAll = document.querySelectorAll('.tab')
const tabContentAll = document.querySelectorAll('.tabcontent')

function handleClickTab(event) {
  const clicked = event.target

  if (clicked.classList.contains('tab')) {
    // remove all class have active or reset
    tabElementButtonAll.forEach(function (tabElement) {
      tabElement.classList.remove('active')
    })
    // add class active to element click
    clicked.classList.add('active')

    // reset content by remove class active
    tabContentAll.forEach(function (tabContentElemnent) {
      tabContentElemnent.classList.remove('active')
    })

    // find content by elemet click
    const refToContent = clicked.dataset.index
    tabContentAll[refToContent].classList.add('active')
  }
}

tabContainer.addEventListener('click', handleClickTab)
