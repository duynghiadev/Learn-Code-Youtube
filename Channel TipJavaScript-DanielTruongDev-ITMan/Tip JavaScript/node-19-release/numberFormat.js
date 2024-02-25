const number = 123456.789

const vietnam = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND'
})
console.log(vietnam.format(number)) //123.457 ₫ -> Việt nam đồng

console.log('----------------------------------')

const us = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})
console.log(us.format(number)) //$123,456.79-> Đô la Mỹ
