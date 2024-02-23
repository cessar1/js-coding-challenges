/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  let zeroIndex = 0; // Pointer to keep track of the position where the next non-zero element should be placed

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
      // If the current element is non-zero
      if (nums[i] !== 0) {
          // Swap the current element with the element at zeroIndex
          [nums[i], nums[zeroIndex]] = [nums[zeroIndex], nums[i]];
          zeroIndex++; // Move zeroIndex to the right
      }
  }
};

const arr =  [0,1,0,3,12];
moveZeroes(arr)
console.log('Output:', arr);


// const result = moveZeroes([0, 1, 0, 3, 12]);
// console.log(result); // Expected [1,3,12,0,0]


