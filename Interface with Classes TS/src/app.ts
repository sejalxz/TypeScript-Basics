import { HasFormatter } from './interfaces/HasFormatter.js';
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

// console.log(docs);


// const invOne = new Invoice('Ted','furniture',100);
// const invTwo = new Invoice('Lily','oven',50);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
//   console.log(inv.client,inv.amount, inv.format());
// });

const form = document.querySelector('.new-item-form')as HTMLFormElement;

// inputs

const typeInput = document.querySelector('#type') as HTMLSelectElement;
const toFromInput = document.querySelector('#tofrom') as HTMLInputElement;
const detailsInput = document.querySelector('#details') as HTMLInputElement;
const amountInput = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(typeInput.value === 'invoice'){
      doc = new Invoice(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }
    else{
      doc = new Payment(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }

    console.log(doc);
});