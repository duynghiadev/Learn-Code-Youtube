# Giải thích thuật toán

- Thuật toán này sử dụng một đối tượng `Map` để tìm cặp số trong mảng `nums` có tổng bằng `target`. Dưới đây là giải thích cụ thể về cách thuật toán hoạt động:

1. Chúng ta khởi tạo một đối tượng `Map` với mục đích lưu trữ giá trị của các phần tử trong mảng `nums` và vị trí của chúng trong mảng.

2. Chúng ta duyệt qua mảng `nums` sử dụng vòng lặp `for` với biến đếm `i`.

3. Đối với mỗi phần tử `nums[i]` mà chúng ta đang xem xét, chúng ta tính giá trị `remain` bằng cách lấy `target` - `nums[i]`. Giá trị `remain` là số mà chúng ta cần tìm để có tổng bằng `target`.

4. Chúng ta kiểm tra xem giá trị `remain` có tồn tại trong đối tượng `Map` không. Nếu tồn tại (nghĩa là chúng ta đã gặp phần tử trước đó có giá trị là `remain`), chúng ta trả về một mảng chứa vị trí của `remain` trong mảng (`map.get(remain)`) và vị trí hiện tại của `nums[i]` (`i`). Điều này thỏa mãn yêu cầu tìm hai phần tử có tổng bằng `target`.

5. Nếu `remain` không tồn tại trong đối tượng `Map`, chúng ta lưu trữ giá trị `nums[i]` và vị trí của nó trong đối tượng `Map` để kiểm tra với các phần tử tiếp theo.

6. Nếu sau khi duyệt qua toàn bộ mảng mà không tìm thấy cặp số nào thỏa mãn, chúng ta trả về một mảng rỗng (`[]`) để báo hiệu rằng không có giải pháp nào tồn tại.

- Thuật toán này hoạt động với độ phức tạp thời gian O(n), với n là số lượng phần tử trong mảng `nums`. Điều này là do chúng ta chỉ cần duyệt qua mảng một lần và sử dụng `Map` để kiểm tra sự tồn tại của giá trị cần tìm mà không cần phải duyệt qua toàn bộ mảng lần nữa.

## ❌❌❌ Lưu ý: Trong solution-2 có sử dụng hàm Map() trong JavaScript để tạoo 1 đối tượng ❌❌❌

- Trong JavaScript, `Map` là một cấu trúc dữ liệu dạng bản đồ (dictionary) cho phép bạn lưu trữ và truy cập dữ liệu dưới dạng cặp key-value. Cụ thể, `Map` cho phép bạn ánh xạ một giá trị (value) tới một key tương ứng. Dưới đây là định nghĩa cơ bản của `Map`:

- `Map`:

  - Là một cấu trúc dữ liệu dạng bản đồ.
  - Lưu trữ các cặp key-value.
  - Không cho phép các key trùng lặp; mỗi key chỉ có một giá trị duy nhất.
  - Có khả năng lưu trữ bất kỳ loại dữ liệu nào, cả object, function, hoặc primitive values làm key hoặc value.
  - Cho phép truy cập, thêm, cập nhật, và xóa các cặp key-value.
  - Có thứ tự trong việc lưu trữ dữ liệu theo thứ tự chúng được thêm vào.

- Dưới đây là ví dụ về cách sử dụng `Map` trong JavaScript:

```jsx
// Tạo một đối tượng Map
const myMap = new Map()

// Thêm cặp key-value vào Map
myMap.set('name', 'John')
myMap.set('age', 30)

// Truy cập giá trị thông qua key
console.log(myMap.get('name')) // Output: John

// Kiểm tra sự tồn tại của một key
console.log(myMap.has('name')) // Output: true

// Xóa một cặp key-value
myMap.delete('age')

// Lấy số lượng cặp key-value trong Map
console.log(myMap.size) // Output: 1
```

- `Map` rất hữu ích trong nhiều trường hợp khi bạn cần lưu trữ và quản lý dữ liệu dưới dạng các cặp key-value, và bạn muốn duyệt qua dữ liệu theo thứ tự chúng được thêm vào.

## ❌❌❌ Lưu ý: Trong solution-2 có sử dụng hàm has() trong JavaScript ❌❌❌

- Hàm `has` trong JavaScript được sử dụng để kiểm tra xem một đối tượng có chứa một thuộc tính (property) cụ thể hay không. Cụ thể, nó kiểm tra xem một key có tồn tại trong một đối tượng hoặc một Map hay không.

- Sử dụng với Object:

  - Trong trường hợp của một Object, `has` được sử dụng để kiểm tra xem một thuộc tính (property) cụ thể có tồn tại trong đối tượng hay không.

  - Ví dụ:

  ```jsx
  const person = { name: 'John', age: 30 }
  console.log('name' in person) // true, kiểm tra xem thuộc tính "name" có tồn tại trong đối tượng person không
  console.log('address' in person) // false, kiểm tra xem thuộc tính "address" có tồn tại trong đối tượng person không
  ```

- Sử dụng với Map:

  - Trong trường hợp của một Map, has được sử dụng để kiểm tra xem một key có tồn tại trong Map hay không.

  - Ví dụ:

  ```jsx
  const myMap = new Map()
  myMap.set('name', 'John')
  console.log(myMap.has('name')) // true, kiểm tra xem key "name" có tồn tại trong Map không
  console.log(myMap.has('age')) // false, kiểm tra xem key "age" có tồn tại trong Map không
  ```

- Hàm `has` trả về `true` nếu key hoặc thuộc tính tồn tại, và `false` nếu `key` hoặc thuộc tính không tồn tại trong đối tượng hoặc `Map`.
