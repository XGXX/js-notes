function foo() {
    var a = b = 10;
    // 转成以下代码
    // var a = 10
    // b = 10
}
console.log(a);
console.log(b);