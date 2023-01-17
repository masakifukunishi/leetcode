// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};
console.log(isValid("(()())"));
