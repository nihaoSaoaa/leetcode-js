/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1. 标记法
var detectCycle = function(head) {
  var flag = 0;
  while(head && head.next) {
    if(head.flag) {
      return head.flag;
    }else {
      head.flag = flag++;
      head = head.next;
    }
  }
  return -1;
};

// 哈希表法
var detectCycle2 = function(head) {
  const map = new Map();
  let flag = 0;
  while(head) {
    if(map.get(head)) {
      return map.get(head);
    }else {
      map.set(head, flag++);
    }
  }
  return -1;
};


// 快慢指针法
var detectCycle3 = function(head) {
  
};








console.log(`tail connects to node index ${detectCycle2(head)}`);