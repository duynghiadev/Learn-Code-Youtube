var array = ["JavaScript", "Php", "Ruby"];

function logger(...rest) {
  for (var i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}
logger(...array);
