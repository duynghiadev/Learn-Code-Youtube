function display() {
  let pro = document.getElementById('pro')
  let quantity = document.getElementById('qty').value

  let name = pro.innerText
  let price = pro.getAttribute('data-price')
  let amount = price * quantity

  document.getElementById('name').innerText = name
  document.getElementById('amount').innerText = amount
}
