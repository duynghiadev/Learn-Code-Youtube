let year = 2023

function getDate(month, day) {
  return `${this.year}-${month}-${day}`
}

const obj = {
  year: 2024
}

console.log(getDate.call(null, 3, 8))
console.log(getDate.call(obj, 3, 8))
console.log(getDate.apply(obj, [3, 8]))
console.log(getDate.bind(obj)(3, 8))
