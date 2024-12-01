true === true; // true
false === false; // true
1 === 1; // true
"a" === "a"; // true

// {} === {} // false
// [] === [] // false

function foo() {
  return 0;
}

function bar() {
  return 0;
}

foo === bar; // false
foo === foo; // true
