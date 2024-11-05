// Tính tổng các phần tử là số của mảng
function getTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      total += arr[i];
    }
  }
  return total;
}
