/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea2 = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const minH = Math.min(height[left], height[right]);

    if (max < (right - left) * minH) {
      max = (right - left) * minH;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let minHeight = Math.min(height[left], height[right]);
    let currentArea = (right - left) * minHeight;
    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
