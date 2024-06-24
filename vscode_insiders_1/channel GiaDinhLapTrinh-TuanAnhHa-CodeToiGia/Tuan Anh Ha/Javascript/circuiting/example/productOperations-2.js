/**
 * Dưới đây là một ví dụ phức tạp hơn và dài hơn sử dụng nhiều array method và các toán tử logic &&, ||. Trong ví dụ này, chúng ta sẽ xử lý một danh sách sản phẩm và thực hiện các thao tác như lọc, sắp xếp và tính toán giá trị trung bình.
 */

/**
 * Trong ví dụ này:

.filter() được sử dụng để lọc các sản phẩm điện tử có giá dưới 1000 và có sẵn trong kho.
.sort() được sử dụng để sắp xếp các sản phẩm theo giá giảm dần.
.reduce() được sử dụng để tính giá trung bình của tất cả các sản phẩm có sẵn trong kho.
Với việc kết hợp nhiều array method và các toán tử logic, chúng ta có thể thực hiện nhiều thao tác phức tạp trên một tập dữ liệu.
 */
const products = [
  { name: 'Laptop', category: 'Electronics', price: 1200, inStock: true },
  { name: 'Coffee Maker', category: 'Appliances', price: 80, inStock: false },
  { name: 'Headphones', category: 'Electronics', price: 150, inStock: true },
  { name: 'Blender', category: 'Appliances', price: 40, inStock: true },
  { name: 'Smartphone', category: 'Electronics', price: 800, inStock: true },
  { name: 'Toaster', category: 'Appliances', price: 30, inStock: true }
]

// Lọc các sản phẩm điện tử có giá dưới 1000 và có sẵn trong kho
const filteredProducts = products.filter(
  (product) =>
    product.category === 'Electronics' && product.price < 1000 && product.inStock === true
)

console.log('Filtered Electronics Products:', filteredProducts)

// Sắp xếp các sản phẩm theo giá giảm dần
const sortedProducts = products.sort((a, b) => b.price - a.price)

console.log('Sorted Products by Price (Descending):', sortedProducts)

// Tính giá trung bình của tất cả sản phẩm có sẵn trong kho
const inStockProducts = products.filter((product) => {
  return product.inStock
})
const totalStockPrice = inStockProducts.reduce((sum, product) => {
  return sum + product.price
}, 0)

console.log('totalStockPrice:', totalStockPrice)
console.log('inStockProducts:', inStockProducts)

const averagePrice = totalStockPrice / inStockProducts.length

console.log('Average Price of In-Stock Products:', averagePrice)
