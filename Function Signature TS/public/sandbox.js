"use strict";
// let greet: Function;
// example 1
var greet;
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting, "!"));
};
greet("Sejal", "Bonjour");
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(5, 10, "add"));
console.log(calc(5, 10, "bleh!"));
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
var person = { name: 'Sej', age: 22 };
logDetails(person);
