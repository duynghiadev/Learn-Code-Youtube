(function () {
  function fetchPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then((posts)=>{
      console.log('Fetched Posts:',posts)

      displayPosts(posts)
    })
      .catch((error)=>{
        console.error('Error fetching posts:',error)
    })
  }

  function displayPosts(posts){
    const postList = document.createElement('ul')

    posts.forEach((post)=>{
      const listItem = document.createElement('li')
      listItem.textContent = post.title
      postList.appendChild(listItem)
    })

    document.body.appendChild(postList)
  }

  fetchPosts()
})()