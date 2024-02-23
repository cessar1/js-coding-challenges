/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const stringArr = s.split('')
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!vowels.includes(s[left])) {
      left++;
    } else if (!vowels.includes(s[right])) {
      right--;
    } else {
      [stringArr[left], stringArr[right]] = [stringArr[right], stringArr[left]];
      left++;
      right--;
    }
  }
  return stringArr.join('')
};

console.log(reverseVowels("hello")); // Output: "holle"</s>





