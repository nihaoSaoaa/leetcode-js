/**
 * @description 有效的括号
 * @param {string} str
 * @return {boolean}
 */
var isValid = function(str) {
  // 保存长度减少计算次数
  const len = str.length;
  // 字符串长度为奇数
  if(len % 2 === 1) return false;
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  let r = true;
  const stack = [];
  str.split('').forEach(ch => {
    if(Object.keys(map).includes(ch)) {
      // 若字符为 ([{
      if(!stack.length || map[ch] !== stack[stack.length - 1]) {
        r = false;
        return r;
      }
      stack.pop();
    }else {
      stack.push(ch);
    }
  })
  return r && !stack.length;
}



console.log(isValid("(]"))