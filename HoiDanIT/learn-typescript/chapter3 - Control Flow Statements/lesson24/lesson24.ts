let counter3 = 0; // passed ✅
// let counter3 = 20; // error ❌

/**
 * - Sự khác nhau giữa while và do...while là:
 * - while: kiểm tra điều kiện rồi mới chạy. Nếu đúng thì chạy tiếp, sai là không chạy nữa, và dừng luôn
 * - do...while: dù có sai thì nó vẫn chạy 1 lần rồi mới kiểm tra điều kiện, và sau đó mới thoát. Tóm lại là
 * nó luôn chạy tối thiểu 1 lần
 */

do {
  console.log("counter = ", counter3);
  if (counter3 % 2 === 1) break; // Đây sử dụng phép chia lấy dư
  counter3++;
} while (counter3 < 10);
