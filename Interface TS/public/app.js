"use strict";
// interfaces
// not use to create objects, but to define schema. It shud have given properties 
const me = {
    name: "Sejal",
    age: 22,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent, ${amount}`);
        return amount;
    },
    // skills: // throws error cus its not in Interface
};
console.log(me);
// Interface to enforce type of a variable
let someone;
// Interface to enforce a type of a variable in function parametr
const greetPerson = (person) => {
    person.speak(`Bonjour! My name is ${person.name}`);
};
greetPerson(me);
