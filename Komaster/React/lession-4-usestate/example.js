const greeting = {
  title: 'Hello world',
  color: 'aqua'
}

console.log('greeting:', greeting)
console.log('new greeting:', { ...greeting, ...{ color: 'red' } })

console.log('=============================')

const setGreeting = (newState) => {
  const { color } = greeting
  const { color: newColor } = newState

  if (color !== newColor) {
    console.log('color-1:', color)
    console.log('newColor-1:', newColor)
    console.log('re-render view')
    return
  }

  console.log('old Color:', color)
  console.log('new Color:', newColor)
  console.log('nothing changed')
}

console.log('greeting after:', { ...greeting })
console.log('color after:', { color: 'red' })
console.log('=============================')

setGreeting({ ...greeting, ...{ color: 'red' } })
