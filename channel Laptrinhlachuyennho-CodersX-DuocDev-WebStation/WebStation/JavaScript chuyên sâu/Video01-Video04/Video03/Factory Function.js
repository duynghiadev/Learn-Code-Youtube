// ========================================
console.log('='.repeat(40))
console.log('Factory Function')
// ========================================
/**
 * Factory Function
 */
function Factory(name, age) {
  // Private variable to store a value
  let private = 100

  // Function to return the name prefixed with 'Ten: '
  function ten() {
    return 'Ten: ' + name
  }

  // Function to return the age prefixed with 'Tuoi: '
  function tuoi() {
    return 'Tuoi: ' + age
  }

  // Returning an object with public methods and access to the private variable
  return {
    ten: ten,
    tuoi: tuoi,
    data: private // Access to the private variable
  }
}

const mot = Factory('duynghiadev', '22')
console.log('mot.ten():', mot.ten())
console.log('mot.tuoi():', mot.tuoi())

const hai = Factory('Ronaldo', 40)
console.log('\nhai.ten():', hai.ten())
console.log('hai.tuoi():', hai.tuoi())
console.log('hai.data:', hai.data)
