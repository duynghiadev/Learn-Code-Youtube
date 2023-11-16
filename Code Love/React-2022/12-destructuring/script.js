const addressHome = {
  address: 'duynghiadev',
  city: 'Da Nang',
  country: 'Viet Nam'
}

// const address = addressHome.address
// const city = addressHome.city
// const country = addressHome.country

const { address, city, country } = addressHome // destructuring

console.log(address)
console.log(city)
console.log(country)

const { address: ad, city: ct, country: cn } = addressHome // destructuring

console.log(ad)
console.log(ct)
console.log(cn)
