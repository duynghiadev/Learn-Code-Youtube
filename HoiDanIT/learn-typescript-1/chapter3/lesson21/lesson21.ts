const age1: number = 20; // option 1 ✅
// const age1: number = 30; // option 2 ❌

switch (age1) {
  case 20:
  case 19:
    // code block
    console.log("Đã đi làm");
    break;
  case 12:
    console.log("Đang làm sinh viên");
    break;
  default:
    // Nếu không đúng với điều kiện đã đặt ở trước đó thì sẽ chạy vào chỗ này 👇
    // code block
    console.log(">>> Run default");
    break;
}
