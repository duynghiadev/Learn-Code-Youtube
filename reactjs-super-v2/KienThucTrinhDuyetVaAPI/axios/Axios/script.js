// Method GET
axios
  .get('https://reqres.in/api/users?page=2')
  .then((res) => {
    console.log('GET --> response:', res)
  })
  .catch((error) => {
    console.warn(error)
  })

// Method POST
axios
  .post('https://reqres.in/api/users', {
    name: 'duynghiadev',
    job: 'IT'
  })
  .then((res) => {
    console.log('POST --> response:', res)
  })
  .catch((error) => {
    console.warn(error)
  })

// Method DELETE
axios
  .delete('https://reqres.in/api/users/2')
  .then((res) => {
    console.log('DELETE --> response:', res)
  })
  .catch((error) => {
    console.warn(error)
  })
