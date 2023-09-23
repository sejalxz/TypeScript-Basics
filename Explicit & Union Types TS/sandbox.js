// explicit types
var character;
var age;
var isLoggedIn;
// age = 'six'; // not allowed
age = 26;
// isLoggedIn = 'true';
isLoggedIn = true;
// arrays
var ninjas = [];
// ninjas = [10,23] // not allowed
// ninjas = ['yes', 'no']; // allowed
ninjas.push('shaun');
// union type
var mixed = [];
mixed.push('hello');
mixed.push(12);
// mixed.push(true); // not allowed
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// uid = false;
// objects
var ninjaOne;
ninjaOne = {
    name: "yoshi",
    age: 30,
};
console.log(ninjaOne);
ninjaOne = []; // allowed cus array is a type of object
console.log(ninjaOne);
var ninjaTwo;
// ninjaTwo = {}; // not allowed, should have all properties
ninjaTwo = {
    name: 'mattio',
    age: 19,
    beltColor: 'black'
};
console.log(ninjaTwo);
ninjaTwo = {
    name: 'mattio',
    age: 19,
    beltColor: 'black',
    // skills: ['a', 'b'], // not allowed
};
