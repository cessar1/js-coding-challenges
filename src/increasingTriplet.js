/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= min1) {
      min1 = nums[i];
    } else if (nums[i] <= min2) {
      min2 = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); //true

console.log(increasingTriplet([1, 2, 3, 4, 5])); //true
console.log(increasingTriplet([9, 8, 7, 6, 5])); //false
