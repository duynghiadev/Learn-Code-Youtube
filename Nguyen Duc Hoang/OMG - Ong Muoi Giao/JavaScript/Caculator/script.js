let element = document.getElementsByTagName('button')
let so1 = ''
let so2 = ''
let tt = ''
let kq = 0

for (let i = 0; i < element.length; i++) {
  element[i].addEventListener(
    'click',
    function (event) {
      let value = event.target.innerHTML

      switch (value) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          if (tt === '') {
            so1 += value
            document.getElementById('viewkq').value = so1
          } else {
            // If an operator is already selected, clear the input and start with the new number
            document.getElementById('viewkq').value = value
            so2 = value
          }
          break
        case '+':
        case '-':
        case 'x':
        case '/':
          if (so1 !== '' && so2 !== '') {
            switch (tt) {
              case '+':
                kq = Number(so1) + Number(so2)
                break
              case '-':
                kq = Number(so1) - Number(so2)
                break
              case 'x':
                kq = Number(so1) * Number(so2)
                break
              case '/':
                kq = Number(so1) / Number(so2)
                break
            }
            document.getElementById('viewkq').value = kq
            so1 = kq.toString()
            so2 = ''
          }
          tt = value
          break
        case '=':
          if (so1 !== '' && so2 !== '') {
            switch (tt) {
              case '+':
                kq = Number(so1) + Number(so2)
                break
              case '-':
                kq = Number(so1) - Number(so2)
                break
              case 'x':
                kq = Number(so1) * Number(so2)
                break
              case '/':
                kq = Number(so1) / Number(so2)
                break
            }
            document.getElementById('viewkq').value = kq
            so1 = kq.toString()
            so2 = ''
            tt = ''
          }
          break
        case 'C':
          so1 = ''
          so2 = ''
          tt = ''
          kq = 0
          document.getElementById('viewkq').value = ''
          break
        default:
          // Clear the input field and set the new value
          document.getElementById('viewkq').value = value
          so1 = value
          so2 = ''
          tt = ''
          kq = 0
          break
      }
    },
    false
  )
}
