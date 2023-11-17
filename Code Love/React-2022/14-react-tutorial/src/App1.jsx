import './App.css'
import Product from './component/Product'
import User from './component/User'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

// console.log('>>> User:', User(1, 2))

// let stateValue // vị trí khai báo global

// /**
//  * - Trong bài này có sử dụng closure và scope trong function. Nên tìm hiểu sâu về những vấn đề này
//  * - Hãy tìm hiểu kỹ những vấn khái niệm đó để có thể hiểu luồng code chạy như thế nào
//  */

// /**
//  * - Đây là cách viết phân tích nhỏ và viết dưới tầng lớp của React
//  * - Và mình tự tạo hàm Render trong code lun
//  */

// function useState(initialState) {
//   if (stateValue === undefined) {
//     stateValue = initialState
//   }

//   function setValue(value) {
//     stateValue = value
//     console.log('value up:', value)

//     // Sau khi state thay đổi thì render lại
//     ReactDOM.createRoot(document.getElementById('root')).render(<App />)
//   }
//   return [stateValue, setValue]
// }

// /**
//  * Khi state thay đổi thì component (UI) thay đổi
//  */

// function App1() {
//   const [counter, setCounter] = useState(1)
//   // 2 dòng log này sẽ render ra lần đầu tiên khi chạy
//   console.log('counter up:', counter) // log ra => 1
//   console.log('setCounter function:', setCounter) // log ra => function

//   const handleIncrement = function () {
//     setCounter(counter + 1) // setCounter(1 + 1) => setCounter(2) => biến value = 2
//     console.log('setCounter up:', counter)
//     console.log('stateValue up:', stateValue)
//   }
//   console.log('setCounter up part 2:', counter)

//   console.log('--------------------')

//   const handleDecrement = function () {
//     setCounter(counter - 1) // setCounter(1 - 1) => setCounter(0) => biến value = 0
//     console.log('setCounter down:', counter)
//     console.log('stateValue down:', stateValue)
//     console.log('setCounter down part 2:', counter)
//   }

//   return (
//     <div className='App'>
//       {/* <User /> */}
//       {/* <Product /> */}

//       {/* component counter */}
//       <h1>Counter {counter}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   )
// }

// export default App1

/**
 * Đây là cách viết của ReactJS
 */

function App1() {
  const [counter, setCounter] = useState(1)

  const handleIncrement = function () {
    setCounter(counter + 1)
  }

  const handleDecrement = function () {
    setCounter(counter - 1)
  }

  return (
    <div className='App1'>
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default App1
