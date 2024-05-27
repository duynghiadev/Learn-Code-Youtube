// null, undefined

let x = undefined

function doSomething(x: string | null) {
  if (x) {
    console.log('Hello ' + x.toUpperCase())
  } else {
    console.log('Goodbye')
  }
}

doSomething('Duynghiadev')
