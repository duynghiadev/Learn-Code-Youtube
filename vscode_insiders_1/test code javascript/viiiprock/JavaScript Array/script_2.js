/**
 * Đây là những đoạn code từ blog 2
 */

// Array 1 chiều (One dimension Array)
const arr = ["foo", "bar"];
// hoặc
const arr1 = new Array(2);
console.log(arr1); // tạo ra array rỗng
console.log(arr1.length); // 2

console.log("=".repeat(40));

// Array đa chiều (Muti-dimensional Array)
const activities = [
  ["Work", 9],
  ["Eat", 2],
  ["Commute", 2],
  ["Play game", 2],
  ["Sleep", 7],
];
console.log("activities:", activities);

console.log("=".repeat(40));

// Array hỗn hợp
const arr2 = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];
console.log("arr2:", arr2);

console.log("=".repeat(40));

// phá vỡ cấu trúc array
let arr3 = [];
console.log("arr3.length first:", arr3.length);
arr3[100] = "some value";
console.log("arr3.length second:", arr3.length); // có kích cở 101 nhưng chỉ có 1 phần từ, còn lại là empty value hết
console.log("arr3:", arr3);

console.log("=".repeat(40));

// ========================================================================

// So sánh 2 array
const arrA = ["a", "b", "c", "d"];
const arrB = ["b", "c", "a", "d"];

const result1 = JSON.stringify(arrA) === JSON.stringify(arrB);
console.log("result1:", result1);

function compareArrays(a, b) {
  if (a.length !== b.length) return false;
  const result2 = a.every((element) => b.includes(element));
  console.log("result2:", result2);

  return result2;
}
compareArrays(arrA, arrB);

console.log("=".repeat(40));

// splice
const arr4 = ["a", "b", "c", "d"];
console.log("arr4 origin:", arr4);
// xóa 2 phần tử bắt đầu từ index = 0
const spliceElement = arr4.splice(0, 2);
console.log("spliceElement:", spliceElement);
console.log("arr4 after splice:", arr4);
// thêm phần tử ở vị trí index = 2
arr4.splice(2, 0, "foo");
console.log("arr4 finish:", arr4);

console.log("=".repeat(40));

const arr5 = ["a", "b", "c", "d", "e"];
// Copy các phần tử bắt đầu từ index 2
console.log(arr5.slice(2)); // ["c", "d", "e"]

// Copy các phần tử bắt đầu từ index 2 đến index 4
console.log(arr5.slice(2, 4)); //["c", "d"]

// Copy các phần từ index cuối cùng trở về trước 2 bước
console.log(arr5.slice(-2)); // ["d", "e"]

// Copy các phần tử từ index 2
console.log(arr5.slice(2, -1)); // ["c", "d"]

console.log("=".repeat(40));
const a = [1, 2, 3];
const b = [4, 5, 6];
const merged = [...a, ...b];
console.log("merged:", merged);

const c = [1, 2, 3];
const d = [4, 5, 6];
const e = true;
const merged1 = c.concat(d, e); // trong case này chúng ta sử dụng spread operator thì sẽ bị lỗi -> vì có giá trị không phải là array (true là boolean) -> vì vậy chúng ta phải sử dụng concat()

console.log("=".repeat(40));

// ========================================================================

// Vòng lặp

// find -> trả về giá trị của phần tử -> return value
const arr6 = [1, 2, 3, 4, 5];
const findValue = arr6.find((item) => item > 3);
console.log("findValue:", findValue);

// findIndex -> trả về vị trí của phần tử -> return index
const findIndex = arr6.findIndex((item) => item > 3);
console.log("findIndex:", findIndex);

console.log("=".repeat(40));

const artists = [
  { name: "Greg Howe", hits: 30 },
  { name: "Guthrie Govan", hits: 34 },
  { name: "Shawn Lane", hits: 25 },
  { name: "Jimmy Hendrix", hits: 50 },
];

// tìm nghệ sĩ có tên 'Govan'
const artist = artists.find(function (artist) {
  return artist.name.indexOf("Govan") > -1;
});
console.log("artist:", artist);

console.log("=".repeat(40));

// every
const cart = [
  {
    item: "apples",
    price: 4,
  },
  {
    item: "pears",
    price: 5,
  },
  {
    item: "bread",
    price: 3,
  },
];

// Kiểm tra các món hàng trong giỏ hàng đều lớn hơn 2
const isMeetDiscountMargin = cart.every((item) => item.price > 2);
// giảm giá 20%
const discount = isMeetDiscountMargin ? 0.2 : 0;
console.log("discount:", discount);

console.log("=".repeat(40));

const cart1 = [
  {
    item: "apples",
    price: 1,
  },
  {
    item: "pears",
    price: 5,
  },
  {
    item: "bread",
    price: 3,
  },
];

// Kiểm tra nếu trong giỏ hàng có lê
const hasPears = cart1.some((item) => item.item === "pears");

// giảm giá 20%
const discount1 = hasPears ? 0.2 : 0;
console.log("discount1:", discount1);

console.log("=".repeat(40));

const uppercaseItems = cart1.map((item) => item.item.toUpperCase());
console.log("uppercaseItems:", uppercaseItems);

console.log("=".repeat(40));

const items = [
  {
    name: "apples",
    price: 1,
    inStock: false,
  },
  {
    name: "pears",
    price: 5,
    inStock: true,
  },
  {
    name: "bread",
    price: 3,
    inStock: true,
  },
];

const inStockItems = items.filter((i) => i.inStock);
console.log("inStockItems:", inStockItems);

console.log("=".repeat(40));

let schema = ["hello", "world", null, "", undefined, {}, NaN, "goodbye"];
schema = schema.filter((n) => n);
console.log("schema:", schema);

console.log("=".repeat(40));

const arr7 = [1, 2, 3, 4];
const reducer = (previous, currentValue) => previous + currentValue;
const result3 = arr7.reduce(reducer);
console.log("result3:", result3);

console.log("=".repeat(40));

const array1 = [1, 2, 3, 4];
const reducer1 = (previousValue, currentValue, currentIndex) => {
  console.log(currentIndex, previousValue);
  return previousValue + currentValue;
};

const arr8 = [1, 2, 3, 4];
// tương đương 1 + 2 + 3 + 4
arr8.reduce(reducer1);
// giá trị in ra trên console là
// > 1 1
// > 2 3
// > 3 6

console.log("continue...");

// Thêm giá trị khởi tạo
arr8.reduce(reducer1, 2);
// giá trị in ra trên console là
// > 0 2
// > 1 3
// > 2 5
// > 3 8

console.log("=".repeat(40));

const reducer2 = (accumulator, currentItem) => accumulator + currentItem.price;
const totalPrice = items.reduce(reducer2, 0);
console.log("totalPrice:", totalPrice);

console.log("=".repeat(40));

const collaborate_1 = items.filter((item) => item.price > 1);
console.log("collaborate_1:", collaborate_1);

const collaborate_2 = items.map((item) => item.name);
console.log("collaborate_2:", collaborate_2);

const collaborate_both = items
  .filter((item) => item.price > 1)
  .map((item) => item.name);
console.log("collaborate_both:", collaborate_both);

const collaborate_3 = items
  .map((item) => {
    if (item.price >= 5) {
      item.price -= 2;
    }
    console.log(" new item:", item);
    return item;
  })
  .filter((item) => item.price > 1)
  .reduce((acc, item) => acc + item.price, 0);
console.log("collaborate_3:", collaborate_3);
