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

// giả sử mình click vào sản phẩm số 1 -> 3-> 4
// dau vào
// tìm ra index của phần tử cần xóa
// cập nhất số lượng theo index -> carts[index].amount++
