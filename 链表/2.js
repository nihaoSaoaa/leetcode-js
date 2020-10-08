
/**
 * @description 两数之和
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p = l1, q = l2;
  let list = rear = new ListNode();
  let carry = false;
  while(p && q) {
    const sum = p.val + q.val + (carry ? 1 : 0);
    const val = sum % 10;
    rear.next = new ListNode(val);
    rear = rear.next;
    carry = (sum - val > 0) ?  true : false;
    p = p.next;
    q = q.next;
  }
  while(q) {
    if(carry) {
      if(q.val === 9) {
        rear.next = new ListNode(0);
      }else {
        rear.next = new ListNode(q.val + 1);
        carry = false;
      }
    }else {
      rear.next = new ListNode(q.val);
    }
    rear = rear.next;
    q = q.next;
  }
  while(p) {
    if(carry) {
      if(p.val == 9) {
        rear.next = new ListNode(0);
      }else {
        rear.next = new ListNode(p.val + 1);
        carry = false;
      }
    }else {
      rear.next = new ListNode(p.val);
    }
    rear = rear.next;
    p = p.next;
  }
  if(carry) rear.next = new ListNode(1);
  rear = null;
  list = list.next;
  return list;
};




