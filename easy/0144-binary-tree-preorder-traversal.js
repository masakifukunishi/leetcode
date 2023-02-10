// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const helper = (root, res) => {
  if (!root) return;
  res.push(root.val);
  helper(root.left, res);
  helper(root.right, res);
};

const preorderTraversal = (root) => {
  const res = [];
  helper(root, res);
  return res;
};
