/*Used to declare immutable variables
It is just a syntactic sugar for Object.defineProperty in ES-5
*/

//ES - 5
Object.defineProperty(typeof global === "object" ? global : window,'immutable5',{
configurable: false,
enumerable: false,
writable: false,
value:'I am immutable by ES5'});

console.log(immutable5);

//ES - 6
const immutable6 = 'I am immutable by ES6';
console.log(immutable6);
