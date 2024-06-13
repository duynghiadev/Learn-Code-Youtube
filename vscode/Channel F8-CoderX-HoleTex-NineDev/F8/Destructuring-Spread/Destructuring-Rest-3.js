// Đối với thằng Object
function logger([a, b, ...rest]) {
  console.log(a);
  console.log(b);
  console.log(rest);
}
logger([1, 2, 3, 4, 5, 6, 7, 8]);
/**
 * output:
 * 1
 * 2
 * [ 3, 4, 5, 6, 7, 8 ]
 */

// Đối với thằng Array
function logger1({ name, price, ...rest }) {
  console.log(name);
  console.log(price);
  console.log(rest);
}
logger1({
  name: "javaScript",
  price: 2000,
  description: "Description content",
});

/**
 * output:
 * javaScript
 * 2000
 * { description: 'Description content' }
 */
