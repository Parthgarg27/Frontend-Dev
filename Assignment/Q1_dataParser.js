"use strict";
// Q1 – Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let val of apiData) {
  let num = Number(val);
  if (!isNaN(num) && val !== " " && val !== null && val !== undefined && !val.includes("px")) {
    validNumbers.push(num);
  } else {
    invalidNumbers.push(val);
  }
  console.log(`Value: ${val}, Number: ${num}, Boolean: ${Boolean(val)}, String: ${String(val)}`);
}

console.log("Valid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidNumbers);
