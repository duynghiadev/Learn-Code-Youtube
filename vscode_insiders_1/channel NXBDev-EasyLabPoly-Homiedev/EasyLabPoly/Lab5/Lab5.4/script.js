// Hãy search thêm chat-GPT để modify đoạn code cho hoàn chỉnh hơn

let flag = true
let count = 0

function mark(index) {
  let button = document.getElementsByTagName('button')[index]
  button.innerText = flag ? 'X' : 'O'
  console.log('flag:', flag)
  button.setAttribute('disabled', 'true')
  button.style.backgroundColor = flag ? 'aqua' : 'yellow'
  flag = !flag
  count++
  if (count === 9) {
    alert('End game')
    location.reload()
  }
}
