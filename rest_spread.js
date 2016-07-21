/*
=>Rest parameters are used in scenarios where the number of arguments to 
be passed to a function is decided only in run time.
=>These parameters are called Rest parameters and they are represented 
using the Spread(…) operator.
=>The parameters are evaluated as an array in the receiving function.
*/

//CASE-1

// If we had to pass an arbitary number of parameters in ES-5
var add = function(a,b){     
    console.log(a+(b.reduce((x,y)=>{return x+y}))); 
}; 
add(1,[2,3,4]);

// Same case in ES-6 using REST parameters.
// REST parameters are represented using the spread operator
var add = function(a,...b){     
    console.log(a+(b.reduce((x,y)=>{return x+y}))); 
}; 
add(1,2,3,4);

//This allows different kind of method calls.
var add = function(a,x,...b){       
console.log(a+(b.reduce((x,y)=>{return x+y}))); 
};  
add(1,2,3,4);//a = 1    //x = 2     //b=[3,4]  
add(1,2,3,4,5,6);//a = 1    //x = 2     //b=[3,4,5,6]

//CASE-2

//Allows creation of arrays within arrays:


var b = [4,5,6,7]
var a= [1,2,3,...b,9]
a = [1, 2, 3, 4, 5, 6, 7, 9]


// CASE-3
//Allows Concatenation of arrays:

//ES-5
var a = [1,2,3,4]
var b = [5,6,7,8] 
a.push(b)//[1,2,3,4,[5,6,7,8]]
a.concat(b);
Array.prototype.push.apply(a,b);


//ES-6
a.push(...b)
  



