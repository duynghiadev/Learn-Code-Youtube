function show() {
  if (document.getElementById('team').style.display == 'block') {
    document.getElementById('team').style.display = 'none'
    document.getElementById('showmore').innerHTML = 'SHOW MORE'
  } else {
    document.getElementById('team').style.display = 'block'
    document.getElementById('showmore').innerHTML = 'SHOW LESS'
  }
}