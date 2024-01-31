# File code này là review lại chức năng xóa sản phẩm

1. Lần 1 ứng dụng chạy lên, thì chúng ta ra version app1

```js
// App render lần đầu
carts = [
  {
    id: 1,
    title: 'Samsung Galaxy S7',
    price: 10,
    img: 'https://by.tn/b2G0',
    amount: 3
  },

  {
    id: 2,
    title: 'google pixel ',
    price: 20,
    img: 'https://by.tn/dkCK',
    amount: 1
  },

  {
    id: 3,
    title: 'Xiaomi Redmi Note 2',
    price: 50,
    img: 'https://by.tn/iZUq',
    amount: 1
  }
]
```

- Tiếp theo thì nó tạo ra function `handleClickRemove`:

```js
const handleClickRemove = (id) => {
    const newStateCart = carts.filter((cartItem) => {
      if (cartItem.id !== id) {
        return true
      }
    })
    setCarts(newStateCart)
  }
  /*
  * - Trong hàm đó thì thằng carts nó lưu các giá trị lần đầu render (các sản phẩm trong cái biến carts)
  * - Trong hàm đó có sử dụng carts (state) và setCarts (setState) => nên nó tạo ra luôn closure, nó đóng kín thằng này lại luôn => Closure là App gồm có {carts, setCarts}
  * - Render lần đầu kết thúc thì trong hàm nó vẫn giữ giá trị của carts và setCarts mọi người nhá. Bởi vì hàm handleClickRemove đã tạo ra closure
  */
```

2. Lần thứ 2 render lại app (re-render app)

- Khi nào nó render app? Khi mà mình click vào cái button `Remove` thì state thay đổi => state thay đổi thì setState sẽ chạy lại => đồng nghĩa với việc re-render app.

- Thì hàm `handleClickRemove` kích hoạt, sau đó nó sẽ thực thi các hàm dòng code bên trong hàm và nó chạy đến đoạn `setCarts(newStateCart)`, state của thằng app thay đổi nên nó sẽ chạy lại từ đầu đến cuối.

- Tóm lại: ✅
  - khi event handle chạy (tức là hàm `handleClickRemove` chạy). Khi thằng này chạy thì nó sẽ tạo ra `new state`.
  - Mỗi lần render xảy ra thì hàm sẽ lấy lại dữ liệu của lần render trước đó, vì nó đã tạo ra closure và đã lưu lại data đấy rồi.
  - Ví dụ: ở đây có 3 phần tử, khi mình remove đi sản phẩm có `id = 1` thì nó sẽ tạo ra state chỉ còn sản phẩm có `id = 2` và `id = 3`. Cứ thế nếu mình tiếp tục nhấn remove sản phầm có `id = 2` thì trong state chỉ còn sản phẩm có `id = 3`,(Bởi vì dữ liệu được lưu trong closure rồi)... và cứ thế đến hết

- ✅ Nhớ là state thằng nào thay đổi thì thằng đấy re-render thôi. State thằng `App` thay đổi thì thằng `App` re-render thôi. Mà thằng `App` re-render thì dẫn đến cháu, chắt, chít,... của nó sẽ re-render lại hết.

- Mỗi lần xóa sản phẩm là mỗi lần đó sẽ bị re-render lại.

### Kết luận:

- Trước khi re-render thì nó sẽ nắm giữ tất cả các data trong `state`. Và khi lần thứ 2 mình click thì nó (`closure`) sẽ nhớ data lần thứ 2. Và cứ thế,... đến khi mình xóa hết các data trong `state` thì thôi.

- Mỗi lần `App` render => thì sẽ tạo ra version riêng => trong version riêng đấy thì tất cả trong thân hàm khi render được tạo mới. Nhờ cơ chế `closure` nó nhớ `state`, `props`,... và khi người dùng `action` trước khi re-render lại thì nó sẽ sử dụng cái trước đó đã lưu lại và tính toán.

#### Cách Debug khi code ReactJS (JavaScript):

- Nếu mình muốn biết luồng code khi re-render thì mình sẽ đặt log trong đoạn code đó và một log ở ngoài hàm `let i = 0` => để xem thứ tự chạy.