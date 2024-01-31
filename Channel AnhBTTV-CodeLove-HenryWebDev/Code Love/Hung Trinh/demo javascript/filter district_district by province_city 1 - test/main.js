fetch('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1')
  .then((response) => response.json())
  .then((data) => {
    let provinces = data.data.data
    provinces.map(
      (value) =>
        (document.getElementById(
          'provinces'
        ).innerHTML += `<option value='${value.code}'>${value.name}</option>`)
    )
  })
  .catch((error) => {
    console.error('Lỗi khi gọi API:', error)
  })

function fetchDistricts(provincesID) {
  fetch(
    `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${provincesID}&limit=-1`
  )
    .then((response) => response.json())
    .then((data) => {
      let districts = data.data.data
      document.getElementById(
        'districts'
      ).innerHTML = `<option value=''>-- select districts --</option>`
      if (districts !== undefined) {
        districts.map(
          (value) =>
            (document.getElementById(
              'districts'
            ).innerHTML += `<option value='${value.code}'>${value.name}</option>`)
        )
      }
    })
    .catch((error) => {
      console.error('Lỗi khi gọi API:', error)
    })
}

function fetchWards(districtsID) {
  fetch(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${districtsID}&limit=-1`)
    .then((response) => response.json())
    .then((data) => {
      let wards = data.data.data
      document.getElementById('wards').innerHTML = `<option value=''>-- select wards --</option>`
      if (wards !== undefined) {
        wards.map(
          (value) =>
            (document.getElementById(
              'wards'
            ).innerHTML += `<option value='${value.code}'>${value.name}</option>`)
        )
      }
    })
    .catch((error) => {
      console.error('Lỗi khi gọi API:', error)
    })
}

function getProvinces(event) {
  fetchDistricts(event.target.value)
  document.getElementById('wards').innerHTML = `<option value=''>-- select wards --</option>`
}

function getDistricts(event) {
  fetchWards(event.target.value)
}
