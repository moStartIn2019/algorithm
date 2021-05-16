// 队列思想
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