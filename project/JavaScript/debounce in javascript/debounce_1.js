Function.prototype.debounce = function (threshold, execAsap) {
  var func = this, // reference to original function
    timeout // handle to setTimeout async task (detection period)

  // return the new debounced function which executes the original function only once
  // until the detection period expires
  return function debounced() {
    var obj = this, // reference to original context object
      args = arguments // arguments at execution time

    // this is the detection function. it will be executed if/when the threshold expires
    function delayed() {
      // if we're executing at the end of the detection period
      if (!execAsap) func.apply(obj, args) // execute now
      // clear timeout handle
      timeout = null
    }

    // stop any current detection period
    if (timeout) clearTimeout(timeout)
    // otherwise, if we're not already waiting and we're executing at the beginning of the detection period
    else if (execAsap) func.apply(obj, args) // execute now

    // reset the detection period
    timeout = setTimeout(delayed, threshold || 100)
  }
}

// Example usage with JSONPlaceholder API
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((response) => response.json())
    .then((data) => console.log(data)) // replace this with your desired handling of fetched data
    .catch((error) => console.error('Error fetching data:', error))
}

// Debounce the fetchData function to avoid excessive API requests
var debouncedFetchData = fetchData.debounce(500) // set the threshold to 500 milliseconds

// Call debouncedFetchData whenever you need to fetch data without triggering multiple requests in a short time frame
debouncedFetchData()
