/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (i >= k - 1) {
      // Once the window reaches size k
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= nums[i - k + 1]; // Slide the window by subtracting the element that is moving out
    }
  }

  return maxSum / k;
};
console.log(findMaxAverage([1, 12, -5, -6, 5, 0, 3], 4)); // 5.5
