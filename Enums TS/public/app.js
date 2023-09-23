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
// ENUMS
// a constant to represent the resource type, we can use enum
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
const docOne = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docTwo = {
    uid: 10,
    resourceName: ResourceType.PERSON,
    data: { name: 'mario' }
};
console.log(docOne, docTwo);
