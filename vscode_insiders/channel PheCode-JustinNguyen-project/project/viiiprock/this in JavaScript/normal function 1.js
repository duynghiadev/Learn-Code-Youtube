function User(name, age) {
  this.name = name;
  this.age = age;
}

const me = new User("John", 27);
console.log("me:", me);
