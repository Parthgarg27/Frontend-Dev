/* Q6. Event-Based Counter Simulation
   
   Simulates click events with increment/decrement functions.
   Demonstrates function scope and nested functions.
*/

console.log('=== Event-Based Counter Simulation ===\n');

// Global counter variable
var count = 0;

// Increment function - simulates "click" event
function increment() {
  count++;
  console.log('Increment clicked! Count is now: ' + count);
  
  // Nested function to show function scope
  function logIncrementDetails() {
    var changeAmount = 1; // Local to nested function
    console.log('  → Changed by: +' + changeAmount);
    console.log('  → New value: ' + count + ' (accessible from nested function)');
  }
  
  logIncrementDetails();
  return count;
}

// Decrement function - simulates "click" event
function decrement() {
  count--;
  console.log('Decrement clicked! Count is now: ' + count);
  
  // Nested function to show function scope
  function logDecrementDetails() {
    var changeAmount = -1; // Local to nested function
    console.log('  → Changed by: ' + changeAmount);
    console.log('  → New value: ' + count + ' (accessible from nested function)');
  }
  
  logDecrementDetails();
  return count;
}

// Reset function
function resetCounter() {
  var oldValue = count;
  count = 0;
  console.log('Reset clicked! Count changed from ' + oldValue + ' to ' + count);
  return count;
}

// Function to display current count
function displayCount() {
  console.log('\n[ Current Count: ' + count + ' ]\n');
}

// Simulate click events
console.log('Initial count: ' + count);
console.log('');

console.log('--- Simulating Click Events ---\n');

// Simulate 5 increment clicks
console.log('Simulating 5 increment clicks:');
increment();
increment();
increment();
increment();
increment();
displayCount();

// Simulate 2 decrement clicks
console.log('Simulating 2 decrement clicks:');
decrement();
decrement();
displayCount();

// Simulate more increments
console.log('Simulating 3 more increment clicks:');
increment();
increment();
increment();
displayCount();

// Simulate decrements below zero
console.log('Simulating 10 decrement clicks (going negative):');
for (var i = 0; i < 10; i++) {
  decrement();
}
displayCount();

// Reset counter
console.log('Resetting counter:');
resetCounter();
displayCount();

// Advanced: Counter with limits using nested function
console.log('=== Advanced: Counter with Limits ===\n');

function createLimitedCounter(min, max) {
  var limitedCount = 0; // Private variable in closure
  
  return {
    increment: function() {
      if (limitedCount < max) {
        limitedCount++;
        console.log('Limited Counter incremented to: ' + limitedCount);
      } else {
        console.log('Cannot increment! Maximum limit (' + max + ') reached.');
      }
      return limitedCount;
    },
    
    decrement: function() {
      if (limitedCount > min) {
        limitedCount--;
        console.log('Limited Counter decremented to: ' + limitedCount);
      } else {
        console.log('Cannot decrement! Minimum limit (' + min + ') reached.');
      }
      return limitedCount;
    },
    
    getValue: function() {
      return limitedCount;
    },
    
    reset: function() {
      limitedCount = 0;
      console.log('Limited Counter reset to: ' + limitedCount);
      return limitedCount;
    }
  };
}

// Create a counter with limits 0-5
var limitedCounter = createLimitedCounter(0, 5);

console.log('Created counter with limits: min=0, max=5');
console.log('');

limitedCounter.increment();
limitedCounter.increment();
limitedCounter.increment();
limitedCounter.increment();
limitedCounter.increment();
limitedCounter.increment(); // Should hit limit
limitedCounter.increment(); // Should hit limit again

console.log('');

limitedCounter.decrement();
limitedCounter.decrement();
limitedCounter.decrement();
limitedCounter.decrement();
limitedCounter.decrement();
limitedCounter.decrement(); // Should hit limit

console.log('');
console.log('Final limited counter value: ' + limitedCounter.getValue());

console.log('\n=== Key Concepts Demonstrated ===');
console.log('✓ Global variable (count) accessible in all functions');
console.log('✓ Nested functions accessing parent scope variables');
console.log('✓ Function scope with local variables');
console.log('✓ Closure pattern for encapsulation (advanced example)');
console.log('✓ Event simulation through function calls');
console.log('===================================');
