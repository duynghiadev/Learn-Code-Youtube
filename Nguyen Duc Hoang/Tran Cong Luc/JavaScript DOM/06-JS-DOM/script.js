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

let image = document.querySelector('.class-demo')
image.setAttribute(
  'src',
  'https://images.unsplash.com/photo-1701894160394-58d5be1605b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'
)

function addClass(el, className) {
  let oldClass = el.getAttribute('class')
  console.log('oldClass:', oldClass)
  console.log(`el is ${el}, className is ${className}`)
  if (oldClass) {
    // Khác null
    // class cũ là "abc"
    // className muốn thêm vào là "def"
    // Nối lại sẽ ra class mới là "abc def"

    /**
     * - Trước khi mà mình xét giá trị mới thì phải kiểm tra xem className này đã tồn tại trong class cũ hay chưa?
     * - Nếu chưa tồn tại thì ok -> Nối chuỗi bình thường
     * - Nếu đã tồn tại rồi thì thôi -> Không thêm nữa
     */
    if (oldClass.indexOf(className) === -1) {
      let newClass = oldClass + ' ' + className
      el.setAttribute('class', newClass)
    }
  } else {
    // Bằng null
    el.setAttribute('class', className)
  }
}

function removeClass(el, className) {}

addClass(body, 'wrapper-content')
addClass(image, 'image')
addClass(image, 'demo-class')
addClass(image, 'image')
