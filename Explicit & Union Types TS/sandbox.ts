// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'six'; // not allowed
age = 26;

// isLoggedIn = 'true';
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

// ninjas = [10,23] // not allowed
// ninjas = ['yes', 'no']; // allowed

ninjas.push('shaun');

// union type
let mixed: (string | number)[] = [];

mixed.push('hello');
mixed.push(12);

// mixed.push(true); // not allowed

console.log(mixed);


let uid: string|number;

uid = '123';
uid = 123;

// uid = false;

// objects

let ninjaOne: object;

ninjaOne = {
    name: "yoshi",
    age: 30,
}

console.log(ninjaOne)

ninjaOne = []; // allowed cus array is a type of object

console.log(ninjaOne)

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string,
}

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