/* Q1. Scope Conflict Resolver
   
   A company's payroll script demonstrates variable scoping.
   Global vs Local scope and how isPermanent affects calculations.
*/

// Global variable - accessible everywhere
var bonus = 5000;

// Function to calculate salary
function calculateSalary(isPermanent) {
  // Local variable - only accessible inside this function
  var salary = 40000;
  
  // Calculate total salary
  // Add bonus only if employee is permanent
  var totalSalary = salary;
  
  if (isPermanent) {
    totalSalary = salary + bonus;
    console.log('Employee is permanent. Bonus applied.');
  } else {
    console.log('Employee is not permanent. No bonus.');
  }
  
  // Print total salary inside function
  console.log('Base Salary: ₹' + salary);
  console.log('Bonus: ₹' + (isPermanent ? bonus : 0));
  console.log('Total Salary: ₹' + totalSalary);
  console.log('---');
}

// Demonstrate scope behavior
console.log('=== Scope Conflict Resolver ===\n');

console.log('Global bonus variable: ₹' + bonus);
console.log('Accessible from outside function: ' + (typeof bonus !== 'undefined'));
console.log('');

// Test Case 1: Permanent Employee
console.log('Test Case 1: Permanent Employee (isPermanent = true)');
calculateSalary(true);

// Test Case 2: Non-Permanent Employee
console.log('Test Case 2: Non-Permanent Employee (isPermanent = false)');
calculateSalary(false);

// Demonstrate that local variable 'salary' is NOT accessible outside function
console.log('Trying to access local variable "salary" from outside:');
try {
  console.log(salary); // This will throw ReferenceError
} catch (e) {
  console.log('Error: ' + e.message);
  console.log('Local variables are not accessible outside their function scope.');
}

console.log('');
console.log('Global bonus is still accessible: ₹' + bonus);

// Demonstrate global variable modification
console.log('\n--- Modifying Global Variable ---');
bonus = 7000;
console.log('Global bonus changed to: ₹' + bonus);
console.log('Recalculating with new bonus:');
calculateSalary(true);

console.log('\n=== Key Takeaways ===');
console.log('1. Global variables (bonus) are accessible everywhere');
console.log('2. Local variables (salary) exist only inside their function');
console.log('3. Parameter isPermanent controls bonus application logic');
console.log('4. Changing isPermanent affects the total but not the global scope itself');
console.log('================================');
