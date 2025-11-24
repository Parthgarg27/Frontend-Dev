"use strict";
// Q4 – Debugging Mystery Fix
function showMessage() {
  let greeting = "Welcome"; // now declared
  console.log(greeting);
}
showMessage();
// Error earlier happened due to undeclared variable assignment which strict mode disallows.
