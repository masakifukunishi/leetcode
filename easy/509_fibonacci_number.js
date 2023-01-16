// Time complexity: O(2^n)
// Space complexity: O(n)
/**
 * @param {number} n
 * @return {number}
 */
// const fib = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
  let fibSequence = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence[n];
};

console.log(fib(8));
