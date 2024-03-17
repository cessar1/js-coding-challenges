/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  const notInNums2 = [...nums1Set].filter((num) => !nums2Set.has(num));
  const notInNums1 = [...nums2Set].filter((num) => !nums1Set.has(num));

  return [notInNums2, notInNums1];
};

//que son las expresiones en react js
