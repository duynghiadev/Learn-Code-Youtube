(function js(x) {
  const y = (j) => j * x;

  console.log(y(s())); // y(s()) có nghĩa là y(27) trả về 27 * 3 = 81

  function s() {
    return j();
  }

  function j() {
    return x ** x; // toán tử ** là luỹ thừa. Có nghĩa là 3**3 = 27
  }
})(3);
// Output: ?
