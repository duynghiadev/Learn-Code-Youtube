function handleException(errorMessage: string): never {
  throw Error(errorMessage);
}

handleException("just a test error ✅");

let a = handleException("just a test error ❌");
console.log(">> check a= ", a);

/**
 * - Function này trả về void, bởi vì nó không trả về cái gì cả
 * - Hàm trả về mà có type thì phải có return
 * - Thường thường thì chỉ có biến (variable) mới trả về type. Còn các function thì không trả về cái gì hết
 *
 * - Lưu ý: các hàm mà trả về void là nó có trả về kết quả, và tên của kết quả đó là undefined nha ❌
 */

function runInfinity(): void {
  while (true) {
    console.log("running...");
  }
}
