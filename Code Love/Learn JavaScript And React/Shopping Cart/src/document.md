## Luồng chạy của app react

1. Lần 1 chạy ứng dụng lên, chúng ta tạo version app_1

```jsx
// App render lần đầu
const carts = [
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

export default carts
```

- Tạo ra function

```jsx
const handleClickRemove = (id) => {
  const newStateCart = carts.filter(function (cartItem) {
    if (cartItem.id !== id) {
      return true
    }
  })
  setCarts(newStateCart)
}
```

- Tạo ra closures App{carts, setCarts}

- Render lần đầu kết thúc

- Khi event handle chạy: handleClickRemove => chạy

```jsx
const newStateCart =
  const carts = [
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

- Khi chạy đến dòng này `setCards(newStateCart)` => state app thay đổi thì dẫn đến => app re-render

2. Lần 2 re-render app => tạo version thứ 2 của app (app_2)

```jsx
const carts =
  const carts = [
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

- Kết luận:

* Mỗi lần app render. Nó tạo ra version riêng và trong version riêng thì tạo ra tất cả trong thân hàm khi render được tạo mới (bao gồm biến và function) nhờ cơ chế closure (nó nhớ state,props,...)
* Khi người dùng action, trước khi re-render lại nó sử dụng cái trước đấy đã lưu để tính toán

=> ✅ Bản chất của react là closure (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures). Nếu mình master được closure thì mình học react rất dễ dàng
