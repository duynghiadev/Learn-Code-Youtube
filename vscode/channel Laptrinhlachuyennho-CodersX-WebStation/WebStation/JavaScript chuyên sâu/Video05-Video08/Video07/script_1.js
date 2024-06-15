function mot(x) {
  x++
  setTimeout(() => {
    console.log(`setTimeout ${x}`)
  }, 0)
  hai(x)
}

function hai(y) {
  y++
  ba(y)
}

function ba(z) {
  z++
  console.log(`Đây là hàm ba: ${z}`)
}

mot(1)
