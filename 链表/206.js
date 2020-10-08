const listMethod = require('../common/list');
const { createList, printList } = listMethod;
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @description 迭代法翻转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList_1 = function(head) {
  if(!head || !head.next) return head;
  let prev = head, cur = prev.next;
  let temp = null;
  while(cur !== null) {
    temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  head.next = null;
  return prev;
};

/**
 * @description 递归法翻转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList_2 = function(head) {
  if(!head || !head.next) return head;
  const cur = head;
  const re_list = reverseList_2(cur.next);
  cur.next.next = cur;
  cur.next = null;
  return re_list;
};

const list = reverseList_2(createList([1, 2, 3, 4, 5]));
printList(list);