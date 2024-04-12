# This is code in article:

[Link Article](https://engrmuhammadusman108.medium.com/currying-functional-programming-in-js-react-e8424d6fef90)

---

# Tóm tắt bài viết trên và lấy code chạy code cho dễ hiểu về kiến thức này (Currying in JavaScript)

Sure, I'll split the provided article into smaller sections for clarity and ease of understanding.

---

## Introduction to Currying in Functional Programming:

Currying is a functional programming technique that transforms a function with multiple arguments
into a series of functions, each taking a single argument. It's a versatile tool not limited to
JavaScript, applicable in any language supporting functional programming. Here's why it's
recommended:

1. Avoiding Repetition: Helps in avoiding passing the same variable multiple times.
2. Modularity: Divides functions into smaller ones, promoting purity and reducing errors.
3. Higher-Order Functions: Central to functional programming.
4. Readability: Personal preference, but it often improves code readability.

---

## Example of Currying - Addition of Three Numbers:

```js
function addition(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}

let additionByOne = addition(1);
let additionByTwo = additionByOne(2);
let additionByThree = additionByTwo(3);

console.log(additionByThree); // 6
```

---

## Arrow Function Transformation:

```js
let addition = x => y => z => x + y + z;

// or

let addition = (x) => (y) => (z) => {
  x + y + z;
}

addition(1)(2)(3)
```

---

## Practical Example in React Application:

**Requirement:**

Build a React application with three text boxes for name, address, and email. Display the input
dynamically on labels.

---

## Technical Transformation in React:

```js
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  }
  const handleAddress = (event) => {
    setAddress(event.target.value);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  return (
    <>
      <input value={name} onChange={handleName} placeholder='Enter Name'/>
      <input value={address} onChange={handleAddress} placeholder='Enter Address'/>
      <input value={email} onChange={handleEmail} placeholder='Enter Email'/>
      <br/>
      <label>Name : {name}</label>
      <br/>
      <label>Address : {address}</label>
      <br/>
      <label>Email : {email}</label>
    </>
  );
}

export default App;
```

---

## Using Currying in React:

```js
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (setSate) => (event) => {
    setSate(event.target.value);
  }

  return (
    <>
      <input value={name} onChange={handleChange(setName)} placeholder='Enter Name'/>
      <input value={address} onChange={handleChange(setAddress)} placeholder='Enter Address'/>
      <input value={email} onChange={handleChange(setEmail)} placeholder='Enter Email'/>
      <br/>
      <label>Name : {name}</label>
      <br/>
      <label>Address : {address}</label>
      <br/>
      <label>Email : {email}</label>
    </>
  );
}

export default App;
```

---

Splitting the code in this manner should make it easier to understand the concepts and
implementations discussed in the article.
