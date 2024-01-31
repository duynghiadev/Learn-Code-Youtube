class Tabs {
  constructor(container) {
    this.container = container
    // this.handleClickTab = this.handleClickTab.bind(this);
  }

  init() {
    // event
    this.container.addEventListener('click', this.handleClickTab)
  }

  reset = () => {
    // remove all class have active or reset
    this.container.querySelectorAll('.tab').forEach(function (tabElement) {
      tabElement.classList.remove('active')
    })
    // reset content by remove class active
    this.container.querySelectorAll('.tabcontent').forEach(function (tabContentElemnent) {
      tabContentElemnent.classList.remove('active')
    })
  }

  handleClickTab = (event) => {
    const clicked = event.target

    if (clicked.classList.contains('tab')) {
      // remove all class active
      this.reset()

      // add class active to element click
      clicked.classList.add('active')
      // find content by elemet click
      const refToContent = clicked.dataset.index
      this.container.querySelectorAll('.tabcontent')[refToContent].classList.add('active')
    }
  }
}

const tabInstance = new Tabs(document.querySelector('#tabs'))
tabInstance.init()

// dropdown (menu)
// calulator
// slider
