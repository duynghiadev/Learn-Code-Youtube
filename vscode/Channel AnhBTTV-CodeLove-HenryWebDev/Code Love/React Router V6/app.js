// file này chứa code mình học trong video 6. Hiểu Tư Duy React Thông Qua Js

// Data luôn đi theo 1 chiều đồng bộ từ cha xuống con
// App là component root -> Nếu đặt state tại component App thì luôn luôn đúng -> điều này chính là tư tưởng của redux
// Đây là file mình chứng minh cách React chạy ở phía sau hậu trường (behavior)

function App() {
  let app_variable = 'app_variable'

  let callbackFromParent = (data) => {
    app_variable = data
  }

  Button(callbackFromParent)

  Header(app_variable)
  Content(app_variable)
  Footer(app_variable)
}

function Header(props) {
  console.log('header props:', props)

  NavBar(props) // phải truyền tham số props vào function NavBar thì sau đó trong NavBar mới có data từ props. Nếu không truyền thì khi log ra nó sẽ undefined
}

function NavBar(props) {
  console.log('navbar props:', props)
}

function Content(props) {
  console.log('content props:', props)
}

function Footer(props) {
  console.log('footer props:', props)
}

function Button(callback) {
  // data button
  callback('data from child')
}

App()
