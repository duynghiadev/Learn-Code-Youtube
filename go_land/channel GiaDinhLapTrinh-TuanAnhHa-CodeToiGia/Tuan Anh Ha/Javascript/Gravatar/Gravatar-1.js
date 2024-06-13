const md5 = require('md5')

function getGravatarUrl(email, size) {
  // Tạo đường dẫn Gravatar dựa trên địa chỉ email và kích thước mong muốn
  const hash = md5(email.trim().toLowerCase())
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=${size}`

  return gravatarUrl
}

// Sử dụng hàm để lấy đường dẫn Gravatar cho một địa chỉ email cụ thể và kích thước avatar
const email = 'duynghia22302@gmail.com'
const avatarSize = 150
const gravatarUrl = getGravatarUrl(email, avatarSize)

console.log(gravatarUrl)
