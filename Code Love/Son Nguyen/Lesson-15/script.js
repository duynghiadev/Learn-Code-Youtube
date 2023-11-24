let i = 1
while (i < 1000) {
  document.write(i + ' - ')
  if (i % 9 === 0) {
    document.write('Vòng lặp bị dừng')
    break
  }
  i++
}
