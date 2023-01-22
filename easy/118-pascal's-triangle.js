/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  let res = [];
  for (i = 0; i < numRows; i++) {
    res.push([]);
    for (j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        res[i][j] = 1;
      } else {
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
      }
    }
  }
  return res;
};
