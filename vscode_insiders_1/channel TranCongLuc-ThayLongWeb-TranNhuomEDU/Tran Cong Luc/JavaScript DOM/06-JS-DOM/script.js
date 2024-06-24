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
/**
 * - Chuyển đổi tù một chuỗi -> thành một mảng. Ví dụ: "abc def" => ['abc', 'def']
 *  - Giải pháp ở đây là chúng ta dùng split(" ") => oldClass.split(" ")
 *  - Lưu ý: với điều kiện là ta truyền vào phải là 1 chuỗi -> thì sau đó ta mới chuyển thành mảng được❌
 *
 * - Chuyển đổi từ một mảng -> thành một chuỗi. Ví dụ: ["abc", "def"] => "abc def"
 *  - Giải pháp ở đây là chúng ta dùng join(" ") => oldClass.join(" ")
 *  - Lưu ý: với điều kiện là ta truyền vào phải là 1 mảng -> thì sau đó ta mới chuyển thành chuỗi được❌
 *
 * - Hôm trước mình đã học về 5 hàm hỗ trợ cơ bản của array như là:
 *  - thêm vào đầu, thêm vào cuối, xóa đầu, xóa cuối, indexOf()
 *
 * - Hôm nay chúng ta học thêm về thêm vào giữa, xóa phần tử ở giữa mảng
 *
 * - Đối với những method hỗ trợ cho mảng => Cần phải xác định rõ là method đó nó có thay đổi array gốc của mình hay không?❌❌❌
 * - Method arr.slice(start, end) => Tạo ra một mảng mới tính từ vị trí index = start => đến index = end
 * => Nó sẽ không làm thay đổi mảng gốc 👍
 * - Method arr.slice(start, end) => Tạo ra một mảng mới tính từ vị trí index = start => đến index = end
 * => Nó sẽ làm thay đổi mảng gốc và trả về mảng bao gồm những phần tử còn lại khi đã xóa xong 👍
 *
 * - Bây giờ chúng ta học thêm method nữa đó là: thêm vào giữa mảng => đó là method splice()
 *
 * - Nhưng mà các bạn nên lưu ý về method splice(): => Method arr.splice(start, deleteCount, ...thêm-mới)❌❌❌
 *  - Dấu ... được thể hiện là mình muốn thêm bao nhiêu cũng được 😁😁😁
 *  - Ví dụ:
 *    arr.splice(0, 1, 99, 88) => Có nghĩa là xóa 1 phần tử bắt đầu từ vị trí index = 0. Sau khi xóa xong, tại vị trí đó thêm mới vào 2 phần tử là 99, 88 🚀🚀🚀
 *   - Dưới đây là ví dụ dễ hình dùng hơn nè: 🤷‍♀️🤷‍♀️🤷‍♀️
 *    [123, 456].splice(0, 1, 99, 88)
 *      -> Khi thực hiện đoạn code đó ta được:
 *      -> Xóa 1 phần tử là 👉 [123]
 *      -> Thêm vào mảng các phần tử 👉 [99, 88, 456]
 *
 *  - Tiếp tục với ví dụ trên 👆👆👆
 *  - Còn đây là cách chúng ta thêm phần tử vào giữa mảng (cũng thực hiện tương tự cách trên thôi) 👆👆👆
 *  - Ví dụ:
 *    arr.splice(2, 0, 789)
 *      -> Dòng log đầu tiên là ta sẽ nhận về một mảng rỗng => Bởi vì nhìn vào điều kiện thì nó không xóa phần tử nào hết 👉 []
 *      -> Sau đó ta lại log lại mảng đó thì nó lại trả về 1 mảng mới là 👉 [99, 88, 789, 456]
 */

/**
 * Dưới đây là 2 ví dụ về method slice() và splice()✅✅✅
 */
let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrNumber_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Trả về một array con nằm trong khoảng index = 2 => tới index = 5. Nhưng nó không làm thay đổi mảng gốc✅
console.log('arrNumber_1 slice:', arrNumber_1.slice(0, 3))
console.log('arrNumber_1 was deleted:', arrNumber_1)

// Trả về một array con nằm trong khoảng index = 2 => tới index = 5. Nhưng nó sẽ làm thay đổi mảng gốc✅
console.log('arrNumber splice:', arrNumber.splice(0, 3))
console.log('arrNumber was deleted:', arrNumber)

// Các giải thích về cách làm này thì mình có giải thích phía trên rồi => Vui lòng lướt lên để đọc lại để hiểu nhé
let arrSplice = [123, 456]
arrSplice.splice(0, 1, 99, 88)
console.log('arrSplice:', arrSplice)

arrSplice.splice(2, 0, 789)
console.log('arrSplice:', arrSplice)
