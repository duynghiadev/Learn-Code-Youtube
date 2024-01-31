// Có bất kỳ lợi ích nào khi sử dụng Async / Await không ?

const X = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, 3000);
  });
};

const Y = (y) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(y);
    }, 2000);
  });
};

async function total(x, y) {
  console.time(`TIME_PROCESS`);
  // CÁCH 1: Sử dụng async => TIME_PROCESS: 5.014S
  const _x = await X(x); // 3s
  const _y = await Y(y); // 2s

  // CÁCH 2: Sử dụng (promise) Promise.all() => TIME_PROCESS: 3.010s
  // const [_x, _y] is destructuring
  // const [_x, _y] = await Promise.all([X(x), Y(y)]);

  // CÁCH 3: Cách này giống như cách sử dụng promise => TIME_PROCESS: 3.010s
  // const _awaitX = X(x);
  // const _awaitY = Y(y);
  // const _x = await _awaitX;
  // const _y = await _awaitY;

  console.timeEnd(`TIME_PROCESS`);
  return _x + _y;
}

total(5, 7).then((total) => console.log("TOTAL is", total));

async function func1() {
  const promise = asyncOperation();
  return await promise;
}

async function func2() {
  const promise = asyncOperation();
  return await promise;
}

/**
  - Lưu ý:
  + Nguyên nhân là phần callback của Promise sẽ được chạy ngay sau khi nó được khởi tạo;
   + Cách 1 với async/await, dòng 24 sẽ block cho tới khi Promise trả về kết quả rồi dòng 25 mới tiếp tục được chạy => chạy tuần tự 
   + Cách 2 đưa vào tất cả promises vào Promise.all() thì nó khởi tạo tất cả promise này cùng lúc, mà khi được khởi tạo thì callback của promise đã được thực thi => chạy đồng thời với nhau
   + Cách 3 Khởi tạo sẵn promise vào biến thì lúc này callback của promise đã được chạy rồi cho nên có await tiếp cũng không làm nó block => chạy đồng thời giống Promise.all()
 */

/**
 * - Lưu ý 2:
 * + promise.all tương đương với const X = await promiseA + await promiseB + await promiseC;
 */
