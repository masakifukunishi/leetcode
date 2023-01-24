// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal1 = (root) => {
  let res = [];
  helper(root);

  function helper(root) {
    if (root != null) {
      helper(root.left);
      res.push(root.val);
      helper(root.right);
    }
  }
  return res;
};

// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal2 = (root) => {
  let current = root;
  const stack = [];
  const res = [];
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    res.push(current.val);
    current = current.right;
  }
  return res;
};
