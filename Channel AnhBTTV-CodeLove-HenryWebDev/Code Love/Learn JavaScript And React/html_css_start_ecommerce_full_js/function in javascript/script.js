// khai báo hàm
// scope global
let nameInfo = 'global'
function getStudent() {
  // scope function 1
  let nameInfo = 'getStudent'

  function nestedGetStudent() {
    // scope function 2
    let nameInfo = 'nestedGetStudent'
    nameInfo = 'cua toi ben trong'
    console.log(nameInfo)
  }
  nestedGetStudent()
  console.log(nameInfo)
}

// thực thi hàm
console.log(nameInfo)
getStudent()
