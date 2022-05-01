// forEach: 迭代,无返回值，基本数据类型普通方法无法改变数组元素值，引用数据类型可以
var nums = [1,2,3];
nums.forEach((item,index) => nums[index] = item * 10 );
console.log(nums)