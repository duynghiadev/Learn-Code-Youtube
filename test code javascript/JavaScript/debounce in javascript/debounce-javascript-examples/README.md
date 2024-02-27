# Debounce Javascript Examples

[Link github](https://github.com/muhamadzolfaghari/debounce-javascript-examples)

A set of examples for how to avoid triggering multiple requests at once

“Debounce” is a way to avoid sending multiple user requests to the web service at once to avoid reducing the performance
of the application.

> Keep the App calm and steady!

## When can frequent requests occur?

### Toggle Buttons

Turn to dark or light mode or change state per each click

### Search Inputs

photos or product which is triggered by a web API service per key down

### What is a way to prevent user from that?

The short answer is use of a “debounce” method.

Debouncing is applied a delay to process unwanted input which makes too many requests at once from buttons, switches, or
other user input.

### First Example

It's a way to use of the debounce with power of closure. In this sample only "third" is printed in the console, the
other function is ignored.

```javascript
function debounceClusre() {
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

const debounce = debounceClusre()

debounce(() => {
  console.log('first')
})
debounce(() => {
  console.log('second')
})
debounce(() => {
  console.log('third')
})
```

### Second Example

The code is only executed when the user is stopped typing, it means the function is not triggered by each key pressing
and the `event.target.value` has only the latest value in input.

```html
<script>
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

  function handleChange(event) {
    debounce(() => {
      const liEl = document.createElement('li')
      liEl.textContent = '?search=' + event.target.value
      document.querySelector('ul').appendChild(liEl)
    })
  }
</script>
<label>
  <input width="200" style="padding: 20px" type="text" onkeyup="handleChange(event)" />
</label>
```

### Third Example

You can also add events to resize, scroll, and click events and so on, on the other hand, every situation which is
affected the performance of application by frequently calculate or run a complex function as a handler.

```javascript
window.addEventListener('scroll', handleScroll)
window.addEventListener('click', handleClick)
window.addEventListener('scroll', handleResize)
```

### Fourth Example

An easy way to create debounce only by “useRef” in React

```typescript jsx
export default function DebouncedSearchInput() {
  const [value, setValue] = useState('')
  const timeoutId = useRef<number>()

  useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    timeoutId.current = window.setTimeout(async () => {
      // Make an HTTP request
    }, 500)

    return () => {
      clearTimeout(timeoutId.current)
    }
  }, [value])

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    setValue((event.target as HTMLInputElement).value)
  }

  return <input onKeyUp={handleKeyUp} />
}
```

### Example with full code

Finally, each example is available in this repository as html and tsx file. You can feel free to use this code as you
want in your project.
