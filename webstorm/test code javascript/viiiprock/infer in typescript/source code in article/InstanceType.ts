class User {
  age = 20;
  name = "John";
}

const userA = new User();
// ta có kiểu cùa userA là User
// đây là kiểu được TS ngầm infer, khá thông minh

// để xác định một user B object có cùng kiểu với userA
// ta có thể sử dụng cách này
const userB: typeof userA = {
  age: 25,
  name: "hello",
};

// tuy nhiên dùng như vậy rất bất tiện và không thực tế
// nên chúng ta sẽ xác định một kiểu generic dựa trên instance của class User
type ClassInstance<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer R
  ? R
  : any;

type T10 = ClassInstance<typeof User>;
