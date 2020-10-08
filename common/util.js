/**
 * 
 * @description 获取范围的整型随机数
 * @param {number} x 
 * @param {number} y
 * @returns {number} 
 */
function rand(x, y) {
  if(y < x) let t = x; x = y; y = t;
  return Math.floor(Math.random() * (y - x) + x);
}

module.exports = {
  rand,
}