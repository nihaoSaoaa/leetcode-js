const listMethod = require('../common');
const { ListNode, createList, printList } = listMethod;

/**
 * @description 合并两个升序链表
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 * @returns {ListNode}
 */
function merge2List(l1, l2) {
  let list = rear = new ListNode();
  while(l1 && l2) {
    if(l1.val < l2.val) {
      rear.next = l1;
      rear = rear.next;
      l1 = l1.next;
    }else if(l1.val > l2.val) {
      rear.next = l2;
      rear = rear.next;
      l2 = l2.next;
    }else {
      rear.next = l1;
      rear = rear.next;
      l1 = l1.next;
      rear.next = l2;
      rear = rear.next;
      l2 = l2.next;
    }
  }
  if(l1) rear.next = l1;
  if(l2) rear.next = l2;
  return list.next;
}

/**
 * @description 排序链表
 * @param {new ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if(!head || !head.next) return head;
  let front = new ListNode(null, head);
  let slow = fast = front;
  while(fast && fast.next ) {
    fast = fast.next.next;
    slow = slow.next;
  }  
  let l1 = front.next;
  let l2 = slow.next;
  slow.next = null;
  l1 = sortList(l1);
  l2 = sortList(l2);
  return merge2List(l1, l2);
};

let list = createList([-1,5,3,4,0]);
list = sortList(list);
printList(list);