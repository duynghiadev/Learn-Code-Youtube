### Tìm hiểu về call và apply trong JavaScript

Trong JavaScript, `call` và `apply` là hai phương thức được sử dụng để gọi một hàm và thiết lập giá trị của `this`, đồng thời truyền các đối số cho hàm đó. Cả hai phương thức này đều thuộc về đối tượng hàm trong JavaScript và hỗ trợ đa hình (polymorphism), cho phép thay đổi giá trị của `this` mà hàm sẽ thực thi trên.

1. Phương thức `call` trong JavaScript:

- Phương thức `call` cho phép gọi một hàm và truyền giá trị của `this` cũng như các đối số một cách tường minh.
- Cú pháp: `function.call(thisArg, arg1, arg2, ...)`.
- `thisArg`: Giá trị của `this` mà hàm sẽ thực thi trên.
- `arg1, arg2, ...`: Các đối số được truyền cho hàm.

Ví dụ:

```js
function sayHello(message) {
  console.log(`${message}, ${this.name}!`)
}

const person = { name: 'John' }

sayHello.call(person, 'Hi') // Output: Hi, John!
```

2. Phương thức `apply` trong JavaScript:

- Tương tự như `call`, phương thức `apply` cũng gọi một hàm và thiết lập giá trị của `this`, nhưng khác biệt là các đối số được truyền dưới dạng một mảng.
- Cú pháp: `function.apply(thisArg, [arg1, arg2, ...])`.
- `thisArg`: Giá trị của `this` mà hàm sẽ thực thi trên.
- `[arg1, arg2, ...]`: Một mảng chứa các đối số được truyền cho hàm.

Ví dụ:

```js
function sayHello(message) {
  console.log(`${message}, ${this.name}!`)
}

const person = { name: 'John' }

sayHello.apply(person, ['Hi']) // Output: Hi, John!
```

Lựa chọn giữa `call` và `apply` thường phụ thuộc vào cách bạn có sẵn các đối số để truyền vào hàm (dưới dạng danh sách đối số hoặc mảng đối số). Ngoài ra, trong các phiên bản JavaScript mới, bạn cũng có thể sử dụng phương thức `bind` để tạo một hàm mới có giá trị cố định của `this`.

### Ví dụ cơ bản về call

Giả sử chúng ta có một đối tượng "person" và một hàm "introduce" để giới thiệu thông tin về người đó, bao gồm tên và tuổi của họ.

```js
const person = {
  name: 'Alice',
  age: 30,
  introduce: function (greeting) {
    console.log(`${greeting}! Tôi là ${this.name} và tôi ${this.age} tuổi.`)
  }
}

person.introduce('Xin chào') // Output: Xin chào! Tôi là Alice và tôi 30 tuổi.
```

Bây giờ, nếu chúng ta có một đối tượng mới như sau:

```js
const anotherPerson = {
  name: 'Bob',
  age: 25
}
```

Chúng ta có thể tái sử dụng hàm `introduce` từ đối tượng `person` để giới thiệu `anotherPerson` bằng cách sử dụng phương thức `call` để thiết lập giá trị của `this` là `anotherPerson`:

```js
person.introduce.call(anotherPerson, 'Xin chào') // Output: Xin chào! Tôi là Bob và tôi 25 tuổi.
```

Ở đây, `call` cho phép chúng ta gọi hàm `introduce` từ `person`, nhưng thiết lập giá trị của `this` là `anotherPerson`, điều này cho phép chúng ta tái sử dụng hàm với dữ liệu từ một đối tượng khác mà không cần phải thay đổi cấu trúc của hàm `introduce` ban đầu.

### Ví dụ nâng cao về call

Dưới đây là một ví dụ nâng cao sử dụng `call` để mô phỏng việc kế thừa trong JavaScript. Trong ví dụ này, chúng ta sẽ có một "animal" và một "dog" kế thừa từ "animal". Hàm `speak` được triển khai trên đối tượng "animal", và dog có thể kế thừa hàm này thông qua `call`.

```js
// Đối tượng cơ bản "animal"
const animal = {
  speak: function (sound) {
    console.log(`${this.name} kêu: ${sound}`)
  }
}

// Đối tượng "dog" kế thừa từ "animal"
const dog = {
  name: 'Buddy'
}

// Gọi hàm speak của animal trên đối tượng dog bằng cách sử dụng call
animal.speak.call(dog, 'Gâu gâu') // Output: Buddy kêu: Gâu gâu
```

Trong ví dụ này, chúng ta có một đối tượng `animal` với một phương thức `speak` để in ra tiếng kêu của `animal`. Sau đó, chúng ta có một đối tượng `dog` không có phương thức `speak`. Tuy nhiên, chúng ta có thể sử dụng `call` để gọi phương thức `speak` của đối tượng `animal` trên đối tượng `dog`. Kết quả là chúng ta có thể tái sử dụng phương thức từ đối tượng cha và áp dụng nó cho đối tượng con một cách linh hoạt.

### Ví dụ phức tạp hơn về call
