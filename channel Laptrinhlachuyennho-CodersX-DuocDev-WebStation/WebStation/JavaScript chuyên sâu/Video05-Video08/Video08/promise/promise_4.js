let data = {}

Promise.resolve(1)
  .then((firstData) => {
    console.log('firstData:', firstData)
    data.firstData = firstData
    return Update(firstData)
  })
  .then((secondData) => {
    console.log('secondData:', secondData)
    data.secondData = secondData
    return Update(secondData)
  })
  .then((thirdData) => {
    console.log('thirdData:', thirdData)
    data.thirdData = thirdData
    return Update(thirdData)
  })
  .then((fourData) => {
    console.log('fourData:', fourData)
    data.fourData = fourData
    return Update(fourData)
  })

const Update = (input) => {
  console.log('data:', data)
  return Promise.resolve(++input)
}
