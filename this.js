/*
=> In JavaScript, Callback functions have their own scope.
=> In order to pass in the scope of the enclosing function into the callback function, 
the outer function’s scope was assigned to a variable and used in the inner function.
=> This created funny instructions like 
		var that = this;
=> Arrow functions, when used in the place of callback functions, don’t impose their scope, 
rather the scope of the enclosed function is passed to the “this” key word.
*/

//ES-5 “this” – issue

var fn = function() {    
this.a = 5;    
setTimeout(function(){        
    console.log('value of a = ' + this.a);    },0); 
}();

//output
//value of a = undefined

//ES-5 “this” – solution
var fn = function() {    
this.a = 5;    
var that = this;
setTimeout(function(){       
     console.log('value of a = ' + that.a );    },0); 
}();

//output
//value of a = 5

//ES-6 Arrow functions
var fn = function() {    
this.a = 5; 
setTimeout( ()=>{        
    console.log('value of a = ' + this.a );    },0); 
}();

//Output:
//value of a = 5




