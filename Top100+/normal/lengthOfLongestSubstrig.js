/**
 * 找出无重复字符的最长子串的长度
 * 队列思想 push shift
 * @param {String} s
 */
var lengthOfLongestSubstring = function(s) {
  var res = 0,
    i = 0;
  var temp = [];
  while (i < s.length) {
    if (temp.indexOf(s.charAt(i)) === -1) {
      temp.push(s.charAt(i));
    } else {
      temp.shift();
      continue;
    }
    res = Math.max(res, temp.length);
    i++;
  }
  return res;
};

console.log(lengthOfLongestSubstring('adcvetrfcadfdfdfd'))