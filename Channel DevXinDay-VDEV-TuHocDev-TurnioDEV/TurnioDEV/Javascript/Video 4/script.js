document.addEventListener('DOMContentLoaded', () => {
  const name = document.getElementById('name')
  const mail = document.getElementById('mail')
  const phone = document.getElementById('phone')
  const content = document.getElementById('content')
  const submit = document.getElementById('submit')

  submit.addEventListener('click', () => {
    const data = {
      nameData: name.value,
      mailData: mail.value,
      phoneData: phone.value,
      contentData: content.value
    }

    if (data.nameData && data.mailData && data.phoneData) {
      postGoogle(data)
    } else {
      alert('Missing')
    }
  })
})

async function postGoogle(data) {
  const formUrl =
    'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfwIRMkzBuFiznnHlG5Y485hIioxrbPzFb7vNBhUSLDh7ssLw/formResponse'
  const postName = 'entry.286336783'
  const postEmail = 'entry.1861055986'
  const postPhone = 'entry.686047545'
  const postContent = 'entry.1085041520'

  const formData = new FormData()
  formData.append(postName, data.nameData)
  formData.append(postEmail, data.mailData)
  formData.append(postPhone, data.phoneData)
  formData.append(postContent, data.contentData)

  try {
    await fetch(formUrl, {
      method: 'POST',
      body: formData
    })
  } catch (error) {
    console.error('Lỗi')
  }
}
