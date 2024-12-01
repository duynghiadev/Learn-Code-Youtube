function debounceClosure() {
  let timeoutId

  return (callback) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      callback()
    }, 300)
  }
}

const debounce = debounceClosure()

function handleKeyUp(event) {
  debounce(() => {
    const liEl = document.createElement('li')
    liEl.textContent = '?search=' + event.target.value
    document.querySelector('ul').appendChild(liEl)
  })
}
