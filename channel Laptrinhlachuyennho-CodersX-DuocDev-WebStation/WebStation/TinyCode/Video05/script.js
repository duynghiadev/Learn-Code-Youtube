function craft(text) {
  const p = document.createElement('p')
  p.innerHTML = text
  document.body.append(p)
}

craft('testing') // sync

const lazy = () => {
  const fetchItem = new Promise((resolve) => {
    craft('sync - promise') // sync -> eager
    setTimeout(() => {
      craft('async - promise') // async -> eager
      resolve('async - promise resolve')
    }, 2000)
  })
  return fetchItem
}

lazy().then((data) => craft(data))
