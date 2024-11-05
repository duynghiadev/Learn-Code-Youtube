const button = document.querySelector('button')
let content = document.getElementById('status')
let result = document.getElementById('result')

function updateStatus(newstatus) {
  content.textContent = newstatus
}

function updateResult(newstatus) {
  result.textContent = newstatus
}

button.addEventListener('click', function () {
  doIt()
})

function doIt() {
  updateStatus('Chuẩn bị pha cà phê...')
  updateResult('Đang pha cà phê...')

  result.style.color = 'brown'
  result.style.fontSize = '15px'

  xayCaPhe()
    .then(function (xayxong) {
      return vatSua(xayxong)
    })
    .then(function (vatsuaxong) {
      return phaCaPhe(vatsuaxong)
    })
    .then(function (cafePhaXong) {
      console.log(cafePhaXong.result)
    })
    .then(function () {
      ketThuc()
    })
}

function xayCaPhe() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      updateStatus('Xây xong cà phê trong... 2 giây')
      resolve({
        cafe: ['Robusta', 'Arabica']
      })
    }, 2000)
  })
}

function vatSua(dataResolveMot) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      updateStatus('Đã lấy sữa và trộn với cà phê hết... 2 giây')
      resolve({
        newData: dataResolveMot.cafe[0] + ' + sữa ông thọ'
      })
    }, 2000)
  })
  return promise
}

function phaCaPhe(dataResolveHai) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      updateStatus('Đã pha xong cà phê trong... 3 giây')
      resolve({ result: dataResolveHai.newData + ' + pha bằng phin!' })
      console.log(': DONE')
    }, 3000)
  })
}

function ketThuc() {
  setTimeout(function () {
    console.log('Pha tiếp')
    updateResult('Pha xong, pha tiếp đê thanh niên...')
    result.style.color = 'red'
    result.style.fontSize = '25px'
  }, 3000)
}
