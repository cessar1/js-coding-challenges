function computeFactorial(num) {
  if (num === 0) {
    return 1;
  }
  var result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(computeFactorial(4));

function recursiveFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

function wrapperFnLoop(start, end) {
  function recurse(i) {
    console.log(`looping form ${i} until ${end}`);

    if (i < end) {
      recurse(i + 1);
    }
  }
  recurse(start);
}

function memoFnLoop(i, end) {
  console.log(`looping form ${i} until ${end}`);
  if(i < end){
    memoFnLoop(i + 1, end);
  }
}
// console.log(recursiveFactorial(0));
// console.log(recursiveFactorial(4));
console.log(wrapperFnLoop(1, 10));
