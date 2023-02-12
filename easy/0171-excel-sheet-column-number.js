// Time complexity: O(n)
// Space complexity: O(1)
/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = (columnTitle) => {
  let result = 0;
  for (let i = columnTitle.length - 1, k = 0; i >= 0; i--, k++) {
    result += (columnTitle.charCodeAt(i) - 64) * 26 ** k;
  }
  return result;
};
