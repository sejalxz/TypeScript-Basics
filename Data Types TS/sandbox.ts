let character = 'mario';
let age = 30;
let isBlackBelt = false;

//character = 23; // type casting not allowed since strict types
character = "luigi";

// age = "sejal"; // type casting not allowed since strict types
age = 12;

//isBlackBelt = 'true';

isBlackBelt = true;

const circumference = (diameter:number ) => {
    return Math.PI * diameter;
}

console.log(circumference(100));