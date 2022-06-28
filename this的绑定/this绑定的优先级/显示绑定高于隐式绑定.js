var obj = {
  name: "obj",
  foo: function () {
    console.log(this);
  },
};

// obj.foo()

// 1.call/apply的显式绑定高于隐式绑定
obj.foo.apply("abc");
obj.foo.call("abc");
// 2.bind与隐式绑定
var obj2 = {
  name: "obj",
  foo: foo.bind("aaa"),
};

obj.foo();
