// Predefined account balance
let balance = 10000;

// Hoisting Example
console.log(hoistedVar); // Works → undefined (var is hoisted)
var hoistedVar = "I am hoisted";

try {
  console.log(hoistedLet); // Error → cannot access before initialization
} catch (error) {
  console.log("Hoisting difference:", error.message);
}
let hoistedLet = "I am NOT hoisted";

// ATM Withdrawal Function
function atmWithdraw() {
  let amount;

  while (true) {
    let input = prompt("Enter withdrawal amount:");
    try {
      // Convert input to number
      amount = Number(input);

      // Error 1: Non-numeric input
      if (isNaN(amount)) {
        throw new Error("Invalid input: Please enter a number!");
      }

      // Error 2: Not divisible by 100
      if (amount % 100 !== 0) {
        throw new Error("Amount must be divisible by 100!");
      }

      // Error 3: Amount greater than balance
      if (amount > balance) {
        throw new Error("Insufficient balance!");
      }

      // TypeError Example (calling string method on number)
      try {
        amount.toUpperCase(); // This will throw a TypeError
      } catch (err) {
        console.error("TypeError caught:", err.message);
      }

      // High withdrawal alert
      if (amount > 3000) {
        console.warn("High withdrawal alert!");
      }

      // If all checks clear → valid amount
      break;
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  // Deduct amount
  balance -= amount;
  console.log(`Withdrawal successful! Amount: ${amount}`);
  console.log(`Final Balance: ${balance}`);
}

// Run the ATM
atmWithdraw();
