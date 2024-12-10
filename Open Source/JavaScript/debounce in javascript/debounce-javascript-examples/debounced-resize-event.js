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

function main() {
  const currentWidthEl = document.querySelector('#current-width')
  currentWidthEl.textContent = String(window.innerWidth)

  function handleResize() {
    debounce(() => {
      currentWidthEl.textContent = String(window.innerWidth)
    })
  }

  window.addEventListener('resize', handleResize)
}
