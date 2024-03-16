// Sử dụng ES5

function Car(make, model) {
  // Biến private
  let _make = make
  let _model = model

  // Phương thức public
  this.getMake = function () {
    return _make
  }

  this.getModel = function () {
    return _model
  }

  this.setMake = function (newMake) {
    _make = newMake
  }

  this.setModel = function (newModel) {
    _model = newModel
  }
}

// Tạo một đối tượng Car
let myCar = new Car('Toyota', 'Camry')

// Truy cập thông tin bằng cách sử dụng phương thức public
console.log(myCar.getMake()) // Toyota
console.log(myCar.getModel()) // Camry

// Thay đổi thông tin bằng cách sử dụng phương thức public
myCar.setMake('Honda')
myCar.setModel('Accord')

// In ra thông tin sau khi thay đổi
console.log(myCar.getMake()) // Honda
console.log(myCar.getModel()) // Accord
