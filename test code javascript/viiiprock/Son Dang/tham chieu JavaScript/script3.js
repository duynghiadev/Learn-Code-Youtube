let picture = {
  name: 'Mona Lisa',
  artist: 'Da Vinci',
  isAbstract: false
}

let copyOfPicture = picture
copyOfPicture.isAbstract = true
console.log(copyOfPicture === picture)
console.log(copyOfPicture)
console.log(picture)
