"use strict";
//classes
// by default all properties of the class are public
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.amount, "$ for ").concat(this.details, ".");
    };
    return Invoice;
}());
var invOne = new Invoice('Ted', 'furniture', 100);
console.log(invOne);
console.log(invOne.format());
var invTwo = new Invoice('Lily', 'oven', 50);
//array of invoices
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log("All Invoices : ", invoices);
invOne.amount = 400;
invOne.details = "Oven and Toaster";
console.log("Updated Invoices : ", invoices);
