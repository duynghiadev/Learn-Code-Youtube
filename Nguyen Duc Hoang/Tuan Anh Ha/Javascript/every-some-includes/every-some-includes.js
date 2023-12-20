const laptopBrands = ['Macbook', 'Lenovo', 'Dell', 'Hp']

const hasLaptop = laptopBrands.includes('Dell')
const hasLaptop_1 = laptopBrands.includes('Apple')
console.log('hasLaptop:', hasLaptop)
console.log('hasLaptop_1:', hasLaptop_1) // return Boolean

const age = [5, 13, 24]

const hasAdult = age.some((item) => item >= 18)
console.log('hasAdult:', hasAdult) // return Boolean

const allAdult = age.every((item) => item >= 18)
console.log('allAdult:', allAdult) // return Boolean
