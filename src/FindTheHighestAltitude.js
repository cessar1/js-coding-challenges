/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const altitudes = [0];
  let currentAltitude = 0;
  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    altitudes.push(currentAltitude);
  }console.log(altitudes)
  return Math.max(...altitudes);
};
console.log(largestAltitude([1, 8, -7, 3])); // 4
console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
