/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  const hash = {};
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];
    if (hash[char] === undefined) {
      if (Object.values(hash).indexOf(word) !== -1) return false;
      hash[char] = word;
    }
    if (hash[char] !== word) {
      return false;
    }
  }
  return true;
};
