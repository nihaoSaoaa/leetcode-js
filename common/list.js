/**链表测试相关函数 */
/**
 * @description 链表结点构造函数
 * @param {*} val 
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @description 数组转化为链表
 * @param {number[]} arr 
 * @returns {ListNode}
 */
function createList(arr) {
  let list = rear = new ListNode();
  arr.forEach(val => {
    rear.next = new ListNode(val);
    rear = rear.next;
  })
  rear = null;
  return list.next;
}

/**
 * 以数组的形式打印链表
 * @param {ListNode} list 
 */
function printList(list) {
  let str = '链表结果：';
  while(list) {
    str += ' -> ' + list.val;
    list = list.next;
  }
  console.log(str);
}

module.exports = {
  ListNode,
  createList,
  printList
}