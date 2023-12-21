/**
 * - Ví dụ này trong file markdown 🤷‍♀️🤷‍♀️🤷‍♀️
 *
 * - Hàm Math.round() trong JavaScript làm tròn số về giá trị nguyên gần nhất. Nếu số thập phân là 0.5 hoặc lớn hơn, nó sẽ làm tròn lên; nếu số thập phân nhỏ hơn 0.5, nó sẽ làm tròn xuống.
 */
// Hàm giả lập việc tải dữ liệu từ một nguồn nào đó
function fetchData(source) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.8 // 80% cơ hội thành công
      console.log('success:', Math.round(success), success)
      // Làm tròn số nếu cần thiết
      // const roundedNumber = Math.round(success)
      // console.log(roundedNumber)
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
        console.log('data:', data)
        console.log(`Dữ liệu đã được xử lý từ ${source}: ${data}`)
        return data.toUpperCase()
      })
      .catch((error) => {
        console.error(`Lỗi khi xử lý dữ liệu từ ${source}: ${error}`)
        throw error // Ném lỗi để dừng chuỗi Promise nếu có lỗi từ một nguồn nào đó
      })
  })

  return Promise.all(promises) // Nếu như tất cả dữ liệu thành công hết thì nó sẽ chạy vô Promise.all
    .then((results) => {
      console.log('Kết quả cuối cùng:', results)
    })
    .catch((error) => {
      console.error('Lỗi trong quá trình xử lý:', error)
    })
}

// Gọi hàm chính để thực hiện công việc phức tạp
processMultipleDataSources()
