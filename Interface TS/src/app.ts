// interfaces
// not use to create objects, but to define schema. It shud have given properties 

interface IsPerson{
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Sejal",
  age: 22,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent, ${amount}`);
    return amount;
  },
  // skills: // throws error cus its not in Interface
};



console.log(me);

// Interface to enforce type of a variable
let someone: IsPerson;

// Interface to enforce a type of a variable in function parametr
const greetPerson = (person: IsPerson) => {
  person.speak(`Bonjour! My name is ${person.name}`);
}

greetPerson(me);
