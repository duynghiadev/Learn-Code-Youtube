### tranh thủ search Chat-GPT định nghĩa chi tiết từng phương thức để đọc thêm !!!

### bind, call, apply trong typescript là gì ?

- bind(), call(), và apply() là các phương thức của đối tượng Function trong TypeScript (và JavaScript). Chúng được sử dụng để gọi một hàm với một ngữ cảnh (context) hoặc đối tượng nhất định.

+ Phương thức bind(): Trả về một hàm mới với ngữ cảnh (this) được ràng buộc (bound) với một đối tượng nhất định. 

Ví dụ:

```
let person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let printFullName = function() {
  console.log(this.getFullName());
}.bind(person);

printFullName(); // John Doe
```

- Ở đây, chúng ta định nghĩa một đối tượng person với phương thức getFullName(), và sau đó chúng ta ràng buộc phương thức printFullName() với đối tượng person bằng cách sử dụng bind(). Khi chúng ta gọi printFullName(), phương thức getFullName() sẽ được gọi với ngữ cảnh của đối tượng person.

+ Phương thức call(): Gọi một hàm với một ngữ cảnh nhất định. Nó giống với bind(), tuy nhiên, nó gọi hàm ngay lập tức thay vì trả về một hàm mới. 

Ví dụ:

```
let person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let printFullName = function() {
  console.log(this.getFullName());
};

printFullName.call(person); // John Doe
```

- Ở đây, chúng ta gọi phương thức printFullName() với ngữ cảnh của đối tượng person bằng cách sử dụng call().

+ Phương thức apply(): Giống với call(), tuy nhiên, nó cho phép truyền vào các tham số của hàm dưới dạng một mảng.

Ví dụ:

```
let person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let printFullName = function(greeting: string, separator: string) {
  console.log(greeting + separator + this.getFullName());
};

printFullName.apply(person, ["Hello", ", "]); // Hello, John Doe
```

- Hàm printFullName() trong đoạn code này được sử dụng để in ra tên đầy đủ của đối tượng person với một thông báo chào mừng và một ký tự phân cách được chỉ định.

- Trong đó, tham số greeting là thông báo chào mừng, và tham số separator là ký tự phân cách. Hàm này sử dụng phương thức apply() để thiết lập giá trị của this cho đối tượng person, sau đó gọi phương thức getFullName() của đối tượng person để lấy tên đầy đủ của nó. Cuối cùng, hàm này in ra thông báo chào mừng, ký tự phân cách, và tên đầy đủ của đối tượng person bằng cách sử dụng hàm console.log().

- Khi gọi hàm printFullName() thông qua apply(), this sẽ tham chiếu đến đối tượng person. Do đó, khi hàm getFullName() được gọi trong hàm printFullName(), nó sẽ trả về tên đầy đủ của đối tượng person. Kết quả cuối cùng sẽ được in ra trên console với thông báo chào mừng và ký tự phân cách được chỉ định, cùng với tên đầy đủ của đối tượng person.

- Đoạn code này có nghĩa là định nghĩa một đối tượng person có hai thuộc tính firstName và lastName cùng với một phương thức getFullName() để trả về tên đầy đủ của đối tượng.

- Sau đó, đoạn code định nghĩa một hàm printFullName với hai tham số là greeting và separator. Hàm này sử dụng phương thức getFullName() của đối tượng person thông qua từ khóa this. Tuy nhiên, trong trường hợp này, this không phải là đối tượng person mà là bất kỳ đối tượng nào được truyền vào hàm printFullName().

- Để sử dụng phương thức getFullName() của đối tượng person trong hàm printFullName(), ta sử dụng phương thức apply() để thiết lập this cho đối tượng person. Tham số đầu tiên của phương thức apply() là đối tượng person, và tham số thứ hai là một mảng chứa giá trị của các tham số được truyền vào hàm printFullName(). Kết quả sẽ được in ra màn hình là chuỗi "Hello, John Doe".

### cho ví dụ về call, bind, apply trong typescript

- Dưới đây là một số ví dụ cụ thể về cách sử dụng call(), bind(), và apply() trong TypeScript:

Ví dụ về bind()

```
interface Person {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

let person: Person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let printFullName = function() {
  console.log(this.getFullName());
}.bind(person);

printFullName(); // John Doe
```

- Ở đây, chúng ta định nghĩa một interface Person và một đối tượng person có kiểu Person. Chúng ta cũng định nghĩa một hàm printFullName() và ràng buộc nó với đối tượng person bằng cách sử dụng bind(). Khi chúng ta gọi hàm printFullName(), phương thức getFullName() sẽ được gọi với ngữ cảnh của đối tượng person.

Ví dụ về call()

```
interface Person {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

let person: Person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let printFullName = function() {
  console.log(this.getFullName());
};

printFullName.call(person); // John Doe
```

- Ở đây, chúng ta định nghĩa một đối tượng person có kiểu Person. Chúng ta cũng định nghĩa một hàm printFullName(). Khi chúng ta gọi hàm printFullName() với call() và truyền đối tượng person làm tham số đầu tiên, phương thức getFullName() sẽ được gọi với ngữ cảnh của đối tượng person.

Ví dụ về apply()

```
interface Person {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

let person: Person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

let printFullName = function(greeting: string, separator: string) {
  console.log(greeting + separator + this.getFullName());
};

printFullName.apply(person, ["Hello", ", "]); // Hello, John Doe
```

- Ở đây, chúng ta định nghĩa một đối tượng person có kiểu Person. Chúng ta cũng định nghĩa một hàm printFullName() với hai tham số là greeting và separator. Khi chúng ta gọi hàm printFullName() với apply() và truyền đối tượng person làm tham số đầu tiên và một mảng chứa hai phần