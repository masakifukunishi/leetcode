// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle1 = (head) => {
  const list = [];
  while (head) {
    if (list.includes(head.val)) return true;
    list.push(head.val);
    head = head.next;
  }
  return false;
};
