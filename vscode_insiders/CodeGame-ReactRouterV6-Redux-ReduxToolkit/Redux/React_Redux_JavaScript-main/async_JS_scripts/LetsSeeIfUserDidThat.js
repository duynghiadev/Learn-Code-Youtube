document.addEventListener('DOMContentLoaded', () => {
  const $title = document.getElementById('title')
  const $completed = document.getElementById('completed')
  const $author = document.getElementById('author')

  const getUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const { userId, title, completed } = await res.json()

    const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const { name } = await resUser.json()
    $title.innerText = title
    $author.innerText = name
    $completed.innerText = completed ? 'Zrobione' : 'Nie zrobione'

    if (completed) {
      $completed.classList.add('badge-success')
    } else {
      $completed.classList.add('badge-danger')
    }
  }

  getUser().catch((err) => console.log(err))
})
