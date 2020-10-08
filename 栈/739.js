/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = [];
  const days = new Array(T.length).fill(0);
  T.forEach((t, i) => {
    while( stack.length && t > T[stack[stack.length - 1]]) {
      const cur = stack.pop();
      days[cur] = i - cur; 
    }
    stack.push(i);
  })
  return days;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))