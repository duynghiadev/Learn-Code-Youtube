/**
 * - Trong bài này chúng ta học bài: 7 - Thay Thế Code Callback Với Promise
 */

const formatData = (xhttp) => {
  const posts = JSON.parse(xhttp.responseText)
  let postList = ''
  for (let post of posts) {
    postList += '<p>' + post.title + '</p>'
  }
  document.getElementById('post_list').innerHTML = postList
}

const asyncXmlCallApiPromise = (url) => {
  return new Promise((resolve, reject) => {
    // code async
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', url, true)
    xhttp.send()

    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        resolve(xhttp)
      }
    }
  })
}

// get posts of first user in list
const getPostList = () => {
  // cosume promise => call api get list users
  asyncXmlCallApiPromise('https://jsonplaceholder.typicode.com/users')
    .then((users) => {
      const userList = JSON.parse(users.responseText)
      const userIdFirst = userList[0].id
      const urlPostsByUserFirst = `https://jsonplaceholder.typicode.com/users/${userIdFirst}/posts`
      return asyncXmlCallApiPromise(urlPostsByUserFirst)
    })
    .then((posts) => {
      formatData(posts)
    })
    .catch((error) => {
      console.log(error)
    })
}
