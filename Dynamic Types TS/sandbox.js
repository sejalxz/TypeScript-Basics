var age = 25;
console.log(age);
age = true;
console.log(age);
age = 'hie';
console.log(age);
age = {
    name: 'sejal',
    age: 22,
};
console.log(age);
var mixed = [];
mixed.push('hie');
mixed.push(13);
mixed.push(false);
mixed.push(['a', 'b', 1]);
mixed.push(age);
console.log(mixed);
// When declaring the schema use : dont use =
var ninja;
ninja = {
    name: 23,
    age: 'yoshi'
};
console.log(ninja);
ninja = {
    name: "yoshi",
    age: 23
};
console.log(ninja);
