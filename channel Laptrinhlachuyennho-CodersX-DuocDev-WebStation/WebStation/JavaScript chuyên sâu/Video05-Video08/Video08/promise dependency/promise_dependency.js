const button = document.querySelector('button')
const text = document.querySelector('#text')
const picture = document.querySelector('#picture')
const picture2 = document.querySelector('#picture2')

button.addEventListener('click', () => {
  handleTextPicture()
})

const handleTextPicture = () => {
  requestKhongPhuThuoc()
  requestPhuThuoc()
}

const requestKhongPhuThuoc = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((text) => {
      return text.json()
    })
    .then((returnThen1) => {
      console.log('returnThen1.title:', returnThen1.title)
      console.log('returnThen1.id:', returnThen1.id)
      text.innerHTML = returnThen1.title
    })

  fetch('https://dog.ceo/api/breeds/image/random')
    .then((image) => {
      return image.json()
    })
    .then((returnThenData) => {
      console.log('returnThenData.status:', returnThenData.status)
      picture.src = returnThenData.message
    })
}

const requestPhuThuoc = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((text) => {
      return text.json()
    })
    .then((returnThen1) => {
      const thanhcong = returnThen1.id
      if (thanhcong > 0) {
        return fetch('https://dog.ceo/api/breeds/image/random')
      }
    })
    .then((image) => {
      console.log('image in function requestPhuThuoc:', image)
      return image.json()
    })
    .then((returnThenData) => {
      picture2.src = returnThenData.message
      console.log('picture2.src:', picture2.src)
    })
    .catch((error) => {
      console.log('error:', error)
    })
}
