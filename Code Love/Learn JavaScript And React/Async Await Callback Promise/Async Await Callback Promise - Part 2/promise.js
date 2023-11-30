/**
 * - Promise là gì?
 * + Promise thực chất là 1 object.
 * + Nó sẽ nắm giữ kết quả của các bạn trong việc xử lý bất đồng bộ trong việc thành công hoặc thất bại. Nếu thành công thì nó sẽ chạy vào resolve, còn thất bại thì nó chạy vào reject
 */

/**
 * - Khi sử dụng promise thì các bạn sẽ trải qua 2 bước nhé
 * + Bước đầu tiên thì các bạn sẽ tạo ra promise
 * + Tiếp theo là khai báo các chức năng ở trong thân của promise.
 *
 * - Lưu ý là code của promise là code bất đồng bộ nhé !!!
 */

const createPromise = () => {
  // Đây là tạo ra object của Promise
  const resolveFlag = false

  return new Promise((resolve, reject) => {
    //  Trong thân hàm của promise là bất đồng bộ (async)
    setTimeout(() => {
      if (resolveFlag) {
        resolve('get user from database')
      } else {
        reject('error here')
      }
    }, 1000)
  })
}

initialPromise = createPromise()

/**
 * - Tiếp theo chúng ta sử dụng promise hoặc có thể gọi nó là consume
 * - Khi mình gọi method then thì nó tương đương với method resolve ở trên khi mình khai báo trong Promise
 * - Khi mình gọi method catch thì nó tương đương với method reject ở trên khi mình khai báo trong Promise
 */

initialPromise
  .then((dataSuccess) => {
    console.log('data success', dataSuccess)
  })
  .catch((error) => {
    console.log('data error', error)
  })
