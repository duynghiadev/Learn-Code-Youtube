const ongdev = {
  name: 'Nghia',
  age: 20,
  address: 'Da Nang'
}

function display({ name, age, address, job }) {
  console.log(name)
  console.log(age)
  console.log(address)
  console.log(job)
}

// destructuring
const ongdev1 = {
  ...ongdev,
  name: 'Duy',
  address: 'Gia Lai',
  job: 'Hacker'
}

display(ongdev)
display(ongdev1)
