/**
 * @description 二叉树结点构造函数
 * @param {number} val 
 * @param {TreeNode | null} left 
 * @param {TreeNode | null} right 
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @description 通过数组构建链二叉树
 * @param {number|null[]} data
 * @returns {TreeNode} 
 */
function createTree(data) {
  const nodes = data.map(val => {
    if(val !== null) val = new TreeNode(val, null, null);
    return val;
  });
  const len = Math.floor(nodes.length / 2);
  for (let i = 0; i < len; i++) {
    const node = nodes[i],
      left = nodes[i * 2 + 1],
      right = nodes[i * 2 + 2];
    if(node !== null) {
      if( left !== null) node.left = left;
      if(right !== null) node.right = right;
    }
  }
  return nodes[0];
}

/**
 * @description 树的层次遍历
 * @param {TreeNode} root 
 * @param {(TNode:TreeNode)=>void} visit
 */
function levelOrder(root, visit) {
  const queue = [];
  queue.push(root);
  while(queue.length !== 0) {
    const TNode = queue.shift();
    visit(TNode);
    if(TNode.left) queue.push(TNode.left);
    if(TNode.right) queue.push(TNode.right);
  }
}

module.exports = {
  createTree,
  levelOrder,
}