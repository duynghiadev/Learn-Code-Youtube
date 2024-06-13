for (var i = 0; i < 3; i++) {
  console.log('i in for:🐥', i)
  setTimeout(() => {
    console.log('i in setTimeout:✅', i)
  }, 1)
}

console.log('♻♻♻♻♻♻♻♻♻♻♻♻')

for (let j = 0; j < 3; j++) {
  console.log('j in for:🐥', j)
  setTimeout(() => {
    console.log('j in setTimeout:✅', j)
  }, 1)
}
