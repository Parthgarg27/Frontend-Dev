function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Custom Error: Cannot divide by zero!");
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
  }
}

// Example usage:
console.log(divide(10, 2)); // Output: 5
console.log(divide(8, 0)); // Output: Custom Error: Cannot divide by zero!
