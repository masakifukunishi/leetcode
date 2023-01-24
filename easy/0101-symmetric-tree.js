// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric1 = (root) => {
  const isMirror = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  };
  return isMirror(root, root);
};

// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric2 = (root) => {
  const queue1 = [root.left];
  const queue2 = [root.right];

  while (queue1.length > 0 || queue2.length > 0) {
    const dequeued1 = queue1.shift();
    const dequeued2 = queue2.shift();

    if (!dequeued1 && !dequeued2) continue;
    if (!dequeued1 || !dequeued2) return false;
    if (dequeued1.val !== dequeued2.val) return false;

    queue1.push(dequeued1.left);
    queue1.push(dequeued1.right);
    queue2.push(dequeued2.right);
    queue2.push(dequeued2.left);
  }
  return true;
};
