/**
 * Dựa vào result để biết vị trí a và b: (3 điều kiện)
 * Nếu result <0: a trước b
 * result>0: b trước a.
 * result =0 (kệ cmnđ).
 * Thật ra sự khác nhau là ở chỗ result=a-b hay result = b-a;
 * chứ 3đk trên kia chỉ để xét khi chúng ta đã có result cụ thể.
 */

/**
 * 1. Define an array of products (name, price, instock)
 * 2. Sort by price from more expensive to less expensive
 * 3. Sort by in stock value from more expensive to less expensive
 */

var products = [
  { name: "Product A", price: 200, instock: 10 },
  { name: "Product B", price: 500, instock: 5 },
  { name: "Product C", price: 100, instock: 20 },
  { name: "Product D", price: 300, instock: 15 },
];

// Hiển thị danh sách sản phẩm
function displayProductList(productList) {
  var productListElement = document.getElementById("productList");
  productListElement.innerHTML = "";

  var ul = document.createElement("ul");
  productList.forEach(function (product) {
    var li = document.createElement("li");
    li.textContent = `${product.name} - Price: $${product.price} - In stock: ${product.instock}`;
    ul.appendChild(li);
  });
  productListElement.appendChild(ul);
}

// Sắp xếp theo giá từ cao đến thấp
function sortByPriceDescending() {
  var sortedList = products.sort(function (a, b) {
    return b.price - a.price;
  });

  displayProductList(sortedList);
}

// Sắp xếp theo số lượng tồn kho từ cao đến thấp
function sortByInventoryDescending() {
  var sortedList = products.sort(function (a, b) {
    return b.instock - a.instock;
  });

  displayProductList(sortedList);
}

// Sắp xếp theo số lượng tồn kho từ thấp lên cao
function sortByInventoryAscending() {
  var sortedList = products.sort(function (a, b) {
    return a.instock - b.instock;
  });

  displayProductList(sortedList);
}

// Sự kiện khi click vào nút sắp xếp theo số lượng tồn kho từ cao đến thấp
var sortInventoryDescButton = document.getElementById(
  "sortInventoryDescButton"
);
sortInventoryDescButton.addEventListener("click", sortByInventoryDescending);

// Sự kiện khi click vào nút sắp xếp theo số lượng tồn kho từ thấp lên cao
var sortInventoryAscButton = document.getElementById("sortInventoryAscButton");
sortInventoryAscButton.addEventListener("click", sortByInventoryAscending);

// Hiển thị danh sách sản phẩm mặc định ban đầu
displayProductList(products);
