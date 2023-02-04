// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome1 = (head) => {
  let array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return array.toString() == reversedArray.toString();
};

// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome2 = (head) => {
  let straight = "";
  let reversed = "";
  while (head) {
    straight += head.val;
    reversed = head.val + reversed;
    head = head.next;
  }
  return straight === reversed;
};
