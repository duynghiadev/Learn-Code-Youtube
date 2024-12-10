// Ví dụ sử dụng Promise

/*  3.1 - Promise:
 *      + Sync --> OK
 *      + Async --> OK
 *      + Nỗi đau --> OK
 *      + Lý thuyết, cách hoạt động --> OK
 *      + Thực hành, ví dụ --> OK
 *     - Promise: để xử lý các yêu cầu trong JavaScript
 */

/**
 * - Sync / Async:
 *  + Sync: chạy từ trên xuống dưới
 *  + Async: chạy từ dưới lên trên
 * - Các hàm Sync đều được gọi trong thời gian hiện tại (đồng bộ) và các hàm Async đều    được gọi trong thời gian tương lai (không đồng bộ)
 **/

/**
 * - Ví dụ về Sync (bất đồng bộ):
 *  + setTimeout: chạy từ trên xuống dưới
 *  + fetch: chạy từ dưới lên trên
 *  + Promise: chạy từ dưới lên trên
 *  + Async/Await: chạy từ trên lên dưới
 *  + setTimeout, setinterval, fetch, XMLHttpRequest, Request animation frame, file reading: chạy từ dưới lên trên
 */

var users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Peter",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Good",
  },
  {
    id: 2,
    user_id: 2,
    content: "Bad",
  },
  {
    id: 3,
    user_id: 1,
    content: "OK",
  },
];

/**
 * 1. Lấy comments
 * 2. Từ comment lấy ra user_id
 * 3. Từ user_id lấy ra user tương ứng
 */

//Fake API
/**
 * - Phải hiểu thật kỷ:
 * + Array
 * + Function, callback
 * + Promise
 * + DOM
 */
function getComments() { 
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    setTimeout(function () {
      resolve(result);
    }, 1000);
  }, 1000);
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comment-block");
    var html = "";
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}:${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });
