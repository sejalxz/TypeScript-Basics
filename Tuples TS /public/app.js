import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
const typeInput = document.querySelector('#type');
const toFromInput = document.querySelector('#tofrom');
const detailsInput = document.querySelector('#details');
const amountInput = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // tupples
    let values;
    values = [toFromInput.value, detailsInput.value, amountInput.valueAsNumber];
    let doc;
    if (typeInput.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
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
let tup = ['name', 2, true];
// tup[0] = 23; // not allowed
tup[0] = 'sejal'; // allowed
let student;
student = ['sejal', 23];
