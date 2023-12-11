let listSelectNormal = document.querySelectorAll('select[name]')
console.log('listSelectNormal:', listSelectNormal)

let listSelect = Array.from(document.querySelectorAll('select[name]'))
console.log('listSelect convert to Array:', listSelect)

listSelect.forEach(function (select, index) {
  console.log('select and index:', select, index)
  let listOption = Array.from(select.querySelectorAll('option'))
  console.log('listOption:', listOption)
  console.log('listOption[0].innerText:', listOption[0].innerText)
  console.log('listOption[0].getAttribute():', listOption[0].getAttribute('value'))

  let divWrapper = document.createElement('div')
  divWrapper.classList.add('custom-select')

  let divSelected = document.createElement('div')
  divSelected.classList.add('selected')
  divSelected.setAttribute('value', listOption[0].getAttribute('value'))
  divSelected.innerText = listOption[0].innerText

  console.log('divWrapper:', divWrapper)
  console.log('divSelected:', divSelected)
})
