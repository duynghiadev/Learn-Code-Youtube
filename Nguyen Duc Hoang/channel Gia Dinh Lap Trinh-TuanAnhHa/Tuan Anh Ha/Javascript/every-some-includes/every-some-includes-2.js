/**
 * - Bài này cũng thuộc dạng nâng cao và khó hiểu
 * - Bên này là những đoạn code mình đã tách code ra từng hàm nhỏ cho dễ đọc và dễ hiểu
 * - Còn code gốc của phần này là bên file markdown
 *
 * - Lưu ý:
 *  - Trong bài này mình sẽ được học thêm 1 phương thức mới đó là flatMap()
 *  - Mình cũng đã giải thích trong file markdown đó luôn rồi
 */

// Mảng chứa thông tin về các đơn hàng
const orders = [
  {
    id: 1,
    products: [
      { name: 'Laptop', price: 1200 },
      { name: 'Mouse', price: 20 }
    ],
    discount: 0.1
  },
  {
    id: 2,
    products: [
      { name: 'Smartphone', price: 800 },
      { name: 'Headphones', price: 50 }
    ],
    discount: 0.05
  },
  {
    id: 3,
    products: [
      { name: 'Tablet', price: 500 },
      { name: 'Keyboard', price: 30 }
    ],
    discount: 0.15
  },
  {
    id: 4,
    products: [
      { name: 'Monitor', price: 300 },
      { name: 'Printer', price: 100 }
    ],
    discount: 0.2
  }
]

// Tính tổng giá trị đơn hàng sau khi áp dụng giảm giá
const totalOrderValue = orders.reduce((total, order) => {
  console.log('array orders:', orders)
  console.log('total:', total)
  console.log('order:', order)
  console.log('-------------------------------------')

  const discountedTotal = order.products.reduce((subtotal, product) => {
    console.log('subtotal:', subtotal)
    console.log('product:', product)
    console.log('product.price:', product.price)
    console.log('order.discount:', order.discount)
    console.log('product.price * (1 - order.discount):', product.price * (1 - order.discount))
    console.log(
      'subtotal + product.price * (1 - order.discount):',
      subtotal + product.price * (1 - order.discount)
    )
    console.log('-------------------------------------')

    return subtotal + product.price * (1 - order.discount)
  }, 0)
  console.log('return total:', total)
  console.log('return discountedTotal:', discountedTotal)

  return total + discountedTotal
}, 0)

console.log('Tổng giá trị đơn hàng sau khi áp dụng giảm giá:', totalOrderValue)

// Kiểm tra xem tất cả đơn hàng có giảm giá không
const allOrdersHaveDiscount = orders.every((order) => order.discount > 0)

console.log('Tất cả đơn hàng có giảm giá không:', allOrdersHaveDiscount)
console.log('-------------------------------------')

// Lọc ra các sản phẩm có giá trên 100
const flatMapProduct = (order) => {
  console.log('order.product:', order.products)
  console.log('-------------------------------------')
  return order.products
}

const filterProduct = (product) => {
  console.log(`product.price > 100 is ${product.price > 100}. This is ${product.name}`)
  return product.price > 100
}

const highPricedProducts = orders
  .flatMap(flatMapProduct)
  .filter(filterProduct)
  .map((product) => product.name)

console.log('-------------------------------------')
console.log('Các sản phẩm có giá trên 100:', highPricedProducts)
