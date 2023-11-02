function Tabs(options) {
  // wrapper
  const tabContainer = '#' + options.element

  const tabContainerTmp = document.querySelector(tabContainer)

  const tabElementButtonAll = tabContainerTmp.querySelectorAll(
    '.' + options.tabButton
  )
  const tabContentAll = tabContainerTmp.querySelectorAll(
    '.' + options.tabContent
  )
  const length = tabElementButtonAll.length

  // function call
  createIndexInit()
  initEvent()

  function update() {
    const tabContainerSelector = document.querySelector(tabContainer)

    tabContainerSelector
      .querySelectorAll('.tab')
      .forEach(function (tabElement, index) {
        tabElement.setAttribute('data-index', index)
      })
  }

  function reset() {
    const tabContainerSelector = document.querySelector(tabContainer)
    // remove all class have active or reset
    tabElementButtonAll.forEach(function (tabElement) {
      tabElement.classList.remove('active')
    })
    // reset content by remove class active
    tabContainerSelector
      .querySelectorAll('.' + options.tabContent)
      .forEach(function (tabContentElemnent) {
        tabContentElemnent.classList.remove('active')
      })
  }

  function handleClickTab(event) {
    const clicked = event.target
    const tabContainerSelector = document.querySelector(tabContainer)

    if (clicked.classList.contains('tab')) {
      // remove all class active
      reset()

      // add class active to element click
      clicked.classList.add('active')
      // find content by elemet click
      const refToContent = clicked.dataset.index

      tabContainerSelector
        .querySelectorAll('.' + options.tabContent)
        [refToContent].classList.add('active')
    }
  }

  function createIndexInit() {
    tabElementButtonAll.forEach(function (buttonElement, index) {
      buttonElement.setAttribute('data-index', index)
    })
  }

  function initEvent() {
    const tabContainerSelector = document.querySelector(tabContainer)
    tabContainerSelector.addEventListener('click', handleClickTab)
  }

  function open(numberIndex) {
    if (numberIndex >= length || numberIndex < 0) {
      numberIndex = 0
    }

    // remove all class active
    reset()

    // active by index
    tabElementButtonAll[numberIndex].classList.add('active')
    tabContentAll[numberIndex].classList.add('active')
  }

  return {
    openTab: open,
    update: update
  }
}

// su dung thu vien
const tabComponent = new Tabs({
  element: 'tabs',
  tabButton: 'tab',
  tabContent: 'tabcontent'
})
tabComponent.openTab(4)

function renderButton() {
  return `<a class="tab">Solidjs</a>`
}
function renderContent() {
  return `<div class="tabcontent">
            <p>
                <b>Solidjs</b> is a radical new approach to building user interfaces.
                Whereas traditional frameworks like React and Vue do the bulk of their work in the browser,
                Svelte shifts that work into a compile step that happens when you build your app
            </p>
        </div>`
}
function handleAddMore() {
  // node element (appendChild) --- c1

  // c2
  const tabsButton = document.querySelector('.tabs')
  tabsButton.insertAdjacentHTML('beforeend', renderButton())

  const content = document.querySelector('.content')
  content.insertAdjacentHTML('beforeend', renderContent())

  // update index
  tabComponent.update()
}
const buttonAddMore = document.querySelector('.addTab')
buttonAddMore.addEventListener('click', handleAddMore)
