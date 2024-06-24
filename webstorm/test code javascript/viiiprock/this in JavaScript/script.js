function Foo() {
  console.log(this);
}
Foo(); // context ở dòng này là 'window'
// output: 'window'

// Nếu Foo là một hàm mũi tên thì nó cũng sẽ ràng buộc this với window

// ==============================================

console.log("=".repeat(40));

function sayName() {
  console.log(`My name is ${this.age}`);
}
sayName(); // My age thành undefined

// My age thành undefined bởi vì this.age undefined

// Nếu ta thêm
// window.age = 27; // ❌❌
// chúng ta có thể thấy là ngoài các ràng buộc ở trên thì cuối cùng this sẽ ràng buộc với window.
sayName();

// ==============================================

console.log("=".repeat(40));

const user = {
  name: "John",
  greet() {
    console.log(`My name is ${this.name}`);
  },
  mother: {
    name: "Mary",
    greet() {
      console.log(`My name is ${this.name}`);
    },
  },
};
user.greet();
user.mother.greet();
