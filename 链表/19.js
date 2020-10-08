const listMethod = require('../common/list');
const { createList, printList } = listMethod;
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


/**
 * @description 删除链表的倒数第N个结点（双指针法）
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const preHead = new ListNode(0, head);
  let slow = fast = preHead;
  while(n--) fast = fast.next;
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  } 
  slow.next = slow.next.next;
  return preHead.next;
};

const list = createList([1, 2, 3, 4, 5]);
printList(removeNthFromEnd(list, 5));