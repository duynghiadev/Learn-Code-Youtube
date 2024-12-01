const xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const res = JSON.parse(this.responseText)
    let html = ''
    res.data.forEach((item) => {
      html += `<div>${item.first_name} ${item.last_name}</div>`
    })
    document.getElementById('result').innerHTML = html
    console.log(res)
  }
}
xhttp.open('GET', 'https://reqres.in/api/users?page=2', true)
xhttp.send()
