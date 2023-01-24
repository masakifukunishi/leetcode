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

// Time complexity: O(n)
// Space complexity: O(1)
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle2 = (head) => {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) return true;
  }
  return false;
};
