const greeting = {
  title: 'Hello world',
  color: 'aqua'
}

console.log('greeting:', greeting)
console.log('new greeting:', { ...greeting, ...{ color: 'red' } })

// const setGreeting = (newState) => {
//   const { color } = greeting;
//   const { color: newColor } = newState;

//   if (color !== newColor) {
//     console.log('re-render view')
//     return;
//   }

//   console.log('old Color:', color)
//   console.log('new Color:', newColor)
//   console.log('nothing changed')

// }

// setGreeting({...greeting, ...{color: 'red'}});
