/**
 * 有效括号
 * 使用栈 push pop
 * 时间复杂度：O(n)，其中 n 是字符串 ss的长度。
 * 空间复杂度：O(n +∣Σ∣)，其中 ∣Σ∣表示字符集，本题中字符串只包含 6 种括号，∣Σ∣=6。
 * 栈中的字符数量为 O(n)，而哈希表使用的空间为 O(∣Σ∣)，相加即可得到总空间复杂度。
 */

 const isValid = function(s) {
   const len = s.length;
   if(len % 2 === 1) { // 奇数个字符直接返回false
     return false;
   }
   const pairs = new Map([
     [')', '('],
     ['}', '{'],
     [']', '[']
   ]);
   const stack = [];
   for(let char of s) { // foreEach无法使用return中断
    if(pairs.has(char)) {
      if(!stack.length || stack[stack.length -1] !== pairs.get(char)) {
        return false;
      }
      stack.pop();
    }else {
      stack.push(char);
    }
   }
   return !stack.length;
 }

console.log((isValid('{{')))