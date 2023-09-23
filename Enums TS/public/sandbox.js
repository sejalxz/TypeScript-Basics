"use strict";
// access modifiers
// by default all properties of the class are public
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // this.client = 'something else'; // not possible read-only
        return `${this.client} owes ${this.amount}$ for ${this.details}.`;
    }
}
const invOne = new Invoice('Ted', 'furniture', 100);
const invTwo = new Invoice('Lily', 'oven', 50);
//array of invoices
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
