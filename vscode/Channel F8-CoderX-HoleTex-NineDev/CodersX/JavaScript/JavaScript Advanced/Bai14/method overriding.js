class CoffeeMachine {
  makeCoffee() {
    console.log("making coffee...");
  }
}

class SpecialCoffeeMachine extends CoffeeMachine {
  makeCoffee(callback) {
    console.log("Making coffee anh do something...");
    callback();
  }
}

const coffeeMachine = new SpecialCoffeeMachine();
coffeeMachine.makeCoffee(function () {
  console.log("Call the boss");
});
