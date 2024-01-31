import { useEffect, useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(1)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    console.log('useEffect running')
    document.title = `You click ${counter}`
  })

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      {console.log('component render end')}
    </div>
  )
}

export default Counter

// 1. useEffect chạy vào thời điểm nào của 1 version component được tạo ra
// Chạy sau khi mỗi lần component render
// Thứ tự chạy: function component render => sau đó tới useEffect

/**
 * 2. Tại sao useEffect lại chạy sau mỗi lần component render
 * - Mục đích là đảm bảo DOM đã được mount hết
 * - Bản thân useEffect là chạy bất đồng bộ
 */

/**
 * 3. Hook useEffect cũng thuộc về version render nên nó cũng nhớ state, props theo version của nó
 * - Khi click vào button thì useEffect tăng lên 1 => state của nó thời điểm đó là 1
 * - Khi click vào button thì useEffect tăng lên 2 => state của nó thời điểm đó là 2
 * - ...
 * - Cứ thế như vậy...
 * - Các bạn cố gắng hiểu điều này nhé !!
 */

/**
 * 4.
 * - Khi component lần đầu render => theo class component được gọi là mounted
 * - Khi component lần thứ 2 render => thì được gọi là updated
 * - Component cứ mỗi lần render thì hàm useEffect chạy lại. Và nó chạy sau component render
 */

/**
 * - Trường hợp thường gặp nhất là mình sử dụng setTimeout, setInterval, khi dùng những hàm đó thì mình phải set thời gian cho nó.
 * - Nên khi component render lên thì khi mà chạy đến hàm setTimout, setInterval thì nó chuyển qua bên Web APIs để bên đó nó sử lý, dù những hàm đó có set 0 giây đi chăng nữa thì nó bắt buộc phải chạy sau khi Call Stack trống.
 * - Thời gian mà mình set trong hàm setTimeout, setInterval xong thì các câu lệnh trong hàm đó sẽ được chuyển vào Callback queue. Nó vào trong đó đứng đợi các hàm trong Call Stack chạy xong rồi thì nó mới bắt đầu chuyển code từ Callback queue vô Call Stack chạy
 */

/**
 * - Tóm lại: ✅
 * + Chung quy lại thì hàm useEffect (hook) luôn chạy sau function component ✅
 * + Nếu truyền mỗi 1 tham số callback thì component render => useEffect sẽ được chạy sau đấy ✅
 */
