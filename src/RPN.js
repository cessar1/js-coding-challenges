/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        default:
          stack.push(a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b));
      }
    }
  }
  return stack[0];
};

let tokens1 = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
let result = evalRPN(tokens1);
console.log(result);
