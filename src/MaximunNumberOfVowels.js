/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let maxCount = 0;
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < s.length - 1; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
    if (i >= k - 1) {
      maxCount = Math.max(maxCount, count);
      if (vowels.includes(s[i - k + 1])) {
        count--;
      }
    }
  }
  return maxCount;
};
// console.log(maxVowels("abciiidef", 3)); //  3
console.log(maxVowels("tryhard", 4)); //  1
