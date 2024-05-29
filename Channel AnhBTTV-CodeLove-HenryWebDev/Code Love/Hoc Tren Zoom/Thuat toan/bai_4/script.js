// in ra tất cả các hàng
for (let row = 1; row <= 10; row++) {
  let starItem = ''

  // số ngôi sao trong mỗi hàng bằng số hàng hiện tại
  for (let starCharacter = 1; starCharacter <= row; starCharacter++) {
    starItem += '*'
  }

  // ở đây starItem đã là số sao cần thiết cho hàng hiện tại
  starItem += '<br/>'
  document.write(starItem)
}
