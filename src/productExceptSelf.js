/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  const len = nums.length;
  const result = new Array(len);
  let left = 1;
  for (let i = 0; i < len; i++) {
    result[i] = left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  return result;
};

console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]</s>