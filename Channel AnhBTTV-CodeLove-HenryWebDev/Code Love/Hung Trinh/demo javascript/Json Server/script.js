async function getData() {
  try {
    let data = axios.get('http://localhost:3000/posts')
    return data
  } catch (error) {
    console.log(error)
  }
}

async function postData() {
  try {
    let dataPost = axios.post('http://localhost:3000/posts', {
      author: 'duynghiadev',
      title: 'frontend dev'
    })
    return dataPost
  } catch (error) {
    console.log(error)
  }
}

getData().then((data) => {
  console.log(data)
})

postData().then((dataPost) => {
  console.log(dataPost)
})
