import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice('Ted', 'furniture', 100);
const invTwo = new Invoice('Lily', 'oven', 50);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
