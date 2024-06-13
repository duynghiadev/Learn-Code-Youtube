function TodoList(callback) {
  let name = 'TodoList data'
  console.log(callback)
  // Ở đây nếu tôi gọi hàm và truyền data vào hàm
  // Hàm tôi gọi được định nghĩa ở cha => ok nhận được data
  callback(name)
}

function App() {
  let funFromParentDefine = function (dataFromChild) {
    console.log(dataFromChild)
  }
  TodoList(funFromParentDefine)
}

App()

// TodoList được gọi ở trong phần khai báo hàm App

// App gọi là component cha
// TodoList gọi là component con

// 1. Truyền data từ cha xuống con -- dễ

// 2. Truyền data từ con lên cha
// => cần đưa data từ scope con lên cha nhận được
