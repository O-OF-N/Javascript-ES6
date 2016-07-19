/*
=>Javascript had only one keyword to declare variables – The “var” keyword.
=>Scope of variables declared using “var” is “this”.
=>If a variable is declared with in a function, another variable with same 
name is declared inside a block, the variable declared inside the block overrides 
the function variable.
=> Absence of block scope is fixed with the “let” keyword 
*/

//ES-5
var scope = function() {    
var int = 10;    
if(int < 11){        
var int = 11;        
    console.log(`int value from inside ${int}`);  
 }   
console.log(`int value from outside ${int}`);
}();
//Output:
//int value from inside 11
//int value from outside 11


//ES-6
var scope = function() {    
var int = 10;    
if(int < 11){        
let int = 11;        
console.log(`int value from inside ${int}`);    
}    
console.log(`int value from outside ${int}`);
}();

//Output:
//int value from inside 11
//int value from outside 10
