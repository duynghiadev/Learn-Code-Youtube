document.addEventListener('DOMContentLoaded', () => {
  const blog_wrapper = document.querySelector('.blog_wrapper')
  renderBlogUI(fetchBlog, blog_wrapper)
})

async function fetchBlog() {
  const response = await fetch(
    'https://www.googleapis.com/blogger/v3/blogs/1738505221869605879/posts?key=AIzaSyDg7wQQ3uw1exn5ZVB_ZAdT-qMLGQy4a9A'
  )
  const data = await response.json()
  return data.items
}
fetchBlog()

async function renderBlogUI(callback, element) {
  const blogArray = await callback()
  let blogRender = ''
  blogArray.forEach((blog, index) => {
    console.log('blog:', blog)
    console.log('blog.title:', blog.title)

    const blogAvartar = getAvatar(blog)
    blogRender += `
    <div class="blog_item">
        <img
          src=${blogAvartar}
        />
        <h2>${blog.title}</h2>
      </div>
    `
    element.innerHTML = blogRender
  })
  console.log('blogArray:', blogArray)
}

function getAvatar(blog) {
  const contentString = blog.content
  console.log('contentString:', contentString)

  const element = document.createElement('div')
  element.innerHTML = contentString
  const avatar = element.querySelector('img')

  console.log('avatar:', avatar)
  return avatar.src
}

// ----------------------------------------------------------
// const API_KEY_BLOGGER = 'AIzaSyDg7wQQ3uw1exn5ZVB_ZAdT-qMLGQy4a9A'
// const BLOG_ID = '1738505221869605879'
