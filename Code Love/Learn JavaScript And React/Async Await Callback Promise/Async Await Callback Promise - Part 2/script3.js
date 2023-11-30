/**
 * - Hôm nay chúng ta học bài: 3 - Cách sử dụng XMLHttpRequest gọi Api
 * - Trong bài hôm nay chúng ta có 2 cách code:
 * + Cách code thông thường: gặp vấn đề nào thì xử lý vấn đề đấy => Đây là cách code của các bạn fresher và Intern. Hầu như các bạn không tách hàm gọi các function
 * + Và cách code dùng callback: Đây là cách code của mấy bạn có kinh nghiệm hơn
 */

function getListUser() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const xhttp = new XMLHttpRequest()
  xhttp.open('GET', url, true)
  xhttp.send()

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      // 1. data return success
      const users = JSON.parse(xhttp.responseText)

      //  2. format data and append list user
      let userList = ''
      for (let user of users) {
        userList += '<p>' + user.name + '</p>'
      }
      document.getElementById('list-user').innerHTML = userList
    }
  }
}
