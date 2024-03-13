/**
 * Đây là ví dụ trong file markdown
 */
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

// Hàm trả về một Promise để mô phỏng logic bất đồng bộ
function simulateAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Giả định thành công
      resolve('Thành công sau 2 giây')
      // Hoặc giả định lỗi
      // reject('Lỗi xảy ra')
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
