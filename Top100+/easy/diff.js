var diff = function (arr) {
  let set = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      set.delete(arr[i])
    } else {
      set.add(arr[i])
    }
  }
  return [...set]
}

var arr1 = [1, 2, 4, "1", 3, 2, 5]
console.log(arr1, diff(arr1))