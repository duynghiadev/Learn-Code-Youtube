let fs = require('fs')

const read = async () => {
  const data = await fs.readFileSync('sapxepdayso.txt')
  let arrLast = data
    .toString()
    .split(',')
    .map((item) => {
      return Number(item)
    })
  return arrLast
}

const sapXepDaySo = async (number) => {
  // Lấy dãy số mà đã được nhập vào trước đó
  let arr = await read()

  // Tách dãy số làm 3 dãy số nhỏ
  let arrInput = [Number(number)]
  let arrStart = []
  let arrEnd = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= Number(number)) {
      arrStart.push(arr[i])
    } else {
      arrEnd.push(arr[i])
    }
  }

  // Ghép lại thành 1 dãy số mới
  let arrOutput = arrStart.concat(arrInput).concat(arrEnd)

  // Lưu dãy số vừa tạo vào file text (sapxepdayso.txt)
  fs.writeFileSync('sapxepdayso.txt', arrOutput.toString())

  // Hiển thị ra màn hình
  console.log(arrOutput)
}

sapXepDaySo(2) // sửa số đầu vào --> sau đó chạy lại thì số đó tự động thêm vào file text --> nó tự động sắp xếp từ bé đến lớn
