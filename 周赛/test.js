const { createTree } = require('../common/tree');

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
  const queue = [];
  let front = end = -1;
  queue.push([0, root]); ++front;
  while(front !== end) {
    const [ level, TNode ] = queue[++end];
    if(TNode.left) {
      queue.push([ level + 1, TNode.left ]);
      ++front;
    }
    if(TNode.right) {
      queue.push([level + 1, TNode.right]);
      ++front;
    }
  }
  for (let i = 0; i < queue.length; i++) {
    const [level , { val }] = queue[i];
    if(level % 2 === val % 2 ) return false;
    if(i !== 0 && queue[i-1][0] === level) {
      const preVal = queue[i-1][1].val;
      if(level % 2 === 0 && preVal >= val) return false;
      if(level % 2 === 1 && preVal <= val) return false;
    }
  }
  return true;
};

const root = createTree([11,8,6,1,3,9,11,30,20,18,16,12,10,4,2,17]);
console.log(isEvenOddTree(root));
