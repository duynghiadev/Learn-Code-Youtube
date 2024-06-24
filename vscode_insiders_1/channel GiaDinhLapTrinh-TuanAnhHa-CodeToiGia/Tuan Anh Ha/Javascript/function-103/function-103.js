/**
 * Bài tập lọc 1 mảng chỉ giữ lại những thành phần duy nhất trong đó.
 */
/**
 * - Khi dùng indexOf thì mình phải để ý:
 * + Là nếu trong mảng có 2 phần tử có giá trị giống nhau thì nó sẽ lấy phần tử đầu tiên, còn phần tử thứ 2 nó sẽ không lấy
 * + Như trong ví dụ của chúng ta có phần tử (value) 1 nằm ở vị trí (index) thứ 3 mà trước đó đã có phần tử 1 rồi -> Cho nên nó trả về false và không lấy phần tử thứ 2, chỉ lấy phần tử thứ 1
 * + Cứ như vậy mà nó lặp đến hết mảng
 */
const myArr = [1, 2, 3, 1, '1', 'Jon', 'English', 'Jon']

const onlyUnique = (value, index, self) => {
  console.log(`value ${value}`)
  console.log(`index ${index}`)
  console.log(`self ${self}`)
  console.log(self.indexOf(value) === index)
  console.log('---------------------------------------------')
  return self.indexOf(value) === index
}

const getUniqueItem = (arr) => {
  console.log('arr in function getUniqueItem:', arr)
  console.log('---------------------------------------------')
  return arr.filter(onlyUnique)
}

let result = getUniqueItem(myArr)
console.log('result:', result)

/**
 * - Trong ví dụ trên đó, mình code theo dạng code thuần (ES5)
 * - Dưới đây là mình sử dụng syntax của ES6
 */
/**
 * - Đặc điểm của Set là nó sẽ giữ lại những phần tử duy nhất
 * - Còn những phần tử bị trùng lặp thì nó sẽ loại bỏ khỏi mảng
 */
const getUniqueNew = [...new Set(myArr)]
console.log('getUniqueNew:', getUniqueNew)