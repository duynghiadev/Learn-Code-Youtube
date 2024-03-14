process.stdin.on('readable', function () {
  let chunk

  while ((chunk = this.read())) {
    console.log(`Received ${chunk.length} bytes of data`)
  }
})
