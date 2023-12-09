/**
 * Code trong javascript sẽ có 2 trường hợp được thực thi
 * 1. Chạy ngay từ đầu khi load lại trang
 * 2. Chạy ngay khi nhận một tương tác từ người dùng (nhấn chuột click -> onclick, rê chuột -> hover,...)
 */
let colorSkinId = document.getElementById('color-skin')
let containerDiv = document.querySelector('.container')
let body = document.getElementsByTagName('body')[0]

function changeStyleColor(href) {
  colorSkinId.setAttribute('href', href)
  console.log('href:', href)
}

function changeStyleContainer(type) {
  let newClass = 'container ' + type
  containerDiv.setAttribute('class', newClass)
  console.log('type:', type)
}

function changeBg(fileName) {
  console.log('fileName:', fileName)
  if (fileName) {
    //   Thay đổi style cho body
    console.log(`body is ${body}, fileName is ${fileName}`)
    console.log(body, fileName)

    let valueStyle = "background-image: url('" + fileName + "')"
    console.log(body, fileName, valueStyle)
    body.setAttribute('style', valueStyle)
  } else {
    //   Đưa body về trạng thái bình thường
    body.setAttribute('style', '')
  }
  /**
   * - Khi làm trường hợp này thì chúng ta lại nhắc về kiến thức Falsy & Truthy
   * - undefined, null, NaN, 0, false
   */
}

/**
 * - Bài tập về nhà như sau:🚀🚀🚀
 *
 * - Tạo 2 function hỗ trợ việc thêm class và xóa class -> Tự viết
 *  - Thì cách này nó liên quan đến xử lý chuỗi là nhiều
 *
 * - Ví dụ function thêm class (className)
 * - Ví dụ giá trị class cũ là "container abc"
 * - Thêm mới vào className = "style-02" => Xét lại giá trị mới là "container abc style-02"
 *
 * - Ví dụ giá trị class cũ là "container abc"
 * - Thêm mới vào className = "abc" => Thì không xử lý
 *
 * - Hàm xóa class
 * - Ví dụ giá trị class cũ là "container abc"
 * - Có một function removeClas (className)
 * - Muốn xóa className = "abc"
 *
 * - Phải kiểm tra xem class cũ có tồn tại "abc" hay không?
 * 1. Nếu có -> Xử lý chuỗi, xử lý mảng để xóa thu được giá trị cuối cùng sau khi xóa là "container"
 * 2. Nếu không có "abc" -> Thì thôi không làm gì hết
 */
