/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies1 = function (candies, extraCandies) {
  const result = [];
  const maxCandyCount = Math.max(...candies);
  for (let candie of candies) {
    if (candie + extraCandies > maxCandyCount) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

var kidsWithCandies = function (candies, extraCandies) {
  const maxCandyCount = Math.max(...candies);
  return candies.map((candie) => candie + extraCandies >= maxCandyCount);
};
console.log(kidsWithCandies([1,2, 3, 5], 3)); // [false, true, false]</s>

// modulo de un numero en js?
