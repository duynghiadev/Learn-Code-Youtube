const input = document.querySelector('input')
const form = document.querySelector('form')
const isbn = '0747532699'
const URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'
const bookInfo = document.querySelector('.book-info')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch(URL + input.value)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Ops')
      }
      return res.json()
    })
    .then(({ items: [book] }) => {
      const {
        volumeInfo: { title }
      } = book
      const h2 = document.createElement('h2')
      h2.innerText = title
      bookInfo.append(h2)
    })
    .catch((err) => {
      console.log(err)
    })
})
