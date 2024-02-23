/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const minLength = Math.min(len1, len2);

  for (let i = minLength; i > 0; i--) {
    // Es necesario pero no suficiente que el tamaño del substring  sea dividor de el tamaño de str1 y str2
    if (len1 % i === 0 && len2 % i === 0) {
      const commonDivisor = str1.substring(0, i);

      // len1 / i, len2 / i = cantidad de veces que aparece el substring en str1 y en str2
      if (
        str1 === commonDivisor.repeat(len1 / i) &&
        str2 === commonDivisor.repeat(len2 / i)
      ) {
        return commonDivisor;
      }
    }
  }
  return '';
};

const result = gcdOfStrings("AABCBC", "ABC");
const result1 = gcdOfStrings("ABCABC", "ABC");
const result2 = gcdOfStrings("ABABAB", "ABAB");

console.log(result1);
