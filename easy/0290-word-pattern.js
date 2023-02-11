// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  const map = {};
  const words = s.split(" ");
  for (let i = 0; i < pattern.length; i++) {
    if (map[pattern[i]] == undefined) {
      map[pattern[i]] = words[i];
    }
    if (map[pattern[i]] !== words[i]) {
      return false;
    }
  }
  return true;
};
