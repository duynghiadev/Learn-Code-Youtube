// Refactored debounce function to accept a handler function and delay time
function debounce(handler, delay) {
  let timeout

  // Debounced function
  const debounceFunc = () => {
    clearTimeout(timeout)
    timeout = setTimeout(handler, delay)
  }

  // Function to clear the timeout
  debounceFunc.clear = function () {
    clearTimeout(timeout)
  }

  return debounceFunc
}

// Modified fetchData function to fetch data from a free API (JSONPlaceholder) and log it
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error fetching data:', error))
}

// Debounce the fetchData function to avoid excessive API requests
const debouncedFetchData = debounce(fetchData, 1000)

// Call debouncedFetchData immediately
debouncedFetchData()

// Call debouncedFetchData after 1 second (1000 milliseconds)
setTimeout(debouncedFetchData, 1000)

// Uncomment the line below to clear the debounce timeout
// debouncedFetchData.clear();
