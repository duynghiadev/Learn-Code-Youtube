const englishButton = document.getElementById('english-button')
const vietnameseButton = document.getElementById('vietnamese-button')
const searchInput = document.getElementById('search-input')
const formAddBook = document.querySelector('.form-add-book')
const formEditBook = document.querySelector('.form-edit-book')
const inputName = document.querySelector('#name')
const inputAuthor = document.querySelector('#author')
const selectTopic = document.querySelector('#topic')
const deleteModal = document.querySelector('.delete-modal')
const editModalContainer = document.querySelector('.edit-modal')
const deleteBookButton = document.querySelector('#delete-book-button')
const cancelBookButton = document.querySelector('#cancel-book-button')
const addButton = document.querySelector('.add-button')
const addModalContainer = document.querySelector('.add-modal')
const deleteModalContainer = document.querySelector('.delete-modal')
const closeAddModalButton = document.querySelector('#close-modal-add')
const closeDeleteModalButton = document.querySelector('#close-btn-delete')
const bookNameSpan = document.querySelector('.book-name')
const closeEditModalButton = document.querySelector('#close-modal-edit')
const bookListArr = [
  {
    id: 1,
    name: 'Refactoring',
    author: 'Martin Fowler',
    topic: 'Programming'
  },
  {
    id: 2,
    name: 'Design Data-Intensive Applications',
    author: 'Martin Kleppman',
    topic: 'Database'
  },
  {
    id: 3,
    name: 'The Phoenix Project',
    author: 'Gene Kim',
    topic: 'Devops'
  },
  {
    id: 4,
    name: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    topic: 'Frontend'
  },
  {
    id: 5,
    name: 'Node.js Design Patterns',
    author: 'Mario Casciaro',
    topic: 'Backend'
  },
  {
    id: 6,
    name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    topic: 'Programming'
  },
  {
    id: 7,
    name: 'Database Systems: The Complete Book',
    author: 'Hector Garcia-Molina',
    topic: 'Database'
  },
  {
    id: 8,
    name: 'Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation',
    author: 'Jez Humble and David Farley',
    topic: 'Devops'
  },
  {
    id: 9,
    name: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    topic: 'Frontend'
  },
  {
    id: 10,
    name: 'Python Crash Course',
    author: 'Eric Matthes',
    topic: 'Programming'
  },
  {
    id: 11,
    name: 'Introduction to the Theory of Computation',
    author: 'Michael Sipser',
    topic: 'Programming'
  },
  {
    id: 12,
    name: 'MongoDB: The Definitive Guide',
    author: 'Kristina Chodorow',
    topic: 'Database'
  },
  {
    id: 13,
    name: 'Kubernetes Up and Running',
    author: 'Kelsey Hightower',
    topic: 'Devops'
  },
  {
    id: 14,
    name: 'React Up and Running',
    author: 'Stoyan Stefanov',
    topic: 'Frontend'
  },
  {
    id: 15,
    name: 'Node.js in Action',
    author: 'Mike Cantelon',
    topic: 'Backend'
  },
  {
    id: 16,
    name: 'Agile Estimating and Planning',
    author: 'Mike Cohn',
    topic: 'Devops'
  },
  {
    id: 17,
    name: 'Head First Java',
    author: 'Kathy Sierra and Bert Bates',
    topic: 'Programming'
  },
  {
    id: 18,
    name: 'Learning SQL',
    author: 'Alan Beaulieu',
    topic: 'Database'
  },
  {
    id: 19,
    name: 'The Pragmatic Programmer',
    author: 'Andrew Hunt and David Thomas',
    topic: 'Programming'
  },
  {
    id: 20,
    name: 'Docker Deep Dive',
    author: 'Nigel Poulton',
    topic: 'Devops'
  }
]

const translations = {
  'en': {
    'language': 'English',
    'titleSite': 'BookStore',
    'addBook': 'Add Book',
    'addButton': 'Create',
    'cancelButton': 'Cancel',
    'searchPlaceholder': 'Search Book',
    'namePlaceholder': 'Enter Name Book',
    'authorPlaceholder': 'Enter Author Book',
    'modalTitle': 'Add New Book',
    'nameLabel': 'Name',
    'editButton': 'Edit',
    'deleteButton': 'Delete',
    'authorLabel': 'Author',
    'topicLabel': 'Topic',
    'actionLabel': 'Action',
    'confirmButton': 'Confirm',
    'closeButton': 'Close',
    'idLabel': '#',
    'selectTopic': 'Select Topic',
    'editBook': 'Edit Book',
    'saveBook': 'Save Book',
    'deleteBook': 'Delete Book',
    'deleteBookConfirmation': 'Do you want to delete '
  },
  'vi': {
    'language': 'Tiếng Việt',
    'titleSite': 'Cửa hàng sách',
    'addBook': 'Thêm Sách Mới',
    'addButton': 'Thêm Sách',
    'cancelButton': 'Hủy',
    'searchPlaceholder': 'Tìm Sách',
    'namePlaceholder': 'Nhập tên sách',
    'authorPlaceholder': 'Nhập tác giả',
    'modalTitle': 'Thêm Sách Mới',
    'nameLabel': 'Tên Sách',
    'editButton': 'Sửa',
    'deleteButton': 'Xoá',
    'authorLabel': 'Tác giả',
    'topicLabel': 'Chủ đề',
    'actionLabel': 'Hành động',
    'confirmButton': 'Xác nhận',
    'closeButton': 'Đóng',
    'idLabel': 'STT',
    'selectTopic': 'Chọn chủ đề',
    'editBook': 'Sửa thông tin sách',
    'saveBook': 'Lưu',
    'deleteBook': 'Xoá sách',
    'deleteBookConfirmation': 'Bạn có muốn xóa '
  }
}
let currentLanguage = 'en'
let idItem = 0
const SaveBookStore = (bookList) => {
  localStorage.setItem('bookstore', JSON.stringify(bookList))
}
const GetBookStore = () => {
  let bookLists = JSON.parse(localStorage.getItem('bookstore'))
  if (bookLists === null || bookLists.length === 0) {
    SaveBookStore(bookListArr)
    bookLists = bookListArr
  }
  return bookLists
}
englishButton.addEventListener('click', function (e) {
  e.preventDefault()
  currentLanguage = 'en'
  updateTextByLanguage()
})
vietnameseButton.addEventListener('click', function (e) {
  e.preventDefault()
  currentLanguage = 'vi'
  updateTextByLanguage()
})

function updateTextByLanguage() {
  const elementsToChange = document.querySelectorAll('[data-i18n]')
  if (searchInput.placeholder) {
    searchInput.placeholder = translations[currentLanguage]['searchPlaceholder']
  }

  elementsToChange.forEach(element => {
    const key = element.getAttribute('data-i18n')
    if (translations && translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key]
    }
  })
}

let allBooks = GetBookStore()
const itemsPerPage = 5
let totalPages = Math.ceil(allBooks.length / itemsPerPage)
let currentPage = 1

function displayPageNumbers() {
  const pageNumbersContainer = document.querySelector('#pagination-numbers')
  pageNumbersContainer.innerHTML = ''

  for (let i = 1; i <= totalPages; i++) {
    const pageNumberButton = document.createElement('button')
    pageNumberButton.textContent = i
    pageNumberButton.classList.add('pagination-number')
    if (totalPages === 1) {
      break
    }
    if (i === currentPage) {
      pageNumberButton.classList.add('active')
    }

    pageNumberButton.addEventListener('click', function () {
      currentPage = i
      displayBooks(allBooks, currentPage)
    })

    pageNumbersContainer.appendChild(pageNumberButton)
  }
}

function displayBooks(bookList, page = 1) {
  totalPages = Math.ceil(bookList.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const booksToDisplay = bookList.slice(startIndex, endIndex)
  const tbody = document.querySelector('#table-book tbody')
  tbody.innerHTML = ''
  booksToDisplay.forEach((book, index) => {
    const newRow = document.createElement('tr')
    newRow.classList.add('book-item')
    newRow.innerHTML = `
            <td>${startIndex + index + 1}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.topic}</td>
            <td>
                <a data-i18n="editButton" id="edit-book" onclick="OpenEditModal(${book.id},'${book.name}','${book.author}','${book.topic}')" class="edit-book">Edit</a>
                <a data-i18n="deleteButton" id="delete-book" onclick="OpenDeleteModal(${book.id}, '${book.name}')" class="delete-book">Delete</a>
            </td>
        `
    tbody.appendChild(newRow)
  })
  const prevPageButton = document.getElementById('prev-page')
  if (prevPageButton && prevPageButton.parentNode) {
    prevPageButton.parentNode.removeChild(prevPageButton)
  }
  const nextPageButton = document.getElementById('next-page')
  if (nextPageButton && nextPageButton.parentNode) {
    nextPageButton.parentNode.removeChild(nextPageButton)
  }
  if (currentPage > 1) {
    const tableContainer = document.querySelector('.pagination-container')
    const newPrevPageButton = createPaginationButton('<', 'prev-page')
    tableContainer.insertBefore(newPrevPageButton, tableContainer.firstChild)
  }

  if (currentPage < totalPages) {
    const tableContainer = document.querySelector('.pagination-container')
    const newNextPageButton = createPaginationButton('>', 'next-page')
    tableContainer.appendChild(newNextPageButton)
  }
  displayPageNumbers()
}

function createPaginationButton(text, id) {
  const button = document.createElement('button')
  button.textContent = text
  button.id = id
  button.className = 'pagination-button'
  return button
}

document.addEventListener('click', function (event) {
  if (event.target.id === 'prev-page' && currentPage > 1) {
    currentPage--
    displayBooks(allBooks, currentPage)
  } else if (event.target.id === 'next-page' && currentPage < totalPages) {
    currentPage++
    displayBooks(allBooks, currentPage)
  }
})
const paginationContainer = document.querySelector('.pagination-container')
const nextPageButton = createPaginationButton('>', 'next-page')
paginationContainer.appendChild(nextPageButton)
const inputNames = document.querySelector('#names')
const inputAuthors = document.querySelector('#authors')
const selectTopics = document.querySelector('#topics')

const OpenEditModal = (id, name, author, topic) => {
  editModalContainer.classList.add('active-modal')
  if (id && name && author && topic) {
    inputNames.placeholder = translations[currentLanguage]['namePlaceholder']
    inputAuthors.placeholder = translations[currentLanguage]['authorPlaceholder']
    inputNames.value = name
    inputAuthors.value = author
    for (var i = 0; i < selectTopics.options.length; i++) {
      if (selectTopics.options[i].value == topic) {
        selectTopics.selectedIndex = i
        break
      }
    }
    idItem = id
  }

}
const CloseEditModal = () => {
  editModalContainer.classList.remove('active-modal')
}


const SubmitFormEditBook = (e) => {
  e.preventDefault()
  const bookList = GetBookStore().map(item => {
    if (item.id === idItem) {
      item.name = inputNames.value
      item.author = inputAuthors.value
      item.topic = selectTopic.options[selectTopics.selectedIndex].value
    }
    return item
  })
  SaveBookStore(bookList)
  allBooks = bookList
  displayBooks(bookList)
  inputNames.value = ''
  inputAuthors.value = ''
  CloseEditModal()
}
let idBookToDelete
const DeleteBook = (id) => {
  const updatedBookList = GetBookStore().filter(item => item.id !== idBookToDelete)
  SaveBookStore(updatedBookList)
  allBooks = updatedBookList
  currentPage = 1
  displayBooks(updatedBookList)
}
const OpenDeleteModal = (id, name) => {
  deleteModal.classList.add('active-modal')
  idBookToDelete = id
  if (currentLanguage === 'en') {
    bookNameSpan.innerHTML = translations[currentLanguage]['deleteBookConfirmation'] + ' <b>' + name + '</b> book ?'
  } else {
    bookNameSpan.innerHTML = translations[currentLanguage]['deleteBookConfirmation'] + ' <b>' + name + '</b> không?'
  }
}
const CloseDeleteModal = () => {
  deleteModal.classList.remove('active-modal')
}
const ConfirmDelete = () => {
  CloseDeleteModal()
  DeleteBook(idBookToDelete)
}
const SearchBook = (event) => {
  const filter = []
  const searchValue = event.target.value.toLowerCase()
  GetBookStore().forEach((book) => {
    const bookName = book.name.toLowerCase()
    if (bookName.includes(searchValue)) {
      filter.push(book)
    }
  })
  currentPage = 1
  if (searchValue) {
    displayBooks(filter)
  } else {
    displayBooks(GetBookStore())
  }
}

const SubmitFormAddBook = (e) => {
  e.preventDefault()
  const formValue = {
    id: GetBookStore().reduce((max, book) => (book.id > max ? book.id : max), 0) + 1,
    name: inputName.value,
    author: inputAuthor.value,
    topic: selectTopic.options[selectTopic.selectedIndex].value
  }
  const newListBook = [...GetBookStore(), formValue]
  SaveBookStore(newListBook)
  allBooks = newListBook
  currentPage = 1
  displayBooks(newListBook)
  inputName.value = ''
  inputAuthor.value = ''
  addModalContainer.classList.remove('active-modal')
}
const showModalAdd = (e) => {
  e.preventDefault()
  inputName.placeholder = translations[currentLanguage]['namePlaceholder']
  inputAuthor.placeholder = translations[currentLanguage]['authorPlaceholder']
  addModalContainer.classList.add('active-modal')
}
const hideAddModal = (e) => {
  addModalContainer.classList.remove('active-modal')
}
const hideDeleteModal = (e) => {
  deleteModalContainer.classList.remove('active-modal')
}
closeEditModalButton.addEventListener('click', CloseEditModal)
deleteBookButton.addEventListener('click', ConfirmDelete)
cancelBookButton.addEventListener('click', CloseDeleteModal)
addButton.addEventListener('click', showModalAdd)
closeAddModalButton.addEventListener('click', hideAddModal)
closeDeleteModalButton.addEventListener('click', hideDeleteModal)
formEditBook.addEventListener('submit', SubmitFormEditBook)
formAddBook.addEventListener('submit', SubmitFormAddBook)
searchInput.addEventListener('keyup', SearchBook)
displayBooks(allBooks, currentPage)
updateTextByLanguage()

const themeSwitch = document.getElementById('theme-switch')
const body = document.body

const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  body.classList.add(savedTheme)
  if (savedTheme === 'dark-mode') {
    themeSwitch.checked = true
  }
}

themeSwitch.addEventListener('change', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode')
    localStorage.setItem('theme', 'light-mode')
  } else {
    body.classList.add('dark-mode')
    localStorage.setItem('theme', 'dark-mode')
  }
})

