var nums = [10,5,11,100,55];
// 筛选数组中的偶数
var newNums = nums.filter(item => item % 2 === 0);
// 函数与方法
// 函数function：独立的function，那么称之为函数
function fun() {}
// 方法methods：当我们的一个函数属于某一个对象时，我们称这个函数为这个对象的方法
var obj = {
    foo: function() {}
}
// filter:过滤，filter((当前值，当前下标，当前数组引用) => boolean)
console.log(newNums)