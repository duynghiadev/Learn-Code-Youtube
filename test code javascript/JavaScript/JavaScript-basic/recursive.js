/** Đề bài:
 * Xoá các phần tử trong mảng.
 * input: [1,2,3,4,5,6,7,8,9,10]
 * output: [1,2,3,4,5,6]
 * Lưu ý: Không sử dụng các hàm có sẵn trong javascript
 */

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 8, 9, 10];
console.log([...new Set(array)]);
