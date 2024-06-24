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

Dưới đây là một ví dụ phức tạp hơn, mô phỏng việc sử dụng `call` để mô phỏng tính chất đa kế thừa trong JavaScript. Trong trường hợp này, chúng ta có ba đối tượng: `"Person",` `"Coder"`, và `"Speaker"`. `"Coder"` và `"Speaker"` kế thừa từ `"Person"`, và mỗi đối tượng có những phương thức và thuộc tính riêng biệt.

```js
// Đối tượng cơ bản "Person"
const Person = function (name, age) {
  this.name = name
  this.age = age
}

// Phương thức của "Person"
Person.prototype.sayHello = function () {
  console.log(`Xin chào, tôi là ${this.name} và tôi ${this.age} tuổi.`)
}

// Đối tượng "Coder" kế thừa từ "Person"
const Coder = function (name, age, skills) {
  Person.call(this, name, age)
  this.skills = skills
}

// Đối tượng "Speaker" kế thừa từ "Person"
const Speaker = function (name, age, topics) {
  Person.call(this, name, age)
  this.topics = topics
}

// Gọi phương thức của "Person" trên đối tượng "Coder"
Coder.prototype.introduce = function () {
  Person.prototype.sayHello.call(this)
  console.log(`Tôi có kỹ năng: ${this.skills.join(', ')}.`)
}

// Gọi phương thức của "Person" trên đối tượng "Speaker"
Speaker.prototype.introduce = function () {
  Person.prototype.sayHello.call(this)
  console.log(`Tôi nói về: ${this.topics.join(', ')}.`)
}

// Tạo các đối tượng
const coder = new Coder('Alice', 25, ['JavaScript', 'Python'])
const speaker = new Speaker('Bob', 30, ['Technology', 'Motivation'])

// Gọi phương thức introduce của từng đối tượng
coder.introduce()
// Output: Xin chào, tôi là Alice và tôi 25 tuổi.
// Tôi có kỹ năng: JavaScript, Python.

speaker.introduce()
// Output: Xin chào, tôi là Bob và tôi 30 tuổi.
// Tôi nói về: Technology, Motivation.
```

Trong ví dụ này, chúng ta sử dụng `call` để gọi phương thức của đối tượng "Person" từ cả "Coder" và "Speaker". Điều này giúp tái sử dụng mã nguồn và mô phỏng tính chất đa kế thừa trong JavaScript.

### Ví dụ phức tạp hơn về call và kết hợp với Array Method

Dưới đây là một ví dụ kết hợp sử dụng `call` và một số phương thức mảng (Array method) như `map` để xử lý một mảng các đối tượng. Trong ví dụ này, chúng ta có một mảng các đối tượng "Person", và chúng ta muốn sử dụng phương thức `introduce` của mỗi đối tượng và thu được một mảng các câu giới thiệu.

```js
// Đối tượng cơ bản "Person"
const Person = function (name, age) {
  this.name = name
  this.age = age
}

// Phương thức của "Person"
Person.prototype.introduce = function () {
  return `Xin chào, tôi là ${this.name} và tôi ${this.age} tuổi.`
}

// Mảng các đối tượng "Person"
const people = [new Person('Alice', 25), new Person('Bob', 30), new Person('Charlie', 22)]

// Sử dụng phương thức introduce của mỗi đối tượng và thu được mảng giới thiệu
const introductions = people.map(function (person) {
  // Sử dụng phương thức introduce của Person và thiết lập giá trị của this bằng call
  return Person.prototype.introduce.call(person)
})

// In ra mảng giới thiệu
console.log(introductions)
// Output:
// [ 'Xin chào, tôi là Alice và tôi 25 tuổi.',
//   'Xin chào, tôi là Bob và tôi 30 tuổi.',
//   'Xin chào, tôi là Charlie và tôi 22 tuổi.' ]
```

Trong ví dụ này, chúng ta sử dụng `map` để lặp qua mảng các đối tượng "Person". Trong callback của `map`, chúng ta sử dụng `call` để gọi phương thức `introduce` của mỗi đối tượng và thu được một mảng mới chứa các câu giới thiệu. Mảng này sau đó được in ra để xem kết quả.

### Ví dụ cơ bản về apply

Trong JavaScript, phương thức `apply()` là một trong ba phương thức cung cấp bởi hàm JavaScript (Function). Các phương thức khác là `call()` và `bind()`. Phương thức `apply()` cho phép bạn gọi một hàm với một ngữ cảnh (context) và một mảng các đối số.

Dưới đây là một ví dụ cơ bản về cách sử dụng `apply()`:

```js
// Tạo một đối tượng person
var person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country
  }
}

// Đối tượng person có các thuộc tính firstName và lastName
var person1 = {
  firstName: 'John',
  lastName: 'Doe'
}

var person2 = {
  firstName: 'Jane',
  lastName: 'Doe'
}

// Sử dụng apply để gọi phương thức fullName của đối tượng person
// person1 và person2 sẽ được sử dụng làm ngữ cảnh (this) của hàm
var result1 = person.fullName.apply(person1, ['New York', 'USA'])
var result2 = person.fullName.apply(person2, ['London', 'UK'])

console.log(result1) // Kết quả: John Doe, New York, USA
console.log(result2) // Kết quả: Jane Doe, London, UK
```

Ở đây, `apply()` được sử dụng để gọi phương thức `fullName` của đối tượng `person`, nhưng với ngữ cảnh (this) được đặt là `person1` và `person2`. Mảng `["New York", "USA"]` và `["London", "UK"]` là các đối số được truyền vào hàm `fullName`.

### Ví dụ khó hơn về apply

Dưới đây là một ví dụ khó hơn về cách sử dụng `apply()` trong JavaScript. Trong ví dụ này, chúng ta sẽ tận dụng `apply()` để tính giá trị lớn nhất trong một mảng số nguyên:

```js
// Tạo một mảng số nguyên
var numbers = [1, 5, 10, 20, 3]

// Sử dụng apply và Math.max để tìm giá trị lớn nhất trong mảng
var maxNumber = Math.max.apply(null, numbers)

console.log('Giá trị lớn nhất trong mảng là: ' + maxNumber)
```

Trong ví dụ này, `Math.max` là một hàm có thể nhận một số lượng đối số biến đổi. Tuy nhiên, chúng ta không thể truyền một mảng trực tiếp vào hàm `Math.max`. Thay vào đó, chúng ta sử dụng `apply()` để truyền mảng các số nguyên làm đối số cho hàm `Math.max`.

Lưu ý rằng đối số đầu tiên của `apply()` là ngữ cảnh (context) hoặc đối tượng mà hàm sẽ thực thi trong. Trong trường hợp này, vì `Math.max` không cần một ngữ cảnh cụ thể (nó không thay đổi `this`), nên chúng ta truyền `null`.

Kết quả sẽ là giá trị lớn nhất trong mảng, và trong ví dụ này là `20`.

### Ví dụ phức tạp hơn về apply và kết hợp với Array Method

Dưới đây là một ví dụ phức tạp hơn về cách sử dụng `apply` kết hợp với một số Array Method trong JavaScript. Trong ví dụ này, chúng ta sẽ viết một hàm `calculate` có thể thực hiện các phép tính cơ bản (cộng, trừ, nhân, chia) trên một mảng các số.

```js
// Hàm thực hiện phép tính theo toán tử và mảng số
function calculate(operator, ...numbers) {
  if (operator === 'add') {
    return numbers.reduce((sum, num) => sum + num, 0)
  } else if (operator === 'subtract') {
    return numbers.reduce((difference, num) => difference - num)
  } else if (operator === 'multiply') {
    return numbers.reduce((product, num) => product * num, 1)
  } else if (operator === 'divide') {
    if (numbers.some((num) => num === 0)) {
      return 'Không thể chia cho 0'
    }
    return numbers.reduce((quotient, num) => quotient / num)
  } else {
    return 'Phép toán không hợp lệ'
  }
}

// Mảng các số cần thực hiện phép tính
const numbers = [2, 3, 5, 8]

// Áp dụng hàm calculate sử dụng apply để thực hiện phép cộng
const sum = calculate.apply(null, ['add', ...numbers])
console.log('Tổng các số:', sum)

// Áp dụng hàm calculate sử dụng apply để thực hiện phép nhân
const product = calculate.apply(null, ['multiply', ...numbers])
console.log('Tích các số:', product)

// Áp dụng hàm calculate sử dụng apply để thực hiện phép chia
const quotient = calculate.apply(null, ['divide', ...numbers])
console.log('Thương các số:', quotient)

// Áp dụng hàm calculate sử dụng apply để thực hiện phép trừ
const difference = calculate.apply(null, ['subtract', ...numbers])
console.log('Hiệu các số:', difference)
```

Trong ví dụ này, chúng ta sử dụng `apply` để gọi hàm `calculate` với một mảng đối số. Hàm `calculate` sau đó thực hiện phép tính tương ứng dựa trên toán tử được chọn và mảng các số được chuyển vào. Việc sử dụng `apply` giúp đơn giản hóa quá trình truyền đối số, đặc biệt khi có một số lượng không xác định các đối số.

### Bonus thêm về giải thích toán tử spread

Dòng code bạn đưa ra sử dụng toán tử spread (`...`) để giải nén mảng `numbers`. Toán tử spread được sử dụng để chia nhỏ một mảng hoặc iterable thành các phần tử riêng lẻ. Trong trường hợp này, nó được sử dụng để chuyển đối số của hàm `calculate` từ một mảng thành các phần tử riêng lẻ.

Dòng code cụ thể là:

```js
const difference = calculate.apply(null, ['subtract', ...numbers])
```

- `'subtract'` là toán tử chuỗi (string).
- `...numbers` là toán tử spread, giải nén mảng numbers thành các phần tử riêng lẻ.

Sau khi sử dụng toán tử spread, mảng `['subtract', ...numbers]` sẽ trở thành các đối số riêng lẻ cho hàm `calculate.apply`, và nó sẽ tương đương với việc gọi hàm như sau:

```js
calculate.apply(null, 'subtract', 2, 3, 5, 8)
```

Nhờ vào toán tử spread, chúng ta có thể truyền một mảng dưới dạng các đối số riêng lẻ vào hàm `calculate.apply`.
