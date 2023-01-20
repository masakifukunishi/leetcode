// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) return 0;
  const left = 1 + maxDepth(root.left);
  const right = 1 + maxDepth(root.right);
  return Math.max(left, right);
};
