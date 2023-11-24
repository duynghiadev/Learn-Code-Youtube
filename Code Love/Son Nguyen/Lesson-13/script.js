let n = 2

// lặp 10 lần từ 0 đến 9
// bước nhảy là i++
for (let i = 0; i < 10; i++) {
  document.write(i + '<br/>')
}

document.write('<h4>----</h4>')

for (let i = 9; i >= 0; i--) {
  document.write(i + '<br/>')
}

document.write('<h4>----</h4>')

for (let i = 9; i >= 0; i -= n) {
  document.write(i + '<br/>')
}

for (let a = 0; a <= 9; a++) {
  for (let j = 0; j <= 9; j++) {
    document.write('>> [' + a + '][' + j + '] <<')
    console.log('>> [' + a + '][' + j + '] <<')
  }
  //   xuống hàng
  document.write('<br/>')
}

// kí hiệu +a+ có nghĩa là biến a. Vậy thôi👍 (+a+ = a)
