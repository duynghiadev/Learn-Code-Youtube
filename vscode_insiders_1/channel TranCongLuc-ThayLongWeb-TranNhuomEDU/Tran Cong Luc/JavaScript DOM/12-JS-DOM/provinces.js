let listProvince = document.querySelectorAll('tbody tr td:nth-child(2) a')
let array = []

for (let index = 0; index < listProvince.length; index++) {
  array.push(listProvince[index].innerText)
  console.log('listProvince[index]:', listProvince[index])
}

console.log('listProvince:', listProvince)
console.log('array:', array)
