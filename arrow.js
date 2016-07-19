/*
=>ES6 adds Lambda functions to Javascript
=>Lambda functions helps in making the code concise.
=>One doesn’t have to name throw away functions for example-callback functions.
*/

// Simple Map reduce in ES-5

var arr = [1,2,3,4,5];
var result = arr.map(
    function(a) {
        return a+1
    }).reduce(
        function(a,b){    
            return a+b
});
console.log(result);

//Using Arrow functions in ES-6

var arr = [1,2,3,4,5];
var result = arr.map((a)=>a+1).reduce((a,b)=>a+b);
console.log(result);
