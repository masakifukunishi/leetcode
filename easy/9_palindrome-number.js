// Follow up: Could you solve it without converting the integer to a string?

// Time complexity: O(n)
// Space complexity: O(1)
/**
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = function (x) {
//   const stringX = String(x);
//   for (let i = 0; i < Math.floor(stringX.length - 1) / 2; i++) {
//     const front = stringX[i];
//     const back = stringX[stringX.length - 1 - i];
//     if (front !== back) {
//       return false;
//     }
//   }
//   return true;
// };

// Time complexity: O(log10(n))
// Space complexity: O(1)
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) return false;
  let number = x;
  let reversed = 0;
  while (number > 0) {
    reversed = reversed * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  return x === reversed;
};
console.log(isPalindrome(121));
