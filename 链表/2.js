
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createList(arr) {
  let list = rear = new ListNode();
  arr.forEach(val => {
    rear.next = new ListNode(val);
    rear = rear.next;
  })
  rear = null;
  list = list.next;
  return list;
}

function printList(list) {
  while(list) {
    console.log(list.val);
    list = list.next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p = l1, q = l2;
  let list = rear = new ListNode();
  let flag = false;
  while(p && q) {
    const sum = p.val + q.val + (flag ? 1 : 0);
    const val = sum % 10;
    rear.next = new ListNode(val);
    rear = rear.next;
    flag = (sum - val > 0) ?  true : false;
    p = p.next;
    q = q.next;
  }
  while(q) {
    if(flag) {
      if(q.val === 9) {
        rear.next = new ListNode(0);
      }else {
        rear.next = new ListNode(q.val + 1);
        flag = false;
      }
    }else {
      rear.next = new ListNode(q.val);
    }
    rear = rear.next;
    q = q.next;
  }
  while(p) {
    if(flag) {
      if(p.val == 9) {
        rear.next = new ListNode(0);
      }else {
        rear.next = new ListNode(p.val + 1);
        flag = false;
      }
    }else {
      rear.next = new ListNode(p.val);
    }
    rear = rear.next;
    p = p.next;
  }
  if(flag) rear.next = new ListNode(1);
  rear = null;
  list = list.next;
  return list;
};

const l1 =  createList([1])
const l2 =  createList([9, 9, 9, 9, 9])
printList(addTwoNumbers(l1, l2));


