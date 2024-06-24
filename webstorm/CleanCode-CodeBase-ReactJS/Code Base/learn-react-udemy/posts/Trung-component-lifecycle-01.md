Tóm tắt nhanh về Lifecycle của component trong React

Nguồn: [Understanding React.js](https://staminaloops.github.io/undefinedisnotafunction/understanding-react/)

Một số bài tham khảo chi tiết hơn:

- [Tài liệu chính thức của React](https://reactjs.org/docs/react-component.html)

```js
import React from 'react';

// this will be our component:
const MyReactComponent = React.createClass({

  propTypes: {
    // The propTypes object allows you to validate props being passed to your components.
  },

  // An array of objects each of which can augment the lifecycle methods
  mixins: [],

  // Functions that can be invoked on the component without creating instances
  statics: {
    aStaticFunction() {}
  },

  // The object returned by this method sets the initial value of this.state
  getInitialState() {
    return {};
  },

  // The object returned by this method sets the initial value of this.props
  // If a complex object is returned, it is shared among all component instances    
  getDefaultProps() {
    return {};
  },

  //--------- Lifecycle Methods ------------//

  // Được gọi một lần TRƯỚC lần render đầu tiên
  componentWillMount() {
    // Gọi setState ở đây sẽ không làm cho component render lần nữa
  },

  
  // The data returned from render is neither a string nor a DOM node.
  // It's a lightweight description of what the DOM should look like.
  // Inspects this.state and this.props and create the markup.
  // When your data changes, the render method is called again.
  // React diff the return value from the previous call to render with
  // the new one, and generate a minimal set of changes to be applied to the DOM.
  render() {
    // Returns the jsx markup (React has no templates) for a component
    // Should never update this.state or this.props
    return (<div></div>);
  },

  // Được gọi 1 lần, chỉ ở phía client chứ không trên server, ngay SAU khi lân render đầu tiên xảy ra
  componentDidMount() { 
    // You can access any refs to your children
    // (e.g., to access the underlying DOM representation - ReactDOM.findDOMNode). 
    // The componentDidMount() method of child components is invoked before that of parent components.
    // Nếu muốn tích hợp với các framework JavaScript khác,
    // đặt bộ đếm thời gian như setTimeout hoặc setInterval, 
    // hoặc gửi request dạng AJAX, hãy thực hiện những công việc đó bên trong method này.
  },

  // Được gọi mỗi khi có thay đổi của props
  // Được gọi TRƯỚC render lần hai
  // Không được gọi khi render lần đầu
  componentWillReceiveProps(nextProps) {
    // Giá trị của props trước đó có thể được lấy ra bởi this.props
    // Gọi setState ở trong đây không khiến cho component bị render lần nữa (ý là sau render lần 2)
  },

  // Xác định nếu method render sẽ chạy trong những bước tới
  // Được gọi TRƯỚC render lần 2
  // Không được gọi trong lần render đầu tiên
  shouldComponentUpdate(nextProps, nextState) {
    // Nếu muốn method render được thực thi trong bước tiếp theo 
    // trả về true, còn không thì trả về false
      return true;
  },
  // Được gọi NGAY TRƯỚC render lần 2

  componentWillUpdate(nextProps, nextState) {
    // Không thể gọi this.setState() bên trong method này
  },

  // Được gọi NGAY SAU render lần 2
  componentDidUpdate(prevProps, prevState) {
  },

  // Được gọi NGAY TRƯỚC khi một compunt bị loại khỏi DOM
  componentWillUnmount() {
  }
});

export default MyReactComponent
```