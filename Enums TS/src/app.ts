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

// ENUMS
// a constant to represent the resource type, we can use enum

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

interface Resource <T> {
  uid: number,
  resourceName: ResourceType,
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.BOOK,
  data: {title: 'name of the wind'}
}

const docTwo: Resource<object> = {
  uid: 10,
  resourceName: ResourceType.PERSON,
  data: {name: 'mario'}
}

console.log(docOne, docTwo);