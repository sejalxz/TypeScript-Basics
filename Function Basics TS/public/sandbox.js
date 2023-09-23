"use strict";
var greet = function () {
    console.log("Hello World!");
};
greet();
// greet = 'hello'; // not allowed
var greetPeople;
greetPeople = function () {
    console.log("Hello People!");
};
greetPeople();
// Optional parameter
var add = function (a, b, c) {
    console.log("Sum ", a + b);
    console.log(c);
};
add(5, 10);
// default Value of c
var minus = function (a, b, c) {
    if (c === void 0) { c = 100; }
    console.log("Minus ", a - b);
    console.log(c);
};
minus(5, 10, 20);
//ts AUTOMATICALLY INFERS type
var multiply = function (a, b) {
    return a * b;
};
var result = multiply(2, 3);
// You can also mention the data type explicitly
var multiplyThreeNumbers = function (a, b, c) {
    return a * b * c;
};
var resultOfThree = multiplyThreeNumbers(2, 3, 2);
// return void
var hello = function () {
    console.log("Hello!");
};
var greeting = hello();
