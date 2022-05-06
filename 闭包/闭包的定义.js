//   function foo() {
//       var a = 'foo';
//       function demo() {
//           console.log(a,'a');
//       }
//       return demo;
//   }

//   var fn = foo();
//   fn();

// for(var i = 0; i<10; i++){
//     (function(j){
//          setTimeout(function(){
//           console.log(j)
//       }, 1000) 
//     })(i)
//   }

var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();
data[1]();
data[2]();