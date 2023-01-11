// Time complexity: O(n2)
// Space complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashmap[complement] !== undefined) {
      return [i, hashmap[complement]];
    }
    hashmap[nums[i]] = i;
  }
}

// console.log(twoSum([2, 7, 11, 15], 9));
