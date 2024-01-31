let counter1 = 0;

while (counter1 < 5) {
  console.log("> counter: ", counter1);
  if (counter1 % 2 === 1) break; // Đây là phép toán chia lấy dư
  counter1++;
}

while (counter1 < 5) {
  console.log(">> counter1: ", counter1); // print 1 -> 5
  counter1++;
}
