// IIFE

// 1:
// (function (message) {
//   console.log("Message: " + message);
// })("chao ban!");

// 2:
// let fullName = "duy nghia"
// ;(function(){
// })()

// 3:
// let i = 0;
// (function myFunc() {
//   i++;
//   console.log(i);
//   if (i < 10) myFunc();
// })();

// 4:
// ;(function(){
//   let fullName = "duynghia"
//   console.log(fullName)
// })()

// 6:
const app = (function(){
  // Private
  const cars = []

  return {
    get(index){
      return cars[index]
    },
    add(car){
      cars.push(car)
    },
    edit(car){
      cars[index] = car
    },
    delete(index){
      cars.splice(index, 1)
    }
  }
})()
