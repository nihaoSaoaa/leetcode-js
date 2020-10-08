/**
 * 拼接字符串
 * @param {string} s
 * @param {number} n
 * @returns {string} 
 */
function joinStr(s, n) {
  let res = '';
  while(n--) res+= s;
  return res;
}

module.exports = {
  joinStr,
}
