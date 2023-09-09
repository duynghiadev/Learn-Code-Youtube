class Person5 {
  private _age: number;
  public firstName: string;
  public lastName: string;

  constructor(_age: number, firstName: string, lastName: string) {
    this._age = _age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //getter
  get age() {
    return this._age;
  }

  //setter
  set age(age2: number) {
    if (age2 < 0 || age2 > 150) {
      throw Error("Invalid age");
    }
    this._age = age2;
  }
}

let person3 = new Person5(25, "Hoi Dan IT", "Eric");
let checkAge1 = person3.age; //getter

person3.age = 69; // setter
// person3.setAge(69) //setter
console.log(">>> check age: ", person3); //getter
// person3.age = 26;
