## Tìm hiểu về promise và axios trong JavaScript

- Trong JavaScript, Promise là một khái niệm được sử dụng để xử lý các tác vụ bất đồng bộ (asynchronous tasks) một cách linh hoạt và dễ quản lý. Promise là một đối tượng đại diện cho giá trị chưa được xác định khi một hành động bất đồng bộ hoàn thành (hoặc thất bại), cung cấp một cơ chế để xử lý kết quả của hành động đó.

- Axios, một thư viện HTTP client trong JavaScript, được sử dụng để thực hiện các yêu cầu HTTP từ trình duyệt hoặc Node.js. Axios giúp dễ dàng thực hiện các yêu cầu HTTP và xử lý kết quả của chúng. Nó sử dụng Promise để quản lý các yêu cầu và phản hồi.

- Dưới đây là một số điểm cơ bản về Promise và Axios:

**Promise:**

1. Cú pháp cơ bản:

```js
const myPromise = new Promise((resolve, reject) => {
  // Logic xử lý bất đồng bộ
  if (/* thành công */) {
    resolve("Thành công");
  } else {
    reject("Thất bại");
  }
});
```

2. Sử dụng Promise:

```js
myPromise
  .then((result) => {
    // Xử lý khi promise được giải quyết (resolve)
    console.log(result)
  })
  .catch((error) => {
    // Xử lý khi promise bị từ chối (reject)
    console.error(error)
  })
```

**Axios:**

1. Cài đặt Axios:

```js
npm install axios
```

2. Sử dụng Axios:

```js
const axios = require('axios')

axios
  .get('https://api.example.com/data')
  .then((response) => {
    // Xử lý kết quả thành công
    console.log(response.data)
  })
  .catch((error) => {
    // Xử lý khi có lỗi
    console.error(error)
  })
```

3. Gửi dữ liệu với POST:

```js
axios
  .post('https://api.example.com/post', {
    key: 'value'
  })
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })
```

4. Interceptors:

- Axios hỗ trợ sử dụng interceptors để xử lý yêu cầu và phản hồi trước khi chúng được xử lý bởi `.then` hoặc `.catch`.

```js
// Interceptor cho yêu cầu
axios.interceptors.request.use(
  (config) => {
    // Thực hiện xử lý trước khi gửi yêu cầu
    return config
  },
  (error) => {
    // Xử lý khi có lỗi yêu cầu
    return Promise.reject(error)
  }
)

// Interceptor cho phản hồi
axios.interceptors.response.use(
  (response) => {
    // Thực hiện xử lý trước khi xử lý phản hồi
    return response
  },
  (error) => {
    // Xử lý khi có lỗi phản hồi
    return Promise.reject(error)
  }
)
```

- Axios cung cấp một cách dễ sử dụng và mạnh mẽ để thực hiện các yêu cầu HTTP trong khi Promise giúp quản lý logic bất đồng bộ một cách hiệu quả. Kết hợp chúng giúp xây dựng ứng dụng JavaScript mạnh mẽ và linh hoạt.

### Ví dụ sử dụng Promise và Axios

- Dưới đây là một ví dụ sử dụng Promise và Axios để thực hiện một yêu cầu HTTP đơn giản:

1. Sử dụng Axios để gửi yêu cầu HTTP:

```js
// Import thư viện Axios
const axios = require('axios')

// Hàm thực hiện yêu cầu HTTP bằng Axios và trả về một Promise
function fetchData() {
  return axios.get('https://jsonplaceholder.typicode.com/posts/1')
}

// Gọi hàm fetchData và xử lý kết quả bằng Promise
fetchData()
  .then((response) => {
    // Xử lý kết quả thành công
    console.log('Axios Response:', response.data)
  })
  .catch((error) => {
    // Xử lý khi có lỗi
    console.error('Axios Error:', error)
  })
```

2. Sử dụng Promise để xử lý logic bất đồng bộ:

```js
// Hàm trả về một Promise để mô phỏng logic bất đồng bộ
function simulateAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Giả định thành công
      resolve('Thành công sau 2 giây')
      // Hoặc giả định lỗi
      // reject("Lỗi xảy ra");
    }, 2000)
  })
}

// Gọi hàm và xử lý kết quả bằng Promise
simulateAsyncTask()
  .then((result) => {
    // Xử lý kết quả thành công
    console.log('Promise Result:', result)
  })
  .catch((error) => {
    // Xử lý khi có lỗi
    console.error('Promise Error:', error)
  })
```

- Kết hợp cả hai ví dụ trên, bạn có thể thực hiện một yêu cầu HTTP bằng `Axios` và sau đó xử lý kết quả của nó bằng một Promise để đảm bảo rằng logic bất đồng bộ được quản lý chặt chẽ. Ví dụ này giả định rằng bạn đã cài đặt Axios trong dự án của mình bằng lệnh `npm install axios`.
