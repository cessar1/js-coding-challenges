/**
 * @param{string[]} ops- List of operations
 * @param {number} - Sum of scores after performing all operations
 *
 */
function calPoints(ops) {
  var result = null;
  let stack = [];

  for (let op of ops) {
    if (!isNaN(op)) {
      stack.push(Number(op));
      continue;
    }

    if (op === "+") {
      let a = stack[stack.length - 2];
      let b = stack[stack.length - 1];
      stack.push(a + b);
    } else if (op === "D") {
      let b = stack[stack.length - 1];
      stack.push(b * 2);
    } else {
      stack.pop();
    }
  }
  return stack.reduce((acc, val) => acc + val, 0);
}

const result = calPoints(["5", "2", "C", "D", "+"]);
console.log(result);
