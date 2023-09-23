//classes

// by default all properties of the class are public

class Invoice{
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number){
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format(){
    return `${this.client} owes ${this.amount}$ for ${this.details}.`;
  }
}


const invOne = new Invoice('Ted','furniture',100);

console.log(invOne);
console.log(invOne.format());

const invTwo = new Invoice('Lily','oven',50);


//array of invoices

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

console.log("All Invoices : ", invoices);

invOne.amount = 400;
invOne.details = "Oven and Toaster";

console.log("Updated Invoices : ", invoices);
