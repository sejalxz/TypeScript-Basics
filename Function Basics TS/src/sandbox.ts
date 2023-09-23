let greet = () => {
    console.log("Hello World!")
}

greet();

// greet = 'hello'; // not allowed

let greetPeople: Function;

greetPeople = () => {
    console.log("Hello People!")
}
greetPeople();

// Optional parameter
const add = (a: number, b: number, c?: string | number ) => {
    console.log("Sum ", a + b);
    console.log(c);
}

add(5,10);

// default Value of c
const minus = (a: number, b: number, c: number | string = 100 ) => {
    console.log("Minus ", a - b);
    console.log(c);
}

minus(5,10,20);


//ts AUTOMATICALLY INFERS type

const multiply = (a:number, b:number) => {
    return a*b;
}

let result = multiply(2,3);

// You can also mention the data type explicitly

const multiplyThreeNumbers = (a:number, b:number, c:number): number => {
    return a*b*c;
}

let resultOfThree = multiplyThreeNumbers(2,3,2);


// return void

const hello = () : void => {
    console.log("Hello!")
}

let greeting = hello();