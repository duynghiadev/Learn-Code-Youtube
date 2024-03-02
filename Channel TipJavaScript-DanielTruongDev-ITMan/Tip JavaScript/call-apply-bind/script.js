const girl = {
  amount: 10,
  unit: 'USD'
}

function goShopping(item, quantity, price) {
  const totalCost = price * quantity
  if (this.amount < totalCost) {
    console.log('Not enought money to buy the product')
  } else {
    console.log(`Girl went shopping and bought ${quantity} ${item} for ${totalCost} ${this.unit}`)
  }
}

goShopping.call(girl, 'shoes', 2, 100)

// lam quen aboy
const boy = {
  amount: 100000,
  unit: 'USD'
}

goShopping.call(boy, 'shoes', 2, 100)

// goShopping.apply(boy, 'shoes', 2, 100) // error, since method apply must pass into a array ❌
goShopping.apply(boy, ['nike', 2, 100]) // correct ✅

console.log('-------------------------------')

console.log('bắt đầu xin tiền')
const boundShopping = goShopping.bind(boy)
console.log('Sau đó đi mua cái khác')

boundShopping('iPhone14', 3, 1000) // type code 1
boundShopping.bind(boy)('iPhone15', 2, 2000) // type code 2
