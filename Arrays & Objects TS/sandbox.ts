//arrays
let names = ["harvey", "louis", "mike"];

// names = "string"

names.push('rachel');
// names.push(23);
// names[0] = 12;

console.log(names);

let mixed = ['ken', 4, 'barbie',12];
mixed.push(34);
mixed.push('alice');

console.log(mixed)

mixed[0] = 'kentucky'

console.log(mixed)
// mixed.push(true); mixed can only have string or number as declared before



//objects

let ninja = {
    name: 'mario',
    age: 30,
    belt: 'black'
}

ninja.age = 34;
ninja.belt = 'white'

// ninja.age = 'forty';

// ninja.height = "6'1"; // cannot add extra property

// we can ovveride

ninja = {
    name: 'yoshi',
    // age: 30, // Object should have same structure
    belt: 'black'
}

ninja = {
    name: 'yoshi',
    age: 30,
    // skills: ['a','b'], // Object should have same structure
    belt: 'black'
}