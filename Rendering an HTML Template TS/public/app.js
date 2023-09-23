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
    let doc;
    if (typeInput.value === 'invoice') {
        doc = new Invoice(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }
    else {
        doc = new Payment(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }
    list.render(doc, typeInput.value, 'end');
});
