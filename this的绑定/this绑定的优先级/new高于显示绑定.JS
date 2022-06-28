// new不可与apply、call一起使用
// new优先级高于bind
function foo() {
  console.log(this);
}

var bar = foo.bind("aaa");

var obj = new bar();
