function updateClock() {
  let now = new Date()
  let h = now.getHours()
  let m = now.getMinutes()
  let s = now.getSeconds()

  // Add leading zeros if needed
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s

  document.getElementById('clock').innerText = h + ':' + m + ':' + s
}

setInterval(updateClock, 1000)
