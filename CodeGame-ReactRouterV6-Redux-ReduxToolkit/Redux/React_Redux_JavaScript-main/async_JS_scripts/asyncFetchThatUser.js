const API = 'https://randomuser.me/api/'

document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.card-img-top')
  const name = document.querySelector('.card-title')
  const email = document.querySelector('.card-text')

  const getUser = async () => {
    const res = await fetch(API)
    console.log(res)
    // const { img, name: res_name, email: res_email } = await res.json();
    // console.log(res_name, res_email)
    const { results } = await res.json()
    console.log(results[0])
    const res_picture = results[0].picture.large
    const res_name = results[0].name.first + ' ' + results[0].name.last
    const res_email = results[0].email
    console.log(res_name, res_email)
    console.log(res_picture)

    name.innerText = res_name
    email.innerText = res_email
    img.src = res_picture
  }

  getUser().catch((err) => console.log(err))
})
