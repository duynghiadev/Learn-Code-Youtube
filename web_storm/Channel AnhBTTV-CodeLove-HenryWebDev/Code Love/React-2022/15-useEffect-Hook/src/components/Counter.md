1. Lần đầu tiên render, thì nó tạo ra 1 version (Mình tạm đặt tên function là 001)

```js
const Counter = () => {
  const [counter, setCounter] = useState(1)
  // Sau lần đầu render thì nó set counter = 1
  
  // Tại sao counter = 1, thì các bạn nhớ đây là closure nhé
  // Closure nó lưu giá trị ở trong hàm Counter

  const handleIncrement = () => {
    // Tại đây hiện tại counter vẫn bằng 1
    // Nếu closure nó vào đây tìm giá trị không có thì biến nó chạy ra ngoài để lấy giá trị của cái function bao ngoài
    setCounter(counter + 1)
  }

  return (
    <div>
      {/*Ở dưới đây nó cũng nhận vào counter = 1*/}
      <h1>Counter {counter}</h1> <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

// Khi click button thì setCounter(counter + 1) chạy và nó thấy state biến đổi từ 1 lên 2 (vì state trước đó là 1 => setCounter(1 + 1) = 2. Từ đó dẫn đến component re-render
```

2. Thì do nó re-render nên nó tiếp tục tạo ra 1 version mới của function. Đó là version 002

```js
const Counter = () => {
  const [counter, setCounter] = useState(1)
  // Khi function ở version 2 thì counter = 2

  const handleIncrement = () => {
    // Tại đây thì state counter cũng bằng 2 luôn
    // Khi mình nhấn button Increment thì nó sẽ tăng lên setCounter(2 + 1) = 3
    setCounter(counter + 1)
  }

  return (
    <div>
      {/*Tại dòng này nó cũng render Counter là 2. Đến khi mình nhấn button thì nó sẽ tăng lên 3, và cứ thế,...*/}
      <h1>Counter {counter}</h1> <button onClick={handleIncrement}>Increment</button>

      {/*Sau cái dòng tăng từ 2 -> 3 thì state nó thay đổi, mà thay đổi thì component sẽ re-render lại function*/}
    </div>
  )
}
```

- Lưu ý: Mỗi lần nó re-render thì nó gọi lại hàm `Counter()`. Giống như các bạn gọi hàm thuần thôi vậy đó, bởi vì nó độc lập hết á => Do mình khai báo là `useState` là `const` => Nếu mà nó giống nhau là nó sẽ bị lỗi các bạn nhé

- Thật ra là các bạn đang gọi lại hàm `Counter` n lần, nếu như cái component render n lần. Và tất cả những gì bên trong là độc lập ở hiện tại cái version đấy nhé.