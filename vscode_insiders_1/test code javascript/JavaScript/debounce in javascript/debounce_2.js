// Refactored debounce function to accept the function, wait time, and immediate flag as parameters
function debounce(func, wait, immediate) {
  var timeout

  return function () {
    var context = this,
      args = arguments

    var later = function () {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }

    var callNow = immediate && !timeout

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)

    if (callNow) {
      func.apply(context, args)
    }
  }
}

// Modified fetchData function to fetch data from a free API (JSONPlaceholder) and log it
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error fetching data:', error))
}

// Debounce the fetchData function to avoid excessive API requests
var debouncedFetchData = debounce(fetchData, 250)

// Call debouncedFetchData immediately
debouncedFetchData()

// Call debouncedFetchData on every resize event
if (
  typeof process === 'undefined' ||
  !(process && process.release && process.release.name === 'node')
) {
  // This code block will run only in browser-like environments
  window.addEventListener('resize', debouncedFetchData)
}
