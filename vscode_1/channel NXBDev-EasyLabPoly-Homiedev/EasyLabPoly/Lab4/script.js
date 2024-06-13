let newWindow
function openw() {
  newWindow = window.open(
    'https://www.google.com',
    'Google',
    'toolbar=yes',
    'scrollbars=yes',
    'resizable=yes',
    'width=400',
    'height=400',
    'top=0',
    'left=0'
  )
}

function closew() {
  if (newWindow) {
    newWindow.close()
  }
}

function checkw() {
  if (newWindow) {
    if (newWindow.closed) {
      alert('Đã đóng cửa sổ rồi')
    } else {
      alert('Cửa sổ đang mở')
    }
  }
}
