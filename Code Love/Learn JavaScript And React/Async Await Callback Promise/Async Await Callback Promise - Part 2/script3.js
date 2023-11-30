/**
 * - Hôm nay chúng ta học bài: 3 - Cách sử dụng XMLHttpRequest gọi Api
 * - Trong bài hôm nay chúng ta có 2 cách code:
 * + Cách code thông thường: gặp vấn đề nào thì xử lý vấn đề đấy => Đây là cách code của các bạn fresher và Intern. Hầu như các bạn không tách hàm gọi các function
 * + Và cách code dùng callback: Đây là cách code của mấy bạn có kinh nghiệm hơn
 */

function formatData(xhttp) {
  // 1. data return success
  const posts = JSON.parse(xhttp.responseText)

  //  2. format data and append list user
  let postList = ''
  for (let post of posts) {
    postList += '<p>' + post.title + '</p>'
  }
  document.getElementById('list-post').innerHTML = postList
}

// Mục đích của hàm này là call api và return data. Còn công việc format thì đó là công việc của function getListUser khi người dùng click vào
function asyncXmlCallApi(url, callback) {
  const xhttp = new XMLHttpRequest()
  xhttp.open('GET', url, true)
  xhttp.send()

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      //  data response success
      callback(xhttp)
    }
  }
}

// Lấy ra post của user đầu tiên trong list

function getListPost() {
  //level 1
  asyncXmlCallApi('https://jsonplaceholder.typicode.com/users', function (data) {
    // call api get posts
    const users = JSON.parse(data.responseText)
    console.log('data:', data)
    console.log('users:', users)

    const userIdFirst = users[0].id
    console.log('userIdFirst:', userIdFirst)

    const urlPostsByUserFirst = `https://jsonplaceholder.typicode.com/users/${userIdFirst}/posts`

    //level 2 => Các data của level 2 sẽ phụ thuộc vào level 1 => level 1 có data thì trong level 2 mới gọi được dữ liệu và chạy các câu lệnh tiếp theo
    asyncXmlCallApi(urlPostsByUserFirst, function (dataPost) {
      formatData(dataPost)

      //  level 3 => Đây chính là vấn đề của callback hell => Các lập trình viên nên tránh trường hợp này => Các data của level 3 sẽ phụ thuộc vào level 2 => level 2 có data thì trong level 3 mới gọi được dữ liệu và chạy các câu lệnh tiếp theo

      //  Khi mà bị vướng vào kiểu như này thì sau này khi maintain code rất là khó => và không ai có thể chấp nhận code này khi bạn viết ra
    })
  })
}

/**
 * - Các trường hợp sử dụng callback đó là:
 * + 1. call api để lấy data
 * + 2. format data để hiển thị ra màn hình
 */
