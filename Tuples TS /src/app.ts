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

    // tupples
    let values: [string, string, number];
    values = [toFromInput.value,detailsInput.value, amountInput.valueAsNumber];

    let doc: HasFormatter;
    if(typeInput.value === 'invoice'){
      doc = new Invoice(...values);
    }
    else{
      doc = new Payment(...values);
    }

    list.render(doc, typeInput.value, 'end');
    
});


//tuples -> like arrays but have fixed positions

// in array
let arr = ['name', 2, true];
arr[1] = false; // works
arr[0] = 23;
arr[2] = 'name';

// any of the above three types can be in any position


// in tuples, once we define positions, they are fixed.

let tup: [string, number, boolean] = ['name', 2, true];
// tup[0] = 23; // not allowed
tup[0] = 'sejal'; // allowed


let student:[string, number];

student = ['sejal', 23];