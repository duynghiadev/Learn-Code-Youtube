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

console.log('------------')

const { address: ad, city: ct, country: cn } = addressHome // destructuring

console.log(ad)
console.log(ct)
console.log(cn)

console.log('------------')

const addressCompany = ['Hai Chau', 'Da Nang', 'Viet Nam']

// const addressCom = addressCompany[0]
// const addressCity = addressCompany[1]
// const addressCoun = addressCompany[2]

const [addressCom, addressCity, addressCoun] = addressCompany

console.log(addressCom)
console.log(addressCity)
console.log(addressCoun)

console.log('------------')
