 function bar() {
     console.log('bar');
 }

 function foo(a) {
    a();
 }

 foo(bar);