/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const stack = [];
  const out = [];

  backtrack(0, 0, n, stack, out);

  return out;
};

const backtrack = function (opened, closed, n, stack, out) {
  if (opened === n && closed === n) {
    out.push(stack.join(""));
    return;
  }

  if (opened < n) {
    stack.push("(");
    backtrack(opened + 1, closed, n, stack, out);
    stack.pop();
  }

  if (closed < opened) {
    stack.push(")");
    backtrack(opened, closed + 1, n, stack, out);
    stack.pop();
  }
};
