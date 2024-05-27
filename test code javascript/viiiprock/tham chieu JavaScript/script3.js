// Declare a variable 'picture' which holds a reference to an object (for demonstration, an example object is provided)
let picture = {
  isAbstract: false,
  title: "Landscape",
};

// Create another variable 'copyOfPicture' which is a pointer to the same memory location as 'picture'
let copyOfPicture = picture;

// Modify the 'isAbstract' property of the object through 'copyOfPicture'
copyOfPicture.isAbstract = true;

// Both 'picture' and 'copyOfPicture' now point to the same object, so 'isAbstract' is true for both
console.log("picture.isAbstract:", picture.isAbstract);
console.log("copyOfPicture.isAbstract:", copyOfPicture.isAbstract);
console.log("copyOfPicture === picture:", copyOfPicture === picture);
console.log("copyOfPicture:", copyOfPicture);
console.log("picture:", picture);
