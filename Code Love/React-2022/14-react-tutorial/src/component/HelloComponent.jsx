function HelloComponent() {
  const hello = function (name) {
    const handle = function () {
      console.log('name:', name)
    }

    console.dir(handle)
    return handle
  }

  const handleHello = function (name_1) {
    console.log('name_1:', name_1)
  }

  const hello_2 = (name_2) => {
    console.log('name_2', name_2)
  }

  return (
    <div>
      {/* Dưới đây là cách 1: tham chiếu đến function 🚀*/}
      <p>Dưới đây là cách 1</p>
      <button onClick={hello('react')}>React</button>
      <button onClick={hello('redux')}>Redux</button>
      <button onClick={hello('context')}>Context</button>
      <br />
      <br />

      {/* Dưới đây là cách 2: truyền function vào trực tiếp 🚀*/}
      <p>Dưới đây là cách 2</p>
      <button
        onClick={function () {
          handleHello('react')
        }}
      >
        React
      </button>

      <button
        onClick={function () {
          handleHello('redux')
        }}
      >
        Redux
      </button>
      <br />
      <br />

      {/* Dưới đây là cách 3: truyền arrow function vào 🚀*/}
      <p>Dưới đây là cách 3</p>
      <button
        onClick={() => {
          hello_2('react')
        }}
      >
        React
      </button>
      <button
        onClick={() => {
          hello_2('redux')
        }}
      >
        Redux
      </button>
      <button
        onClick={() => {
          hello_2('product')
        }}
      >
        Product
      </button>
    </div>
  )
}

export default HelloComponent

// onClick nhận vào 1 cái function Reference (hàm tham chiếu)

/*
 * - Các bước hàm này chạy:
 * - Bước 1: Chạy function HelloComponent
 *   + Nó sẽ tạo closure cho handle button react
 *   + Khi chạy đến hello('react') nó sẽ tạo ra closure (hello) {name: 'react'} => Môi trường này là
 *     môi trường riêng của listener đấy. 👍
 *
 *   + 👇 Tiếp tục khi chạy đến các button khác 👇
 *
 *    + Khi chạy đến hello('redux') nó sẽ tạo ra closure (hello) {name: 'redux'} => Môi trường này là
 *     môi trường riêng của listener đấy. 👍
 *
 *    + Khi chạy đến hello('redux') nó sẽ tạo ra closure (hello) {name: 'redux'} => Môi trường này là
 *     môi trường riêng của listener đấy. 👍
 *
 * - Sau 3 lần chạy nó chạy xong và nó chạy return component thì nó kết thúc lần chạy đầu tiên đối với
 *   function HelloComponent
 *
 * => Kết thúc quá trình chạy lần đầu với HelloComponent
 */
