const listMethod = require('../common/list');
const { createList, printList } = listMethod;
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


/**
 * @description 合并两个升序链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let list = rear = new ListNode(0);
  while(l1 && l2) {
    if(l1.val <= l2.val) {
      rear.next = l1;
      l1 = l1.next;
    }else {
      rear.next = l2;
      l2 = l2.next;
    }
    rear = rear.next;
  }
  if(l1) rear.next = l1;
  if(l2) rear.next = l2;
  return list.next;
};

module.exports = mergeTwoLists;