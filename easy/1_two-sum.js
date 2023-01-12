// Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?

// Time complexity: O(n^2)
// Space complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hash[complement] !== undefined) {
      return [i, hash[complement]];
    }
    hash[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
