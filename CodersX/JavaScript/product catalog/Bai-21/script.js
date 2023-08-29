var products = [
  {
    name: "A",
    unitPrice: 10,
    quantity: 10,
    category: "Electronic goods",
  },
  {
    name: "B",
    unitPrice: 100,
    quantity: 10,
    category: "Electronic goods",
  },
  {
    name: "C",
    unitPrice: 50,
    quantity: 9,
    category: "Electronic bad",
  },
  {
    name: "D",
    unitPrice: 670,
    quantity: 50,
    category: "Electronic medium",
  },
  {
    name: "E",
    unitPrice: 670,
    quantity: 50,
    category: "Electronic medium",
  },
];

// Filter các sản phẩm có category giống nhau
function filterProducts() {
  var categoryFilter = document.getElementById("categoryFilter");
  var selectedCategory = categoryFilter.value;
  console.log("selectedCategory: ", selectedCategory);

  var filteredProductsList = document.getElementById("filteredProductsList");
  filteredProductsList.innerHTML = ""; // Xóa danh sách hiện tại

  if (selectedCategory === "all") {
    // Nếu chọn tất cả, hiển thị tất cả sản phẩm
    products.forEach(function (product) {
      var li = document.createElement("li");
      li.textContent = product.name;
      filteredProductsList.appendChild(li);
    });
  } else {
    // Lọc và hiển thị các sản phẩm theo category đã chọn
    var filteredProducts = products.filter(function (product) {
      return product.category === selectedCategory;
    });

    filteredProducts.forEach(function (product) {
      var li = document.createElement("li");
      li.textContent = product.name;
      filteredProductsList.appendChild(li);
    });
  }
}

// Tính tổng số tiền hàng còn trong kho
var totalValue = products.reduce(function (sum, product) {
  return sum + product.unitPrice * product.quantity;
}, 0);

var totalValueElement = document.getElementById("totalValue");
totalValueElement.textContent = totalValue;

// Chọn ra các sản phẩm có tiền hàng tồn lớn (tổng trên 500)
var highValueProducts = products.filter(function (product) {
  return product.unitPrice * product.quantity > 500;
});

var highValueProductsList = document.getElementById("highValueProductsList");

highValueProducts.forEach(function (product) {
  var li = document.createElement("li");
  li.textContent = product.name;
  highValueProductsList.appendChild(li);
});
