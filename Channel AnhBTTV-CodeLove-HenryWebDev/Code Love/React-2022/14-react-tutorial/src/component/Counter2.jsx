import { useState } from 'react'

function Counter2() {
  const [counter, setCounter] = useState(1)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  console.dir(handleIncrement)

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default Counter2

/**
 * - lần render đầu tiên:
 *
 * - Để kiện để nó trở thành closure thì nó phải đảm bảo 2 điều kiện sau:
 * + Nó phải là hàm được bao đóng trong function
 * + Nó phải sử dụng biến của function bên ngoài
 */

/**
 * - lần render thứ 2:
 *
 * - Để kiện để nó trở thành closure thì nó phải đảm bảo 2 điều kiện sau:
 * + Nó phải là hàm được bao đóng trong function
 * + Nó phải sử dụng biến của function bên ngoài
 */

/**
 * Khi thằng App chạy thì ở trong handler nó luôn luôn nhớ giá trị lần chạy trước đó nhờ closure ✅
 */
