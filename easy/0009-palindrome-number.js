// Follow up: Could you solve it without converting the integer to a string?

// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome1 = (x) => {
  const stringX = String(x);
  let reversed = "";
  for (let i = stringX.length - 1; i >= 0; i--) {
    reversed += stringX[i];
  }
  return reversed === stringX;
};

// Time complexity: O(log10(n))
// Space complexity: O(n)
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome2 = (x) => {
  if (x < 0) return false;
  let number = x;
  let reversed = 0;
  while (number > 0) {
    reversed = reversed * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  return x === reversed;
};
console.log(isPalindrome1(121));
