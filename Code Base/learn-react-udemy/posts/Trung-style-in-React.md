## React - Thiết lập style như thế nào?

Lúc làm theo tutorial dạy React thì phần style rất đơn giản, đơn thuần đặt class cho component, rồi đặt style cho class đó trong 1 file CSS bên ngoài. Làm thêm 1 lúc lại thấy có những khái niệm như styled-component, CSS-in-JS, xem hướng dẫn của Semantic-UI càng thấy lạ. Tra thử tài liệu của React xem hướng dẫn thì thấy mấy phần hỏi - trả lời rất tốt cho người mới học. 

[React - Styling và CSS](https://reactjs.org/docs/faq-styling.html)

### Làm thế nào để thêm CSS class vào component?

Đơn giản là truyền tên class đó dưới dạng string vào props `className`:

```js
render() {
  return <span className="menu navigation-menu">Menu</span>
}
```
Sau đó đặt thông số style cho các class `menu`, `navigation-menu` ở 1 file `.css` bên ngoài.

Việc truyền string vào props có thể được xử lý ngay trước đó theo điều kiện của props hoặc state:

```js
render() {
   let className = 'menu';
   if (this.props.isActive) {
        className += 'menu-active';
   }
   return <span className={className}> Menu </span>
}
```
Nếu thường xuyên viết kiểu trên thì ta có thể cân nhắc sử dụng 1 package tên là `className`, xem ở [đây](https://www.npmjs.com/package/classnames)

### Ta có thể dụng style kiểu "inline" được không?

Được. Xem phần hướng dẫn ở [đây](https://reactjs.org/docs/dom-elements.html#style)

Từ "style" ở trong phần này rất khó dịch ra tiếng Việt, nó có nhiều nghĩa:
1. "style" (là *danh từ*): trong front-end truyền thống, chỉ layout, màu sắc, font chữ, vẻ bên ngoài, những thứ như hover, hiệu ứng cũng là style. 
2. "style" (là *động từ*): chỉ việc áp dụng "style cho 1 element nào đó". Giống như khi nói là "*Phải style cho em `<div>` này thành màu đỏ thay vì màu hường*". 
3. "style" (là 1 attribute của component trong React, nhận vào giá trị là 1 object)

React chủ yếu nói về cái "style" thứ 3, ở trên. Do nó có thể nhận vào 1 object không khác gì 1 variable, cho nên nó thường được dùng nhiều trong các tình huống mà người ta cần thay đổi nó tùy lúc tùy nơi, theo những điều kiện không cố định (dynamically-computed style at render time)

Object được gán cho attribute `style` cũng không phải thích viết kiểu gì cũng được, mà buộc phải theo 1 quy tắc. 

Ví dụ: Theo kiểu viết style inline truyền thống, ta viết như sau:
```html
<div style="background-color: yellow; color:blue; margin-left:30px;">Xin chào freeCodeCamp Hanoi</div>
```
Nhưng trong React, object truyền vào cho attribute `style` phải trông như sau:
```js
const divStyle = {
    backgroundColor: 'yellow',
    color: 'blue',
    marginLeft: '30px'
};

function HelloFCCHanoiComponent() {
    return <div style={divStyle}>Xin chào freeCodeCamp Hanoi</div>
}
```
Nhìn qua ta thấy:
- String "background-color" chuyển sang thành "backgroundColor"
- String "color" vẫn thế
- String "margin-left" đổi thành "marginLeft"

Việc biết thành camelCased này, theo React là để:
- cho đồng nhất với DOM `style` JavaScript property
- hiệu quả hơn
- ngăn ngừa lỗ hổng bảo mật XSS. 

Ở mục này còn có nó cách hỗ trợ các trình duyệt cũ.

### "Inline" thì dùng được, nhưng có nên dùng kiểu đó hay không?

Thường thì viết ra 1 file CSS sẽ hiệu quả hơn viết dạng inline.

### CSS-in-JS là gì?

"CSS-in-JS" để chỉ cách viết CSS trực tiếp trong JavaScript thay vì định nghĩa CSS trong 1 file bên ngoài. Có 1 vài thư viện CSS-in-JS, bạn có thể đọc so sánh giữa các thư viện ở [đây](https://github.com/MicheleBertoli/css-in-js)

*Lưu ý rằng "functionality" (viết mọi thứ theo kiểu hàm) không phải là một phần của React, mà được cung cấp bởi bên thứ 3. React không can thiệp vào lựa chọn của người dùng; nhưng một khi bản thân người dùng vẫn phân vân, thì tốt nhất cứ khởi đầu bằng việc đặt style trong 1 file `*.css` ở bên ngoài, rồi trỏ đến nó trong component thông qua `className`. 

### Tôi có thể tạo animation trong React?

React hỗ trợ những animation phức tạp. Hãy đọc các mục như [React Transition Group](https://reactcommunity.org/react-transition-group/) và [React Motion](https://github.com/chenglou/react-motion)

---

Nên tham khảo thêm:

- [StackOverflow - Reactjs Inline Style Best Practices](https://stackoverflow.com/questions/26882177/react-js-inline-style-best-practices)
- [Codeburst - Four ways to style react components](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da82)

