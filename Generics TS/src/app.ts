import { HasFormatter } from './interfaces/HasFormatter.js';
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form')as HTMLFormElement;
const typeInput = document.querySelector('#type') as HTMLSelectElement;
const toFromInput = document.querySelector('#tofrom') as HTMLInputElement;
const detailsInput = document.querySelector('#details') as HTMLInputElement;
const amountInput = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(typeInput.value === 'invoice'){
      doc = new Invoice(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }
    else{
      doc = new Payment(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }

    list.render(doc, typeInput.value, 'end');
    
});

// Generics

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// let docOne = addUID({name: 'Ted', age:30});
// console.log(docOne.name); // throws Property 'name' does not exist on type '{ uid: number; }'.


// extends {name: string}
const addUID = <T extends object>(obj: T) => { 
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: 'Ted', age:30});
// let docTwo = addUID('hello'); // possible but shouldn't be, to deal w this we add extends
console.log(docOne.name); 


// with interfaces
interface Resource <T> {
  uid: number,
  resourceName: string,
  data: T;
}

const docThree: Resource<string> = {
  uid: 1,
  resourceName: "person",
  data: 'bleh!'
}

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: "shopping list",
  data: ['milk', 'pen', 'fruit']
}

console.log(docThree, docFour);