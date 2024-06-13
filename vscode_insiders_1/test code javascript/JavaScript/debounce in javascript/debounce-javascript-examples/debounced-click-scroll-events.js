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
  const yScrolledLocationEl = document.querySelector('#y-scrolled-location')
  const clickedPoint = document.querySelector('#clicked-point')

  yScrolledLocationEl.textContent = String(window.scrollY)

  function handleScroll() {
    debounce(() => {
      yScrolledLocationEl.textContent = String(window.scrollY)
    })
  }

  function handleClick(event) {
    debounce(() => {
      clickedPoint.textContent = 'x: ' + event.clientX + ', y: ' + event.clientY
    })
  }

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('click', handleClick)
}
