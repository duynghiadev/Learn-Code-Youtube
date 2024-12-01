// print Hello world down at terminal
process.stdout.write('Hello world')

// take a path source code
console.log(process.argv)

process.stdin.on('readable', function () {
  let chunk

  while ((chunk = this.read())) {
    // must have press enter word from keyboard --> then click ENTER --> then print console.log(...)
    console.log(`Received ${chunk.length} bytes of data`)
  }
})
