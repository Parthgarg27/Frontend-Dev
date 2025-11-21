/* Q2. String Manipulation Report
   
   E-commerce product title formatting script.
   Demonstrates string methods: trim(), split(), map(), join(), replace(), length
*/

console.log('=== String Manipulation Report ===\n');

// Original product name with extra spaces and mixed case
var productName = "  wireless headphones PRO  ";

console.log('Original String:');
console.log('"' + productName + '"');
console.log('Length (with spaces): ' + productName.length);
console.log('');

// Step 1: Trim extra spaces
var trimmed = productName.trim();
console.log('Step 1 - After trim():');
console.log('"' + trimmed + '"');
console.log('Length: ' + trimmed.length);
console.log('');

// Step 2: Convert to lowercase
var lowercase = trimmed.toLowerCase();
console.log('Step 2 - After toLowerCase():');
console.log('"' + lowercase + '"');
console.log('');

// Step 3: Capitalize first letter of each word
// Split into words, map to capitalize each, then join back
var words = lowercase.split(' ');
console.log('Step 3a - After split():');
console.log(words);

var capitalized = words.map(function(word) {
  // Capitalize first letter and keep rest as is
  return word.charAt(0).toUpperCase() + word.slice(1);
});

console.log('Step 3b - After map() with capitalization:');
console.log(capitalized);

var formatted = capitalized.join(' ');
console.log('Step 3c - After join():');
console.log('"' + formatted + '"');
console.log('');

// Step 4: Replace "Pro" with "Pro Edition"
var finalTitle = formatted.replace('Pro', 'Pro Edition');
console.log('Step 4 - After replace("Pro", "Pro Edition"):');
console.log('"' + finalTitle + '"');
console.log('');

// Display final cleaned title and its length
console.log('=== FINAL RESULT ===');
console.log('Cleaned Title: ' + finalTitle);
console.log('Final Length: ' + finalTitle.length);
console.log('Character Count: ' + finalTitle.length + ' characters');
console.log('Word Count: ' + finalTitle.split(' ').length + ' words');

// Summary of methods used
console.log('\n=== Methods Used ===');
console.log('✓ trim()     - Remove leading/trailing spaces');
console.log('✓ toLowerCase() - Convert all to lowercase');
console.log('✓ split()    - Break string into array of words');
console.log('✓ map()      - Transform each word (capitalize)');
console.log('✓ join()     - Combine array back to string');
console.log('✓ replace()  - Replace "Pro" with "Pro Edition"');
console.log('✓ length     - Get string length');
console.log('✓ charAt()   - Get character at position');
console.log('✓ slice()    - Extract substring');
console.log('====================');
