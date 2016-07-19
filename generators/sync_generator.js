
var compute = function* (a, b) {
	var x = yield a - 10;
	var y = yield b + 10;
	return x + y;
}


var callCompute = function () {
	var gen = compute(7, -3);
	var a = gen.next().value;
	if (a < -5 || a > 10) {
		a = 0;
	}
	var b = gen.next(a).value;
	console.log(b)
	if (b < -5 || b > 10) {
		b = 0;
	}
	var a2 = gen.next(b);
	console.log(a2);
}
callCompute();