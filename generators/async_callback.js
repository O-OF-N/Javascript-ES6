
//Using Callback
var firstName = function () {
	setTimeout(() => {
		var first = 'first';
		setTimeout(() => {
			var last = 'last'
			setTimeout(() => {
				console.log(first + last);
			});
		});
	});
};
firstName();
