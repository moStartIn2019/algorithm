// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]

// 暴力破解 时间复杂度O(N²)
var twoSum_NN = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
console.log(twoSum_NN([1, 2, 4], 6))

var twoSum_N = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      // key:nums[i], value:i => Map {nums[i],i, ...}
      map.set(nums[i], i)
    }
  }
}
console.log(twoSum_N([1, 2, 4], 6))