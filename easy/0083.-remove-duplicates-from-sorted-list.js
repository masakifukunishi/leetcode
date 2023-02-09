// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  let current = head;
  while (current) {
    if (current.next && current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
