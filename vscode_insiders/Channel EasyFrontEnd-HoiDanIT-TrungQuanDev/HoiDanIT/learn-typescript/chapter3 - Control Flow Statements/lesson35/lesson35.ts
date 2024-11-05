class Person4 {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let person1 = new Person4(new Date(1990, 12, 25));
// person1.birthDate = new Date(1991, 12, 25); // Compile error
