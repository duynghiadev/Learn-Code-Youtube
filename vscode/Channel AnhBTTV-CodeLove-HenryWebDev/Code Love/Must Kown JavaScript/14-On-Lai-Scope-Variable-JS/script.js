// var, let, const
// let, const (ES6)

var name = 'duynghiadev'

function getName() {
  var name = 'ronaldo'
  getName_1()
  function getName_1() {
    var name = 'neymar'
    function getName_2() {
      console.log('local:', name)
    }
    getName_2()
  }
}

function getAge() {
  // cùng là tên biến nhưng đặt khác function vẫn được. 2 biến đó nó không có liên quan gì hết. Nhớ nhé
}

getName()
console.log('global:', name)
