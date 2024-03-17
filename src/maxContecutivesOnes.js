/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let zerosCount = 0;
  let maxCount = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zerosCount++;
    }

    while (zerosCount > k) {
      if (nums[left] === 0) {
        zerosCount--;
      }
      left++;
    }
    maxCount = Math.max(maxCount, right - left + 1);
  }
  return maxCount;
};
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 0], 2));
