/**
 * - Đây là ví dụ trong file markdown
 *
 * - Dưới đây là một ví dụ nâng cao về cách sử dụng bind() trong JavaScript kết hợp với các phương thức của mảng (array method) như map:
 *
 * - Trong ví dụ này, chúng ta có một đối tượng user với một phương thức greet nhận một tham số là lời chào và in ra một thông điệp. Chúng ta cũng có một mảng greetings chứa các lời chào khác nhau.

Chúng ta sử dụng map để tạo một mảng mới greetFunctions, trong đó mỗi phần tử là một hàm mới được tạo bằng cách sử dụng bind để đặt giá trị của this là đối tượng user. Điều này giúp chúng ta tạo một mảng các hàm greet đã được bind với user.

Cuối cùng, chúng ta sử dụng forEach để gọi từng hàm trong mảng mới greetFunctions. Mỗi hàm sẽ in ra một thông điệp sử dụng tên của user và mỗi lời chào từ mảng greetings.
 */

// Một đối tượng user
const user = {
  name: 'John',
  greet: function (greeting) {
    console.log(greeting + ' ' + this.name)
    console.log('this.name:', this.name)
    console.log('----------------------------')
  }
}

// Một mảng các lời chào
const greetings = ['Hello', 'Hi', 'Hola']

// Sử dụng map để tạo một mảng mới chứa các hàm đã được bind với user
const greetFunctions = greetings.map(function (greeting) {
  console.log('greeting:', greeting)
  console.log('user:', user)
  return user.greet.bind(user, greeting)
})

// Gọi các hàm trong mảng mới
greetFunctions.forEach(function (greetFunction) {
  console.log('greetFunction:', greetFunction)
  greetFunction()
})
