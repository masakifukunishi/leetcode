// Time complexity: O(n^2)
// Space complexity: O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  let res = [];
  for (var i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) {
      res.push(nums2[i]);
      nums1.splice(nums1.indexOf(nums2[i]), 1);
    }
  }
  return res;
};
