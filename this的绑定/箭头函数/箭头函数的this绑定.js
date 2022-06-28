// 1,测试箭头函数中this的指向
var foo = () => {
  console.log(this);
};

foo();
var obj = { foo: foo };
obj.foo();
foo.call("abc");
// 2,应用场景
// 箭头函数之前
var obj = {
  data: [],
  getData: function () {
    var that = this;
    setTimeout(function () {
      var result = [1, 2, 3, 4];
      that.data = result;
    }, 2000);
  },
};

obj.getData();

// 之后
var obj1 = {
  data: [],
  getData: function () {
    setTimeout(() => {
      var result = [1, 2, 3, 4];
      this.data = result;
    }, 2000);
  },
};
obj1.getData();
