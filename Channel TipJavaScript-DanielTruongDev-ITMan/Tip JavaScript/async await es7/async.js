function slowAddition(n1, n2) {
  return new Promise((resolve, reject) => {
    // setTimeout( ()=> resolve(n1 + n2), 3000)
    setTimeout(() => {
      reject(new Error("kế hoạch tan vỡ, nhanh chóng tăng lương"));
    }, 3000);
  });
}

async function increaseSalary(base, increase) {
  const newSalary = await slowAddition(base, increase);
  return newSalary;
  // let newSalary;
  // try {
  //   newSalary = await slowAddition(base, increase);
  // } catch (error) {
  //   console.log(`Error get newSalary ${error.message}`);
  //   newSalary = base * 2;
  // }

  // console.log(`new Salary ${newSalary}`);
  // return newSalary;
}

increaseSalary(1000, 100)
  .then()
  .catch((e) => console.log(`Error get newSalary ${e.message}`));

/**
 * - Lưu ý:
 * + Khi thành công (resolve) thì sẽ run vào then()
 * + Khi thất bại (reject) thì sẽ run vào catch()
 *
 * - Khi học cái gì mới thì phải nhớ 2 điều này:
 * + Nó sử dụng để làm gì ?
 * + Sử dụng nó như thế nào ?
 *
 * - Có nhiều cách đồng bộ, chẳng hạn như:
 * + Đồng bộ song song
 * + Đồng bộ tuần tự
 * + Các hàm lồng nhau về cách không tuần tự
 * + v.v... (Có rất nhiều đồng bộ, chúng ta cần biết những thứ cơ bản và hay dùng nhất)
 */

/**
 * - Luôn luôn nhớ:
 * + Quy tắc đơn giản khi sử dụng Async / Await
 * + Một hàm mà sử dụng Async/Await thì luôn luôn trả về Promise
 * + Khi bắt lỗi thì nên sử dụng bắt lỗi trong try catch
 */
