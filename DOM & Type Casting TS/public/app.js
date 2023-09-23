"use strict";
var anchor = document.querySelector('a');
// console.log(anchor.href) // possibly null
if (anchor) {
    console.log(anchor.href);
}
// ! mark at the end
var anchorTag = document.querySelector('a');
console.log(anchorTag.href);
// example 2
// type HTMLFormElement
// const form = document.querySelector('form')!;
// we've used class, so TS thinks any element can have a class thats why type Element 
var form = document.querySelector('.new-item-form');
// To solve this, we can type cast this
var htmlForm = document.querySelector('.new-item-form');
console.log(htmlForm);
console.log(htmlForm.children);
// inputs
var typeInput = document.querySelector('#type');
var toFromInput = document.querySelector('#tofrom');
var detailsInput = document.querySelector('#details');
var amountInput = document.querySelector('#amount');
var addBtn = document.querySelector('button');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(typeInput.value);
    console.log(toFromInput.value);
    console.log(detailsInput.value);
    // valueAsNumber
    console.log(amountInput.valueAsNumber);
});
