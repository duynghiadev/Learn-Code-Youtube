/**
 * Dưới đây là một ví dụ phức tạp hơn, sử dụng async/await và bao gồm việc sử dụng một số khái niệm phức tạp như xử lý lỗi, parallelism, và chaining asynchronous tasks.

  - Giả sử bạn cần thực hiện các bước sau:

  1. Tải dữ liệu từ nhiều nguồn khác nhau.
  2. Xử lý và biến đổi dữ liệu từ mỗi nguồn.
  3. Gộp các kết quả thành một kết quả cuối cùng.
  4. Gửi kết quả cuối cùng đến một API.
 */
/**
 * => Trong ví dụ này, chúng ta sử dụng async/await để quản lý các bước bất đồng bộ và chờ cho các Promise hoàn thành. Các bước đều được thực hiện một cách tuần tự và sử dụng các Promise để đồng bộ hóa công việc. Mỗi bước tải dữ liệu, xử lý và biến đổi dữ liệu, gộp kết quả, và gửi đến API đều được giả lập bằng các hàm trả về Promise.
 */

// Hàm giả lập việc tải dữ liệu từ một nguồn nào đó
function fetchData(source) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.8 // 80% cơ hội thành công
      console.log('success:', Math.round(success), success)
      if (success) {
        resolve(`Dữ liệu từ ${source}`)
      } else {
        reject(`Lỗi khi tải dữ liệu từ ${source}`)
      }
    }, 2000) // Giả sử việc tải dữ liệu mất từ 0 đến 2000ms
  })
}

// Hàm giả lập việc xử lý và biến đổi dữ liệu
function processAndTransformData(data) {
  console.log('process and transform data:', data)
  return new Promise((resolve) => {
    setTimeout(() => {
      const transformedData = data.toUpperCase()
      resolve(transformedData)
      console.log('transformedData toUpperCase:', transformedData)
      console.log('data setTimeout:', data)
      console.log('setTimeout process and transform')
      console.log('-----------------------------------------')
    }, 1000) // Giả sử việc xử lý mất từ 0 đến 1000ms
  })
}
console.log('-----------------------------------------')

// Hàm giả lập việc gửi dữ liệu đến một API
function sendToAPI(data) {
  console.log('send to APIs:', data)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('setTimeout send to APIs', data)
      resolve(`Dữ liệu đã được gửi đến API: ${data}`)
      console.log('-----------------------------------------')
    }, 1500) // Giả sử việc gửi dữ liệu mất từ 0 đến 1500ms
  })
}

// Hàm chính để thực hiện công việc phức tạp
async function performComplexTask() {
  try {
    // Bước 1: Tải dữ liệu từ nhiều nguồn
    const sources = ['Nguồn A', 'Nguồn B', 'Nguồn C']
    const dataPromises = sources.map((source) => fetchData(source))
    console.log('dataPromises:', dataPromises)

    // Bước 2: Chờ cho tất cả các Promise tải dữ liệu hoàn thành
    const rawData = await Promise.all(dataPromises)
    console.log('rawData:', rawData)

    // Bước 3: Xử lý và biến đổi dữ liệu từ mỗi nguồn
    const transformedDataPromises = rawData.map((data) => processAndTransformData(data))
    console.log('transformedDataPromises:', transformedDataPromises)

    const transformedData = await Promise.all(transformedDataPromises)
    console.log('transformedData from transformedDataPromises:', transformedData)

    // Bước 4: Gộp kết quả thành một kết quả cuối cùng
    const finalResult = transformedData.join(', ')
    console.log('finalResult:', finalResult)

    // Bước 5: Gửi kết quả cuối cùng đến một API
    const apiResponse = await sendToAPI(finalResult)

    console.log('Kết quả cuối cùng:', apiResponse)
  } catch (error) {
    console.error('Lỗi trong quá trình thực hiện công việc phức tạp:', error)
  }
}

// Gọi hàm chính để thực hiện công việc phức tạp
performComplexTask()
