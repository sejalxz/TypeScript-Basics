"use strict";
// access modifiers
// by default all properties of the class are public
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.client = 'something else'; // not possible read-only
        return "".concat(this.client, " owes ").concat(this.amount, "$ for ").concat(this.details, ".");
    };
    return Invoice;
}());
var invOne = new Invoice('Ted', 'furniture', 100);
var invTwo = new Invoice('Lily', 'oven', 50);
//array of invoices
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
