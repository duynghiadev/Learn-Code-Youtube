// type other when use async await by using anonymous function --> That way it seem IIFE in JavaScript

const p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve success')
    }, 1000)
  })
}

;(async () => {
  try {
    const value = await p()
    console.log('value resolve:', value)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Finish!')
  }
  console.log('Run final')
})()
