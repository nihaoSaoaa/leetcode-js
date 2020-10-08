
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// 优先级队列，即（最大/最小）堆
class Heap {
  /**
   * 堆构造函数
   * @param {(val: number | ListNode, val: number | ListNode ) => boolean} compare 比较函数
   * @param {Array<number | ListNode>} data 数据集合
   * @param {function} cons 若数据为对象，传入的构造函数
   * @param {0 | 1} type 0最小堆 1最大堆，默认最小堆
   */
  constructor(compare, data, cons = null, type = 0) {
    data = data.filter(val => val !== null);
    this.data = (type === 0) ? 
      [(cons !== null )? new cons(-10001): -10001 ].concat(data) : 
      [(cons !== null )? new cons(10001): 10001].concat(data); 
    this.size = data.length;
    this.compare = compare;
    this.type = type;
    this.buildHeap();
  }

  buildHeap() {
    for(let i = parseInt(this.size / 2); i > 0; i--) {
      this.perDown(i);
    }
  }

  /**
   * 调整部分堆
   * @param {number} i  根坐标
   */
  perDown(i) {
    let parent = i, child;
    const temp = this.data[parent];
    while(parent * 2 <= this.size) {
      child = parent * 2;
      if(child != this.size && this.compare(this.data[child + 1], this.data[child]))
        child ++;
      if(this.compare(this.data[child], temp))
        this.data[parent] = this.data[child];
      else 
        break;
      parent = child;
    }
    this.data[parent] = temp;
  }


  /**
   * 添加一个链表
   * @param {ListNode | number} list 
   */
  insert(list) {
    let i =  ++this.size;
    while(this.compare(list, this.data[Math.floor(i / 2)])) {
      const parent = Math.floor(i / 2);
      this.data[i] = this.data[parent];
      i = parent;
    }
    this.data[i] = list;
  }

  del_min() {
    let parent = 1,child;
    const min_data = this.data[1];
    const temp = this.data[this.size--];
    while(parent * 2 <= this.size) {
      child = parent * 2;
      if(child != this.size && this.compare(this.data[child + 1], this.data[child]))
        child ++;
      if(this.compare(this.data[child], temp))
        this.data[parent] = this.data[child];
      else 
        break;
      parent = child;
    }
    this.data[parent] = temp;
    return min_data;
  }

  is_empty() {
    return this.size === 0;
  }
}



// const H = new Heap((l1, l2) => {
//   return (l1.val - l2.val < 0) ? true: false;
// }, [-2, -1, 0, 2].map(val => {
//   return new ListNode(val);
// }), ListNode);
// H.data.forEach(list => {
//   console.log(list.val);
// }) 


module.exports = Heap;
