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

// giả sử mình click vào sản phẩm số 1 -> hiện tại nó đang có 3 sản phẩm -> thì sau khi click thì nó sẽ lên 4 (click into product 1 then product from 3 to 4)

// Đầu vào của mình thì nó đang có cái object đấy (input is object)
// Dưới đây là cách làm ✅
// Đầu tiên chúng ta tìm ra index (index theo thứ tự là 0, 1, 2,...) của phần tử cần xóa
// Sau đó chúng ta cập nhất số lượng theo index -> carts[index].amount++
