const { joinStr } = require('../common/string');

/**
 * @description 字符串解码-辅助栈解法
 * @param {string} s
 * @return {string}
 */
var decodeString_1 = function(s) {
  let res = '', sum = ''; // 当前拼接字符串， 当前数字总和
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if(s[i] >= '0' && s[i] <= '9') {
      sum += s[i];
    }
    else if(s[i] === '[') {
      stack.push([ res, Number(sum) ]);
      res = ''; sum = '';
    }
    else if(s[i] === ']') {
      const [last_res, cur_sum] = stack.pop();
      res = last_res + joinStr(res, cur_sum);
    }
    else  
      res += s[i];
  }
  return res;
};


/**
 * @description 字符串解码-递归解法
 * @param {string} s
 * @return {string}
 */
var decodeString_2 = function(s) {
  return dfs(s, 0);
};

/**
 * @description 从s_index开始遍历，遇到 ']' 停止递归，返回字符串
 * @param {string} s 
 * @param {number} s_index 
 */
var dfs = function(s, s_index) {
  let res = '', sum = ''; // 当前拼接字符串， 当前数字总和
  for (let i = s_index; i < s.length; i++) {
    if(s[i] >= '0' && s[i] <= '9') {
      sum += s[i];
    }
    else if(s[i] === '[') {
      const [next_i, temp] = dfs(s, i + 1);
      res += joinStr(temp, Number(sum));
      sum = '';
      i = next_i;
    }
    else if(s[i] === ']') {
      console.log('---',res);
      return [i, res];
    }
    else
      res += s[i];
  }
  return res;
}

console.log(decodeString_2('3[a2[c]]'));