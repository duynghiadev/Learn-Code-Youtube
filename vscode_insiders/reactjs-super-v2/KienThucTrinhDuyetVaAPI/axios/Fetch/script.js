fetch('https://reqres.in/api/users?page=2')
  .then((res) => {
    console.log(res)
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('Loi cmnr')
    }
  })
  .then((res) => {
    let html = ''
    res.data.forEach((item) => {
      html += `<div>${item.first_name} ${item.last_name}</div>`
    })
    document.getElementById('result').innerHTML = html
    console.log('chinh thuc:', res)
  })
  .catch((error) => {
    console.log(error)
  })
