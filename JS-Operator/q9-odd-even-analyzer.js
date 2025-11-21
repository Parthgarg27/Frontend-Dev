/* Q9. Odd-Even Number Analyzer
   
   Classifies numbers 1-30 based on multiple conditions.
   Uses: modulo operator (%), push(), conditionals
   FizzBuzz variant implementation
*/

console.log('=== Odd-Even Number Analyzer ===\n');

// Create array with numbers 1-30 using a loop
var numbers = [];
for (var i = 1; i <= 30; i++) {
  numbers.push(i);
}

console.log('Analyzing numbers 1 to 30:');
console.log(numbers);
console.log('');

// Analyze each number and store results
var results = [];

console.log('Classification Results:\n');

for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i];
  var classification;
  
  // Check conditions in order
  if (num % 3 === 0 && num % 5 === 0) {
    // Divisible by both 3 and 5
    classification = "FizzBuzz";
  } else if (num % 2 === 0) {
    // Even number
    classification = "Even";
  } else {
    // Odd number
    classification = "Odd";
  }
  
  // Store result
  results.push(classification);
  
  // Display with formatting
  var numStr = num.toString().padStart(2, ' ');
  console.log(numStr + ' → ' + classification);
}

console.log('');
console.log('Results Array:');
console.log(results);

// Summary statistics
console.log('\n=== Summary Statistics ===\n');

var fizzBuzzCount = 0;
var evenCount = 0;
var oddCount = 0;

for (var i = 0; i < results.length; i++) {
  if (results[i] === "FizzBuzz") fizzBuzzCount++;
  else if (results[i] === "Even") evenCount++;
  else if (results[i] === "Odd") oddCount++;
}

console.log('Total numbers analyzed: ' + numbers.length);
console.log('FizzBuzz count: ' + fizzBuzzCount + ' (divisible by both 3 and 5)');
console.log('Even count: ' + evenCount + ' (divisible by 2, excluding FizzBuzz)');
console.log('Odd count: ' + oddCount + ' (not divisible by 2 or both 3 and 5)');

// Show which numbers fall into each category
console.log('\n=== Breakdown by Category ===\n');

var fizzBuzzNumbers = [];
var evenNumbers = [];
var oddNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  if (results[i] === "FizzBuzz") {
    fizzBuzzNumbers.push(numbers[i]);
  } else if (results[i] === "Even") {
    evenNumbers.push(numbers[i]);
  } else {
    oddNumbers.push(numbers[i]);
  }
}

console.log('FizzBuzz numbers (divisible by 3 AND 5):');
console.log(fizzBuzzNumbers);
console.log('');

console.log('Even numbers (excluding FizzBuzz):');
console.log(evenNumbers);
console.log('');

console.log('Odd numbers:');
console.log(oddNumbers);

// Additional analysis: Divisibility breakdown
console.log('\n=== Divisibility Analysis ===\n');

var divisibleBy3 = [];
var divisibleBy5 = [];
var divisibleBy3and5 = [];

for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i];
  if (num % 3 === 0 && num % 5 === 0) {
    divisibleBy3and5.push(num);
  } else if (num % 3 === 0) {
    divisibleBy3.push(num);
  } else if (num % 5 === 0) {
    divisibleBy5.push(num);
  }
}

console.log('Divisible by 3 only: ' + divisibleBy3.join(', '));
console.log('Divisible by 5 only: ' + divisibleBy5.join(', '));
console.log('Divisible by both 3 and 5: ' + divisibleBy3and5.join(', '));

// Visual representation
console.log('\n=== Visual Classification ===\n');

var line = '';
for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i];
  var symbol;
  
  if (results[i] === "FizzBuzz") symbol = 'F';
  else if (results[i] === "Even") symbol = 'E';
  else symbol = 'O';
  
  line += num.toString().padStart(2, '0') + '[' + symbol + '] ';
  
  // Line break every 6 numbers for readability
  if ((i + 1) % 6 === 0) {
    console.log(line);
    line = '';
  }
}
if (line) console.log(line);

console.log('\nLegend: F=FizzBuzz, E=Even, O=Odd');

console.log('\n=== Operators & Methods Used ===');
console.log('✓ Modulo operator (%) - Check divisibility');
console.log('✓ push() - Add elements to arrays');
console.log('✓ Conditionals - Classify numbers');
console.log('✓ for loop - Iterate through range');
console.log('✓ Logical AND (&&) - Check multiple conditions');
console.log('================================');
