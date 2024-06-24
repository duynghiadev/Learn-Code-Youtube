/**
 * Ví dụ này ở trong video: Hàm Bind vs Call vs Apply Trong Javascript | Justin Nguyen
 */
/**
 * Ví dụ về cách sài bind trong ReactJS hay React native (hay xuất hiện trong câu hỏi phỏng vấn)✅✅✅
 */
/**
 * - Giải thích code:
 *  - Khi mình nhấn nút click thì nó nằm trong event queue. Khi có sự kiện xảy ra trong cái button onClick này, thì cái hàm callback (handleClick) này á nó được xảy ra và nó được bỏ ở trong event queue hay còn gọi là task queue nha các bạn
 */
class Foo extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log('Click happened')
  }
  render() {
    return <button onClick={this.handleClick}>Click me</button>
  }
}
