// reduce:累加
var nums = [1,2,3];
var total = nums.reduce(((preValue,item) => preValue + item),0)
console.log(total)