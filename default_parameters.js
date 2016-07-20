/*
=> A feature that brings optional parameter support to Javascript.
=> The leading parameters cannot be optional parameters.
=> If the leading parameters are made optional, their value will be replaced.
=> The default parameters are evaluated only at run time unlike Python, where the function is evaluated only once.
=> Not supported by the current stable version of Node.js 
*/
//Default Parameters in ES-5

var addThree = function (a, b, c) {
    typeof a === 'undefined' ? a = 1 : a;
    typeof b === 'undefined' ? b = 2 : b;
    typeof c === 'undefined' ? c = 3 : c;
    console.log(a + b + c);
};

addThree();

//Default parameters in ES-6
var addThree = function(a= 1,b=2,c=3){     
console.log(a,b,c) 
};

 addThree();

//Evaluated Default parameters in ES-6
var a = 0;
var fn = function(){
return ++a;
};

var ff = function(a = fn()){
 console.log(a);
}

//Output:
//1
//2
