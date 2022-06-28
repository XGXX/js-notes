//案例一
function foo() {
  console.log(this); //obj对象
}

var obj = {
  name: "xgx",
  func: foo,
};

obj.func();

// 案例二
function foo1() {
  console.log(this); //obj1对象
}

var obj1 = {
  name: "xgx",
  func: foo1,
};

var obj2 = {
  name: "xgx",
  obj: obj1,
};

obj2.obj.func();

//案例三
function foo2() {
  console.log(this); //Window对象
}

var obj3 = {
  name: "xgx",
  func: foo2,
};

var bar = obj3.func;
bar();
