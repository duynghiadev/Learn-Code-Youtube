/**
 * Dưới đây là một ví dụ nâng cao và phức tạp hơn, sử dụng Promise, Axios và các phương thức của mảng để thực hiện một số yêu cầu HTTP và xử lý kết quả:
 */
/**
 * Trong ví dụ này, chúng ta sử dụng Axios để gửi yêu cầu HTTP và Promise để xử lý kết quả. Hàm processData được sử dụng để thực hiện một số xử lý dữ liệu phức tạp. Hàm processPosts sử dụng Promise.all để chạy đồng thời một chuỗi các yêu cầu và xử lý tất cả kết quả khi chúng đã được giải quyết.

  Lưu ý rằng mã này giả định rằng các yêu cầu HTTP thành công và xử lý dữ liệu không có vấn đề. Trong thực tế, bạn có thể muốn thêm xử lý lỗi và kiểm tra điều kiện để đảm bảo tính ổn định của ứng dụng.
 */
const axios = require('axios')

// Hàm thực hiện yêu cầu HTTP bằng Axios và trả về một Promise
function fetchData(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

// Hàm xử lý dữ liệu và trả về một Promise
function processData(data) {
  return new Promise((resolve, reject) => {
    // Giả định xử lý dữ liệu phức tạp
    const processedData = {
      id: data.id,
      title: data.title.toUpperCase(),
      userId: data.userId
    }

    if (processedData) {
      resolve(processedData)
    } else {
      reject('Lỗi xử lý dữ liệu')
    }
  })
}

// Hàm chạy chuỗi các yêu cầu và xử lý kết quả bằng Promise và các phương thức mảng
function processPosts(postIds) {
  console.log('postIds:', postIds) // log ra array
  const promises = postIds.map((postId) => {
    console.log('postId:', postId) // log ra từng phần tử trong mảng
    return fetchData(postId)
      .then((response) => processData(response.data))
      .catch((error) => console.error(`Error processing post ${postId}:`, error))
  })
  console.log('promises:', promises)
  return Promise.all(promises)
}

// Mảng chứa các ID của bài viết cần xử lý
const postIdsToProcess = [1, 2, 3, 4, 5]

// Chạy chuỗi yêu cầu và xử lý kết quả
processPosts(postIdsToProcess)
  .then((processedPosts) => {
    // Xử lý kết quả cuối cùng
    console.log('Processed Posts:', processedPosts)
  })
  .catch((error) => {
    console.error('Error processing posts:', error)
  })
