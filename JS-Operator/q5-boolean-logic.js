/* Q5. Boolean Logic Access System
   
   Smart home security system using Boolean logic.
   Demonstrates &&, ||, and ! operators
*/

console.log('=== Boolean Logic Access System ===\n');

// Function to check security status
function checkSecurityStatus(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  console.log('--- Security Check ---');
  console.log('Door Locked:    ' + isDoorLocked);
  console.log('Window Closed:  ' + isWindowClosed);
  console.log('Alarm On:       ' + isAlarmOn);
  console.log('Owner Inside:   ' + isOwnerInside);
  console.log('');
  
  // Access is granted only if:
  // - Alarm is on AND
  // - Door and window are closed AND
  // - Owner is inside
  var isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  
  // Additional checks using Boolean logic
  var allClosures = isDoorLocked && isWindowClosed;
  var hasOwnerWithAlarm = isOwnerInside && isAlarmOn;
  var anyOpenings = !isDoorLocked || !isWindowClosed;
  
  console.log('Boolean Logic Evaluation:');
  console.log('All closures (door AND window): ' + allClosures);
  console.log('Owner with alarm: ' + hasOwnerWithAlarm);
  console.log('Any openings (!door OR !window): ' + anyOpenings);
  console.log('');
  
  // Final verdict
  var status = isSecure ? "SECURE" : "UNSAFE";
  var statusSymbol = isSecure ? "✓" : "✗";
  
  console.log('=== STATUS: ' + status + ' ' + statusSymbol + ' ===');
  
  // Provide specific warnings if unsafe
  if (!isSecure) {
    console.log('Security Issues Detected:');
    if (!isAlarmOn) console.log('  ⚠ Alarm is OFF');
    if (!isDoorLocked) console.log('  ⚠ Door is UNLOCKED');
    if (!isWindowClosed) console.log('  ⚠ Window is OPEN');
    if (!isOwnerInside) console.log('  ⚠ Owner is NOT INSIDE');
  } else {
    console.log('✓ All security conditions met!');
  }
  
  console.log('');
  return isSecure;
}

// Test Case 1: All conditions met - SECURE
console.log('TEST CASE 1: Ideal Secure Conditions');
checkSecurityStatus(true, true, true, true);

// Test Case 2: Alarm off - UNSAFE
console.log('TEST CASE 2: Alarm is OFF');
checkSecurityStatus(true, true, false, true);

// Test Case 3: Door unlocked - UNSAFE
console.log('TEST CASE 3: Door is UNLOCKED');
checkSecurityStatus(false, true, true, true);

// Test Case 4: Window open - UNSAFE
console.log('TEST CASE 4: Window is OPEN');
checkSecurityStatus(true, false, true, true);

// Test Case 5: Owner not inside - UNSAFE
console.log('TEST CASE 5: Owner is NOT INSIDE');
checkSecurityStatus(true, true, true, false);

// Test Case 6: Multiple issues - UNSAFE
console.log('TEST CASE 6: Multiple Security Issues');
checkSecurityStatus(false, false, false, true);

// Test Case 7: Everything open - UNSAFE
console.log('TEST CASE 7: Critical - All Systems Compromised');
checkSecurityStatus(false, false, false, false);

// Demonstrate Boolean operators
console.log('=== Boolean Operators Demonstration ===');
console.log('AND (&&) operator:');
console.log('  true && true   = ' + (true && true));
console.log('  true && false  = ' + (true && false));
console.log('  false && false = ' + (false && false));
console.log('');

console.log('OR (||) operator:');
console.log('  true || true   = ' + (true || true));
console.log('  true || false  = ' + (true || false));
console.log('  false || false = ' + (false || false));
console.log('');

console.log('NOT (!) operator:');
console.log('  !true  = ' + (!true));
console.log('  !false = ' + (!false));
console.log('=======================================');
