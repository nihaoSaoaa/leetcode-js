const listMethod = require('../common/list');
const Heap = require('../common/heap'); // 最小堆类
const  mergeTwoLists = require('./21');
const { createList, printList } = listMethod;
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


/**
 * @description 合并K个升序链表
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists_1 = function(lists) {
  let list = rear = new ListNode();
  const heap = new Heap(
    (l1, l2) => {
      return (l1.val - l2.val < 0);
    }, 
    lists, 
    ListNode
  );
  while(!heap.is_empty()) {
    let p = heap.del_min();
    rear.next = new ListNode(p.val);
    rear = rear.next;
    if(p.next) {
      heap.insert(p.next);
    }; 
  }
  rear = null;
  return list.next;
};

const lists = [
  createList([-1, 1]),
  createList([-3, 1,4]),
  createList([-2, -1, 0, 2])
]

const list = mergeKLists_1(lists);
printList(list);

