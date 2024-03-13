const ul = document.querySelector('ul')
const URL = 'https://pokeapi.co/api/v2/pokemon'
document.addEventListener('DOMContentLoaded', (e) => {
  fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Ops')
      }
      return res.json()
    })
    .then(({ results }) => {
      console.log(results)
      results.forEach(({ name }) => {
        const li = document.createElement('li')
        li.innerText = name
        ul.append(li)
      })
    })
    .catch((err) => {
      console.log(err)
    })
})
