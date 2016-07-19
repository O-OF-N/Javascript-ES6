
//Using Yield + promises

var co = require('co');
var Q = require('Q');

var firstNameFn = function () {
	console.log('inside 1');
	var deferred = Q.defer();
	setTimeout(() => {
		deferred.resolve('first');
	});
	return deferred.promise;
};

var lastNameFn = function () {
	console.log('inside 2');
	var deferred = Q.defer();
	setTimeout(() => {
		deferred.resolve('last');
	});
	return deferred.promise;
};

var fullName = function* () {
	try {
		var first = yield firstNameFn();
		console.log('test1')
		var last = yield lastNameFn();
		console.log('test2')
		console.log(first + last);
	} catch (err) {
		console.log('error = ' + err);
	}
}
co(fullName);