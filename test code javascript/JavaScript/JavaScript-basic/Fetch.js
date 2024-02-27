/**
 * 1. Front-end: xây dựng giao diện người dùng
 * 2. Back-end: xây dựng logic xử lý:
 * + cơ sở dữ liệu
 * + xử lý logic
 * + xử lý request
 * + xử lý response
 * + xử lý errors
 * + xử lý các thứ khác
 * - Back-end -> API -> Fetch -> JSON/XML -> JSON.parse/XML.parse -> JavaScript types -> Render ra giao diện với HTML
 * -
 *
 */
/**
 * - API (URL) => cổng giao tiếp giữa các phần mềm
 * + có nghĩa là Application Programming Interface
 */
/**
 * Fetch API:
 * - JSON server: API Server (Fake) / MockAPI
 * - CRUD:
 *    + Create: tạo mới -> POST (Create: giao thức, POST: phương thức)
 *    + Read: đọc -> GET (Read: giao thức, GET: phương thức)
 *    + Update: cập nhật -> PUT / PATCH (Update: giao thức, PUT / PATCH: phương thức)
 *    + Delete: xoá -> DELETE (Delete: giao thức, DELETE: phương thức)
 * - PostMan
 * - Example REST API: (Thêm / Xoá / Sửa khoá học với Fetch)
 */

var postApi = "https://jsonplaceholder.typicode.com/posts";
fetch(postApi) // fetch là 1 hàm trong JS để lấy dữ liệu từ API (URL) về (data)
  .then(function (response) {
    return response.json(); // Chuyển đổi thành JSON để dùng thông qua thư viện JSON
  })
  .then(function (posts) {
    var htmls = posts.map(function (post) {
      // Dùng map để lấy ra từng phần tử trong mảng posts và trả về 1 mảng html của từng phần tử trong mảng posts
      return `<li>
        <h2>${post.title}</h2> 
        <p>${post.body}</p>
      </li>`;
    });

    var html = htmls.join(""); // Chuyển đổi thành chuỗi HTML để dùng thông qua thư viện DOM để render ra giao diện với HTML
    document.getElementById("post-block").innerHTML = html; // Đặt giá trị cho thẻ div có id là post-block bằng html đã được chuyển đổi thành chuỗi HTML để dùng thông qua thư viện DOM để render ra giao diện với HTML
  })
  .catch(function (err) {
    alert("có lối"); // có lối
  });
