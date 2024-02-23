/**
 * @param {character[]} chars
 * @return {number}
 */

/**
 * Compresses a character array by replacing consecutive identical characters with the character followed by the count of the character.
 * @param {character[]} chars - The character array to compress.
 * @return {number} - The length of the compressed character array.
 */
var compress = function (chars) {
  const compress = [];
  let count = 1;
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      count++;
    } else {
      compress.push(chars[i - 1]);
      if (count > 1) {
        if (count < 10) {
          compress.push(count);
        } else {
          while (count) {
            compress.push(parseInt(count / 10));
            count = Math.floor(count / 10);
          }
        }
      }
      count = 1;
    }
  }

  return compress.length;
};

var compress3 = function (chars) {
  let s = "";
  let group = chars[0];
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === group[0]) {
      group += chars[i];
      console.log(`group[0] ${group}`);
    } else {
      s = group.length > 1 ? s + group[0] + String(group.length) : s + group[0];
      group = chars[i];
    }
  }
  s = group.length > 1 ? s + group[0] + String(group.length) : s + group[0];
  return s;
};
var compress2 = function (chars) {
  const charByCount = new Map();
  let result = "";
  for (let i = 0; i < chars.length; ++i) {
    // if (!charByCount.has(chars[i])) {
    //   charByCount.set(chars[i], 1);
    // } else {
    //   charByCount.set(chars[i], charByCount.get(chars[i]) + 1);
    // }
    charByCount.set(chars[i], (charByCount.get(chars[i]) || 0) + 1);
  }

  charByCount.forEach((value, key) => {
    result += key + value;
  });
  return result;
};
const result = compress(["a", "a", "b", "b", "c", "c", "c"]);
const result2 = compress(["a", "b", "b", "c", "c"]);

console.log(result);
console.log(result2);
