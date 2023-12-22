const customer = {
  getBill: function (product, price) {
    console.log(`${this.name} - ${this.country} - ${product} - ${price}`)
  }
}

const personOne = {
  name: 'Jon Doe',
  country: 'America'
}

const personTwo = {
  name: 'Jane',
  country: 'England'
}

customer.getBill.call(personOne, 'Iphone', 1000)
customer.getBill.call(personTwo, 'Oppo', 1900)

console.log('------------------------------')

customer.getBill.apply(personOne, ['Iphone', 1000])
customer.getBill.apply(personTwo, ['Oppo', 2200])
