const anchor = document.querySelector('a');

// console.log(anchor.href) // possibly null

if(anchor){
    console.log(anchor.href)
}

// ! mark at the end
const anchorTag = document.querySelector('a')!;

console.log(anchorTag.href);

// example 2

// type HTMLFormElement
// const form = document.querySelector('form')!;

// we've used class, so TS thinks any element can have a class thats why type Element 
const form = document.querySelector('.new-item-form')!;

// To solve this, we can type cast this
const htmlForm = document.querySelector('.new-item-form')as HTMLFormElement;

console.log(htmlForm);
console.log(htmlForm.children);

// inputs

const typeInput = document.querySelector('#type') as HTMLSelectElement;
const toFromInput = document.querySelector('#tofrom') as HTMLInputElement;
const detailsInput = document.querySelector('#details') as HTMLInputElement;
const amountInput = document.querySelector('#amount') as HTMLInputElement;
const addBtn = document.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(typeInput.value);
    console.log(toFromInput.value);
    console.log(detailsInput.value);

    // valueAsNumber
    console.log(amountInput.valueAsNumber);
});
