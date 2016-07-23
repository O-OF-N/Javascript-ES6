// ES-5
var PersonES5 = function(firstName, lastName){    
this.firstName = firstName;    
this.lastName = lastName;
}
PersonES5.prototype.fullName = function () {    
return this.firstName.concat(this.lastName);
}

var PersonWithMiddleNameES5 = function(firstName,lastName,middleName) {    PersonES5.call(this,firstName,lastName);    
this.middleName = middleName;
}

PersonWithMiddleNameES5.prototype =Object.create(PersonES5.prototype);
PersonWithMiddleNameES5.prototype.constructor = PersonWithMiddleName;

PersonWithMiddleNameES5.prototype.fullNameWithMiddle = function () {    
return this.firstName.concat(this.middleName).concat(this.lastName);
}
var p2 = new PersonWithMiddleName('first','last','middle');

console.log(p2.fullName());
console.log(p2.fullNameWithMiddle());

//ES-6
class Person{    
constructor(firstName,lastName){        
this.firstName = firstName;        
this.lastName = lastName;    
}    
fullName() {        
return this.firstName.concat(this.lastName);    
}
}

class PersonWithMiddleName extends Person {    
constructor(firstName,lastName,middleName){        
super(firstName,lastName);        
this.middleName = middleName;    
}    
fullNameWithMiddleName(){        
return this.firstName.concat(this.middleName).concat(this.lastName);    
}
}

var p2 = new PersonWithMiddleName('first','last','middle');
console.log(p2.fullName());
console.log(p2.fullNameWithMiddleName());
