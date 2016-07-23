'use strict';
//Es-5

var PersonEs5 = function(firstName, lastName){    
    this.firstName = firstName;    
    this.lastName =lastName;
}
PersonEs5.prototype.fullName = function () {    
    return this.firstName.concat(this.lastName);
}
var p1 = new PersonEs5('first','last');
console.log(p1.fullName());

/*
=> Class keyword can be used to declare classes in ES-6
=> Instance variables can be declared within the constructor or they can 
    be declared with in the getters or setters or any methods.
    example: firstName and lastName
=> Instance methods need not be prefixed with function key word or they 
    dont have to be prefixed with "this.". It is added implicitly
    example: fullName
=> There is no support for static variables in ES6. How ever there are a 
    couple of work arounds
        * Add like ES5 after class declaration. Ex: StaticName1
        * Add a static getter. Ex: StaticName2
=> Static methods can be added by prefixing the static keyword.
    Ex:staticMethod
=> Computer Methods:
    This is nothing new to Javascript. see ex: computedMethod
*/
//ES-6
const computedMethod = 'concat'
class Person{    
constructor(firstName,lastName){        
this.firstName = firstName;        
this.lastName = lastName;    
}    
fullName() {        
return this.firstName.concat(this.lastName);    
}
get Name(){
    return this.firstName+this.lastName;
}
set Name(n){
    this.name=n;
}
static get StaticName2(){
    return 'StaticName2';
}
[computedMethod](){
    return this.firstName+this.lastName+' from computed';
}
static staticMethod(){
    return 'Static Method';
}
}
Person.StaticName1 = 'StaticName1';
var p1 = new Person('first','last');
console.log(p1.name);
p1.name = 'test';
console.log(p1.name);
console.log(Person.StaticName1);
console.log(Person.StaticName2);
console.log(p1[computedMethod]());
console.log(Person.staticMethod());


