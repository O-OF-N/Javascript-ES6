//Using Yield


var firstName = function(){
	setTimeout(()=>{
		gen.next('first');
	});
};

var lastName = function(){
	setTimeout(()=>{
		gen.next('last');
	});
};

var fullName = function * (){
	var a = yield firstName();
	var b = yield lastName();
	console.log(a + b );
};

var gen = fullName();
gen.next();