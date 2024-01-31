### Tìm hiểu về Promise trong JavaScript

- Promise là một khái niệm quan trọng trong JavaScript, được sử dụng để xử lý các tác vụ bất đồng bộ (asynchronous) một cách dễ quản lý và linh hoạt hơn. Promise giúp tránh callback hell (đau đầu với nhiều callback lồng nhau) và là một phần quan trọng của các quá trình xử lý bất đồng bộ trong JavaScript.

- Một Promise có thể ở một trong ba trạng thái:

  - `Pending` (Đang chờ): Trạng thái ban đầu khi một Promise được tạo.
  - `Fulfilled` (Thực hiện thành công): Khi một Promise hoàn thành một cách thành công.
  - `Rejected` (Thực hiện thất bại): Khi một Promise thất bại.

**Tạo một Promise:**

```js
let myPromise = new Promise((resolve, reject) => {
  // Thực hiện công việc bất đồng bộ ở đây

  // Nếu công việc thành công
  resolve('Thành công')

  // Nếu có lỗi
  // reject('Thất bại');
})
```

**Sử dụng Promise:**

```js
myPromise
  .then((result) => {
    // Xử lý kết quả khi Promise được giải quyết thành công
    console.log(result)
  })
  .catch((error) => {
    // Xử lý lỗi khi Promise bị từ chối
    console.error(error)
  })
  .finally(() => {
    // Luôn được thực hiện, không phụ thuộc vào Promise có thành công hay thất bại
    console.log('Hoàn thành')
  })
```

**Ví dụ thực tế:**

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true // Giả sử có dữ liệu thành công
      if (success) {
        resolve('Dữ liệu đã được tải thành công')
      } else {
        reject('Không thể tải dữ liệu')
      }
    }, 2000) // Giả sử việc tải dữ liệu mất 2 giây
  })
}

fetchData()
  .then((data) => {
    console.log(data) // In ra: 'Dữ liệu đã được tải thành công'
  })
  .catch((error) => {
    console.error(error) // In ra: 'Không thể tải dữ liệu'
  })
```

- Promise giúp bạn quản lý mã nguồn một cách sạch sẽ hơn và giảm thiểu callback hell, cung cấp một cách hiệu quả để xử lý các tác vụ bất đồng bộ trong JavaScript.

## Ví dụ `KHÓ` về Promise

- Dưới đây là một ví dụ cực kỳ phức tạp về Promise để thấy rõ sức mạnh và linh hoạt của chúng. Trong ví dụ này, chúng ta sẽ giả định việc tải dữ liệu từ nhiều nguồn khác nhau, sau đó xử lý dữ liệu và hiển thị kết quả cuối cùng.

```js
// Hàm giả lập việc tải dữ liệu từ một nguồn nào đó
function fetchData(source) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.8 // 80% cơ hội thành công
      if (success) {
        resolve(`Dữ liệu từ ${source}`)
      } else {
        reject(`Lỗi khi tải dữ liệu từ ${source}`)
      }
    }, Math.random() * 2000) // Giả sử việc tải dữ liệu mất từ 0 đến 2000ms
  })
}

// Hàm chính để xử lý dữ liệu từ nhiều nguồn
function processMultipleDataSources() {
  const sources = ['Nguồn A', 'Nguồn B', 'Nguồn C']

  const promises = sources.map((source) => {
    return fetchData(source)
      .then((data) => {
        console.log(`Dữ liệu đã được xử lý từ ${source}: ${data}`)
        return data.toUpperCase()
      })
      .catch((error) => {
        console.error(`Lỗi khi xử lý dữ liệu từ ${source}: ${error}`)
        throw error // Ném lỗi để dừng chuỗi Promise nếu có lỗi từ một nguồn nào đó
      })
  })

  return Promise.all(promises)
    .then((results) => {
      console.log('Kết quả cuối cùng:', results)
    })
    .catch((error) => {
      console.error('Lỗi trong quá trình xử lý:', error)
    })
}

// Gọi hàm chính để thực hiện công việc phức tạp
processMultipleDataSources()
```

- Trong ví dụ này, chúng ta sử dụng hàm `fetchData` để giả lập việc tải dữ liệu từ một nguồn nào đó và sử dụng nó trong hàm `processMultipleDataSources` để xử lý dữ liệu từ nhiều nguồn khác nhau. Chúng ta sử dụng `Promise.all` để đợi tất cả các Promise con hoàn thành trước khi tiếp tục xử lý kết quả cuối cùng.

- Lưu ý rằng, trong thực tế, việc sử dụng Promise giúp làm cho mã nguồn linh hoạt hơn và dễ bảo trì hơn, đặc biệt khi xử lý các tác vụ phức tạp và bất đồng bộ.

**Trong đoạn code trên có sử dụng `callback` không?**

- Trong đoạn mã JavaScript trên, callback không được sử dụng trực tiếp, thay vào đó, đang sử dụng Promises và cú pháp async/await để xử lý các tác vụ bất đồng bộ. Tuy nhiên, hàm `fetchData` được thiết kế với cấu trúc Promise, trong đó có thể coi đoạn mã bên trong `setTimeout` là một callback function được chạy sau khi quá trình tải dữ liệu hoàn tất.

- Ở đây, hàm `setTimeout` chính là nơi mà callback function được thực thi khi quá trình tải dữ liệu hoàn tất. Nếu việc tải dữ liệu thành công, `resolve` sẽ được gọi, còn nếu có lỗi, `reject` sẽ được gọi. Cả hai đều là những hành động "callback" sau khi một công việc bất đồng bộ hoàn tất.

**`Promise.all` là nó sẽ đợi cho tất cả request gọi xong rồi thì nó mới in ra 1 lần đúng không?**

- Đúng, `Promise.all` là một phương thức giúp bạn đợi cho đến khi tất cả các Promise trong một mảng đã được giải quyết (hoặc nếu một Promise bị từ chối) trước khi tiếp tục thực hiện các bước tiếp theo. Nó sẽ trả về một Promise mới mà giá trị của nó sẽ là một mảng các giá trị tương ứng với giá trị của các Promise đã giải quyết.

- Dưới đây là một ví dụ:

```js
const promise1 = Promise.resolve('Giải quyết 1')
const promise2 = Promise.resolve('Giải quyết 2')
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Từ chối 3'))

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log('Tất cả các Promise đã giải quyết thành công:', values)
  })
  .catch((error) => {
    console.error('Ít nhất một Promise bị từ chối:', error)
  })
```

- Trong ví dụ này, `Promise.all` sẽ đợi cho cả ba Promise (`promise1`, `promise2`, và `promise3`) được giải quyết hoặc từ chối. Nếu tất cả đều giải quyết, nó sẽ in ra mảng giá trị tương ứng (`['Giải quyết 1', 'Giải quyết 2', 'Từ chối 3']`). Nếu một trong ba Promise bị từ chối, nó sẽ in ra lỗi tương ứng (`'Từ chối 3'`).

**Nêu phương thức hoạt động của join trong JavaScript**

- Trong JavaScript, `join` là một phương thức của đối tượng Array, được sử dụng để tạo một chuỗi mới bằng cách nối tất cả các phần tử của mảng với một chuỗi ngăn cách. Phương thức này không thay đổi mảng gốc, nó chỉ trả về một chuỗi mới.

- Cú pháp:

```js
arr.join([separator])
```

- `arr`: Mảng mà bạn muốn nối các phần tử của nó thành chuỗi.
- `separator`: (Tùy chọn) Chuỗi được sử dụng để ngăn cách giữa các phần tử. Nếu không được cung cấp, các phần tử sẽ được nối mà không có bất kỳ ký tự ngăn cách nào.

- Ví dụ:

```js
const fruits = ['Apple', 'Banana', 'Orange']

// Sử dụng join để nối các phần tử của mảng với dấu phẩy và khoảng trắng
const result = fruits.join(', ')

console.log(result) // Output: 'Apple, Banana, Orange'
```

- Nếu `separator` không được cung cấp hoặc là một chuỗi trống, các phần tử sẽ được nối mà không có bất kỳ ký tự ngăn cách nào.

```js
const numbers = [1, 2, 3, 4, 5]

// Sử dụng join mà không có ký tự ngăn cách
const resultWithoutSeparator = numbers.join()

console.log(resultWithoutSeparator) // Output: '1,2,3,4,5'
```

- Lưu ý rằng `join` không thay đổi mảng gốc, nó chỉ trả về một chuỗi mới. Điều này có thể hữu ích khi bạn muốn tạo một chuỗi từ các phần tử của mảng mà không làm thay đổi mảng đó.
