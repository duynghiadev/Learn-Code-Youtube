// 1:
// const iPhone7 = {
//   // Thuộc tính - Property
//   name: "iphone",
//   color: "Pink",
//   weight: 300,
//   // Phương thức - Method
//   takePhoto() {
//     console.log(this);
//   },
//   objChild: {
//     name: "Child Object",
//     methodChild() {
//       console.log(this);
//     },
//   },
// };

// iPhone7.objChild.methodChild();

// 2:
// function Car(name, color, weight) {
//   this.name = name;
//   this.color = color;
//   this.weight = weight;
//   this.run = function () {
//     console.log("Running...", this);
//   };
// }

// const mercedesS450 = new Car("Mercedes S450", "Black", "450kg");
// console.log(mercedesS450.run());

// 3:
// const button = document.querySelector("button");
// button.onclick = function () {
//   console.log(this.innerText);
// };

// 4:
function Car(name, color) {
  this.name = name;
  this.color = color;
  this.run = function () {
    console.log(this);
  };
  Car.prototype.run = function () {
    // Context
    function test() {
      console.log(this);
    }
    test();
  };
}
const porsche = new Car("Porsche", "Black");
const mazda = new Car("Mazda", "Red");
console.log(porsche);
console.log(mazda);
console.log(porsche.run());
console.log(mazda.run());
