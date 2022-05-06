//案例一
function foo() {
    console.log(this);//Window对象
}
foo()

//案例二
function foo1() {
    console.log(this);//Window对象
}

function foo2() {
    foo1();
}

function foo3() {
    foo2();
}

foo3()

//案例三
function func(demo) {
    demo()
}

var bar = {
    name:'xgx',
    func: function() {
        console.log(this);//Window
    }
}

func(bar.func);

