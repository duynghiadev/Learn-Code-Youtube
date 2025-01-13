const btnLogin = document.querySelector('.btn_login')
const btnAddBook = document.querySelector('.btn_addbook')
const btnCreateBook = document.querySelector('.btn_create')
const btnCloseAddModal = document.querySelector('.btn_close.add')
const btnLogout = document.querySelector('.btn_logout')

const inputElement = document.querySelector('input')
const formLogin = document.querySelector('.form_login')
const modalLogin = document.querySelector('.modal_login')
const userName = document.querySelector('.name_user')
const sectionMain = document.querySelector('.main_section')
const table = document.querySelector('tbody')
const wrapperAddBook = document.querySelector('.wrapper.add')
const wrapperRemoveBook = document.querySelector('.wrapper.remove')
const formADD = document.querySelector('.form_addbook')
const nameBookDelELement = document.querySelector('.name_books_del')
const modalDelete = document.querySelector('.modal_del')
const inputSearch = document.querySelector('.input_search')

// take data from storage
const dataStorage = JSON.parse(localStorage.getItem('databook'))
let dataBooks = dataStorage?.length > 0 ? dataStorage : []
const dataUserStorage = JSON.parse(localStorage.getItem('user'))

function App() {
  function handleLogin(e) {
    if (inputElement.value.trim() !== '') {
      e.preventDefault()
      renderContainer(inputElement.value)
      localStorage.setItem('user', JSON.stringify(inputElement.value))
    }
  }

  function handleLogout() {
    localStorage.removeItem('user')
    localStorage.removeItem('databook')
    window.location.reload()
  }

  function handleToggleModalAddBook() {
    wrapperAddBook.classList.toggle('on')
  }

  function handleCloseModalDelBook() {
    const modalDel = document.querySelector('.modal_del')
    document.body.removeChild(modalDel)
  }

  function handleOpenModalDelBook(e, data) {
    let idBook = Number(e.target.dataset.idBook)
    document.body.appendChild(renderModalDel(data))
    const btnCancel = document.querySelector('.btn_cancel')
    const btnDel = document.querySelector('.btn_del')
    const btnCloseRemoveModal = document.querySelector('.btn_close.remove')

    btnCancel.addEventListener('click', handleCloseModalDelBook)
    btnCloseRemoveModal.addEventListener('click', handleCloseModalDelBook)
    btnDel.addEventListener('click', (e) => handleDelBook(idBook, data)) // ?
  }

  function renderModalDel(data) {
    let html = `<div class='wrapper remove'>
      <div class='modal_del'>
        <span class='btn_close remove'>
          <svg xmlns='http://www.w3.org/2000/svg' height='1em'
            viewBox='0 0 384 512'><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
          </svg>
        </span>
        <h3>
          Delete book
        </h3>
        <p>
          Do you want to delete
          <span class='name_books_del'>${data.name} </span> book?
        </p>
        <div class='section_button_bot'>
          <button class='btn_del'>
            Delete
          </button>
          <button class='btn btn_cancel'>
            Cancel
          </button>
        </div>
      </div>
    </div>`

    const node = document.createElement('div')
    node.classList.add('modal_del')
    node.innerHTML = html
    return node
  }

  function handleCheckInputSearch() {
    if (inputSearch.value.trim() !== '') {
      const dataFilter = dataBooks.filter((item) =>
        item.name.toLowerCase().includes(inputSearch.value.toLowerCase()),
      )
      handleRenderDataTable(dataFilter)
    } else {
      handleRenderDataTable(dataBooks)
    }
  }

  function handleDelBook(idBook, dataBook) {
    const newData = dataBooks.filter((data, index) => data.name !== dataBook.name)
    dataBooks = [...newData]
    handleCheckInputSearch()
    handleCloseModalDelBook()
  }

  function handleAddBook(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries())
    if (checkIsHaveData(data)) {
      dataBooks.push(data)
      document.querySelectorAll('input:not(.input_search)').forEach((item) => (item.value = '')) // reset value input
      handleCheckInputSearch()
      handleToggleModalAddBook()
    } else {
      alert('Vui Long Nhap Day Du')
    }
  }

  function checkIsHaveData(data) {
    let dataArr = Object.values(data)
    for (let i = 0; i < dataArr.length; i++) {
      if (dataArr[i].trim() === '') {
        return false
      }
    }
    return true
  }

  function handleSearchItem(e) {
    let valueSearch = e.target.value.trim().toLowerCase()
    if (valueSearch.trim() !== '') {
      let itemFilter = dataBooks.filter((item) => item.name.toLowerCase().includes(valueSearch))
      handleRenderDataTable(itemFilter)
    } else {
      handleRenderDataTable(dataBooks)
    }
  }

  function handleRenderDataTable(data) {
    localStorage.setItem('databook', JSON.stringify(dataBooks))
    let dataTable = data?.map((data, index) => {
      return `
            <tr>
              <td>${data.name}</td>
              <td>${data.author}</td>
              <td>${data.topic}</td>
              <td
                class='btn_removebook'
                data-id-book='${index}'
              >
              <button
                style='
                  background-color: #d3455a;
                  color: white;
                  border: none;
                  border-radius: 4px;
                  padding: 5px 10px;
                  font-size: 16px;
                  cursor: pointer;
                  transition:
                  background-color 0.3s ease;
                  '
                onmouseover="this.style.backgroundColor='#e2586d'"
                onmouseout="this.style.backgroundColor='#d3455a'"
                >
                Delete
              </button>
              </td>
            </tr>
            `
    })

    if (dataBooks?.length > 0) {
      table.innerHTML = dataTable.join(' ')
    } else {
      table.innerHTML = ''
    }
    let btnRemoves = document.querySelectorAll('.btn_removebook')

    btnRemoves.forEach((btn, index) => {
      btn.addEventListener('click', (e) => handleOpenModalDelBook(e, data[index]))
    })
  }

  function renderContainer(data) {
    if (dataUserStorage || data) {
      userName.innerHTML = dataUserStorage || data
      sectionMain.style.display = 'flex'
      modalLogin.classList.add('off')
    }
  }

  function handleDom() {
    formADD.addEventListener('submit', (e) => handleAddBook(e))
    formLogin.addEventListener('submit', (e) => handleLogin(e))
    btnAddBook.addEventListener('click', handleToggleModalAddBook)
    btnCloseAddModal.addEventListener('click', handleToggleModalAddBook)
    inputSearch.addEventListener('input', (e) => handleSearchItem(e))
    btnLogout.addEventListener('click', handleLogout)
  }

  function handleRender() {
    handleRenderDataTable(dataBooks)
    renderContainer()
  }

  function start() {
    handleRender()
    handleDom()
  }

  start()
}

App()
