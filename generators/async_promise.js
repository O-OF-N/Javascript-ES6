//Using Promises
var Q = require('Q');

var firstNameFn = function() {
	var deferred = Q.defer();
	setTimeout(()=>{
		deferred.resolve('first');
	});
	return deferred.promise;
};

var lastNameFn = function() {
	var deferred = Q.defer();
	setTimeout(()=>{
		deferred.resolve('last');
	});
	return deferred.promise;
};

var fullName = function(){
	var firstNamePromise = firstNameFn();
	var lastNamePromise = lastNameFn();
	var firstName,lastName;
	firstNamePromise.then((name)=>{
		firstName = name;
		lastNamePromise.then((name)=>{
			lastName = name;
			console.log(firstName+lastName);
		});
		
	});
}

fullName();
