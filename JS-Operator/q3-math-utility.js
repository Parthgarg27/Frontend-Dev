/* Q3. Math Utility Dashboard
   
   Scientific calculator demonstrating Math object methods.
   Shows rounding, square root, power, and random number generation.
*/

console.log('=== Math Utility Dashboard ===\n');

// Input number
var x = 16.75;

console.log('Input Number: ' + x);
console.log('');

// 1. Rounded value using Math.round()
var rounded = Math.round(x);
console.log('1. Rounded Value (Math.round):');
console.log('   Math.round(' + x + ') = ' + rounded);
console.log('');

// 2. Square root using Math.sqrt()
var squareRoot = Math.sqrt(x);
console.log('2. Square Root (Math.sqrt):');
console.log('   Math.sqrt(' + x + ') = ' + squareRoot.toFixed(4));
console.log('');

// 3. Power using Math.pow()
var cubed = Math.pow(x, 3);
console.log('3. Power of 3 (Math.pow):');
console.log('   Math.pow(' + x + ', 3) = ' + cubed.toFixed(2));
console.log('   (' + x + ' × ' + x + ' × ' + x + ' = ' + cubed.toFixed(2) + ')');
console.log('');

// 4. Random number between 10-50 using Math.random() and Math.floor()
var randomNum = Math.floor(Math.random() * 41) + 10;
console.log('4. Random Number (10-50):');
console.log('   Formula: Math.floor(Math.random() * 41) + 10');
console.log('   Result: ' + randomNum);
console.log('');

// Formatted result summary using template literals
var summary = `
╔════════════════════════════════════════╗
║     MATH UTILITY DASHBOARD SUMMARY     ║
╠════════════════════════════════════════╣
║ Original Number    : ${x.toString().padEnd(16)} ║
║ Rounded           : ${rounded.toString().padEnd(16)} ║
║ Square Root       : ${squareRoot.toFixed(4).padEnd(16)} ║
║ Cubed (x³)        : ${cubed.toFixed(2).padEnd(16)} ║
║ Random (10-50)    : ${randomNum.toString().padEnd(16)} ║
╚════════════════════════════════════════╝
`;

console.log(summary);

// Additional Math methods demonstration
console.log('=== Additional Math Methods ===');
console.log('Math.floor(' + x + ')  = ' + Math.floor(x) + ' (rounds down)');
console.log('Math.ceil(' + x + ')   = ' + Math.ceil(x) + ' (rounds up)');
console.log('Math.abs(-' + x + ')   = ' + Math.abs(-x) + ' (absolute value)');
console.log('Math.max(10, 20, 5)  = ' + Math.max(10, 20, 5));
console.log('Math.min(10, 20, 5)  = ' + Math.min(10, 20, 5));
console.log('Math.PI              = ' + Math.PI.toFixed(4));
console.log('===============================');
