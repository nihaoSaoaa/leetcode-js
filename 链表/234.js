const listMethod = require('../common');
const { createList } = listMethod;
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// 回文链表
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if(!head || !head.next) return true;
  let slow = head, fast = head.next, pre = null;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  while(slow) {
    let p = slow.next;
    slow.next = pre;
    pre = slow;
    slow = p;
  }
  while(head && pre) {
    if(head.val !== pre.val) return false;
    head = head.next;
    pre = pre.next;
  }
  return true;
};

const l1 = createList([1, 2, 2, 1]);
const l2 = createList([1, 2, 3, 2, 1]);
const l3 = createList([1, 2]);

console.log(isPalindrome(l1), isPalindrome(l2), isPalindrome(l3));