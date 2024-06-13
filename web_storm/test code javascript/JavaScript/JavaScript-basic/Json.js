/**
 * 1. Event listener --> OK
 * 2. JSON (JavaScript Object Notation) --> OK
 * 3.1 Promise --> OK
 * 3.2 Fetch --> OK
 * 4. DOM location
 * 5. Local storage
 * 6. Session storage
 * 7. Coding convention
 * 8. Best Practices
 * 9. Mistakes
 * 10. Performance
 */

// *********  Giải thích:  **************

/**
 * 2. - Là một định dạng dữ liệu (chuỗi)
 *    - JSON: Number, Boolean, String, Array, Object
 *    - Mã hoá và giải mã (Encode & Decode)
 *    - Stringify --> từ JavaScript types sang JSON
 *    - Parse --> từ JSON sang JavaScript types
 *
 */

// Phần 2:
var json = "true";
var json1 = '["Javascript", "Nodejs", "Reactjs"]';
console.log(JSON.stringify(json1));
console.log(JSON.parse(json1));

console.log(
  JSON.stringify({
    name: "duynghia",
    age: 20,
  })
);

// Phần 3.1:
/**  Sync / Async (đồng bộ / không đồng bộ) 
- Những thằng đồng bộ: setTimeout, setInterval, fetch, XMLHttpRequest, Request animation frame, file reading
*/

// sleep(3000).then(() => { console.log('3s') }); // 3s
// setTimeout(function () {
//   console.log(1);
// }, 1000);

// console.log(2);

// Phần 3.2: Fetch



