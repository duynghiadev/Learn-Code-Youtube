/**
 * 1.DOM event / Event listener
 * 2.JSON
 * 3.Fetch
 * 4.DOM location
 * 5.Local storage
 * 6.Session storage
 * 7.Coding convention
 * 8.Best Practices
 * 9.Mistakes
 * 10.Performance
 */

/**
 *  - Có 2 cách bắt các event:
 *   + Cách 1: DOM event
 *   + Cách 2: Event listener
 */

/**
 * DOM Event
 * 1. Attribute event
 * 2. Assign event using the element node
 */

/**
 * Event listener
 * 1. Xử lý nhiều việc khi 1 event xảy ra
 * 2. Lắng nghe / Huỷ bỏ sự kiện
 */

var btn = document.getElementById("btn");

function viec1() {
  console.log("Viec 1");
}

function viec2() {
  console.log("Viec 2");
}

btn.addEventListener("click", viec1);
btn.addEventListener("click", viec2);

setTimeout(function () {
  btn.removeEventListener("click", viec1);
}, 3000);
