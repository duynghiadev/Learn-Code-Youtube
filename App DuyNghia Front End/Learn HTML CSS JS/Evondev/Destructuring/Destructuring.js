// object students
const student = {
  name: "Evondev",
  age: 29,
  school: "Cao Thang Technical College",
  gender: "male",
  country: "Viet Nam",
  hometown: {
    city: "Ho Chi Minh",
  },
};

// ES6 Destructuring Methods
const {
  name,
  age,
  hometown: { city },
  ...other 
} = student;

console.log("name:", name);
console.log("age:", age);
console.log("other:", other);
console.log("city:", city);

// ...rest, ...props -> rest parameter
// Array Destructuring
// const [state, setState] = useState(0)

// Method ...rest là lấy những cái còn lại trong Array hoặc Object
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...other2] = numbers;
console.log("a:", a);
console.log("b:", b);
console.log("other2:", other2);
