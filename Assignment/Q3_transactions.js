"use strict";
// Q3 – Transaction Validator
const transactions = [
 { id: 1, amount: 2000 },
 { id: 2, amount: -500 },
 { id: 3 },
 null
];

const valid = [];
const invalid = [];

for (let t of transactions) {
  try {
    if (t === null) throw new Error("Null transaction");
    if (!t.id || t.amount === undefined) throw new Error("Missing id or amount");
    if (t.amount < 0) throw new Error("Negative amount");

    valid.push(t);
    console.log(`Transaction OK:`, t);
  } catch (e) {
    invalid.push({ transaction: t, error: e.message });
    console.error(`Transaction error:`, e.message);
  }
}

console.log("Valid Transactions:", valid.length);
console.log("Invalid Transactions:", invalid.length);
