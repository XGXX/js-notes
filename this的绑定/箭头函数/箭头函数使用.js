function bar(num1, num2, num3) {}

(num1, num2, num3) => {};

// 高阶函数使用时可以传入箭头函数
var nums = [1, 2, 3, 4];
nums.forEach((item, index, arr) => {});

// 箭头函数常见的简写
// 简写一：如果参数只有一个，（）可以省略
nums.forEach((item) => {
  console.log(item);
});
// 简写二：如果函数执行体只有一行代码，{}可以省略
nums.forEach((item) => console.log(item));
var newNums = nums.filter((item) => item % 2 === 0);
console.log(newNums);

// filter/map/reduce
var result = nums
  .filter((item) => item % 2 === 0)
  .map((item) => item * 100)
  .reduce((preValue, item) => preValue + item);
console.log(result);

// 简写三：如果一个箭头函数，只有一行代码，并且返回一个对象，如何简写？
var arr = [{ name: "xgx" }, { name: "xl" }, { name: "xgz" }];
var newarr = arr.map((item) => ({ name: item.name.toUpperCase() }));
console.log(newarr);
