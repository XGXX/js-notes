// find: 查找
var nums = [1,2,3];
var result = nums.find(item => item === 1);
console.log(result);

var friends = [
    {
        name:'xgx',
        age:18
    },
    {
        name:'curry',
        age:18
    }
]
var ret = friends.find(item => item.name === 'xgx')
var retIndex = friends.findIndex(item => item.name === 'curry')
console.log(ret,retIndex)