// Higher Order Component
function withLogging(fn) {
  return function (...args) {
    console.log(`Function ${fn.name} is called with arguments:`, args);
    return fn(...args);
  };
}

// Component functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Usage
const loggedAdd = withLogging(add);
const loggedSubtract = withLogging(subtract);

console.log(loggedAdd(5, 3));
console.log(loggedSubtract(10, 7));
