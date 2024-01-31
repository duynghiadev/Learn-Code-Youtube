localStorage.setItem('name', 'Jon Done')
localStorage.setItem('name', 30)

localStorage.user = JSON.stringify({ name: 'Sam', age: 19 })

let user = JSON.parse(localStorage.user)
console.log('user in localStorage:', user)

localStorage.clear()
