/* Q4. Array Performance Analyzer
   
   Analyzes student performance from array of scores.
   Uses array methods: map(), filter(), reduce()
   Math methods: Math.max(), Math.min()
*/

console.log('=== Array Performance Analyzer ===\n');

// Generate 8 random scores between 30 and 100
var scores = [];
for (var i = 0; i < 8; i++) {
  var randomScore = Math.floor(Math.random() * 71) + 30; // 30 to 100
  scores.push(randomScore);
}

console.log('Generated Scores (8 students):');
console.log(scores);
console.log('');

// 1. Highest score using Math.max with spread operator
var highest = Math.max(...scores);
console.log('Highest Score: ' + highest);

// 2. Lowest score using Math.min with spread operator
var lowest = Math.min(...scores);
console.log('Lowest Score: ' + lowest);
console.log('');

// 3. Average score using reduce()
var sum = scores.reduce(function(acc, score) {
  return acc + score;
}, 0);
var average = sum / scores.length;

console.log('Sum of all scores: ' + sum);
console.log('Average Score: ' + average.toFixed(2));
console.log('');

// 4. Number of students who passed (score >= 50)
var passed = scores.filter(function(score) {
  return score >= 50;
});

var passedCount = passed.length;
var failedCount = scores.length - passedCount;
var passPercentage = (passedCount / scores.length) * 100;

console.log('Pass/Fail Analysis (Pass mark: 50):');
console.log('Students who passed: ' + passedCount + ' out of ' + scores.length);
console.log('Students who failed: ' + failedCount);
console.log('Pass percentage: ' + passPercentage.toFixed(1) + '%');
console.log('');

// Detailed student breakdown using map()
console.log('=== Detailed Student Performance ===');
var performanceReport = scores.map(function(score, index) {
  var status = score >= 50 ? 'PASS' : 'FAIL';
  var grade;
  
  if (score >= 90) grade = 'A+';
  else if (score >= 80) grade = 'A';
  else if (score >= 70) grade = 'B';
  else if (score >= 60) grade = 'C';
  else if (score >= 50) grade = 'D';
  else grade = 'F';
  
  return {
    student: 'Student ' + (index + 1),
    score: score,
    grade: grade,
    status: status
  };
});

performanceReport.forEach(function(student) {
  console.log(student.student + ': ' + student.score + ' | Grade: ' + student.grade + ' | ' + student.status);
});

// Full formatted summary
console.log('\n');
console.log('╔═══════════════════════════════════════════╗');
console.log('║     PERFORMANCE ANALYSIS SUMMARY          ║');
console.log('╠═══════════════════════════════════════════╣');
console.log('║ Total Students      : ' + scores.length.toString().padEnd(19) + '║');
console.log('║ Highest Score       : ' + highest.toString().padEnd(19) + '║');
console.log('║ Lowest Score        : ' + lowest.toString().padEnd(19) + '║');
console.log('║ Average Score       : ' + average.toFixed(2).padEnd(19) + '║');
console.log('║ Students Passed     : ' + passedCount.toString().padEnd(19) + '║');
console.log('║ Students Failed     : ' + failedCount.toString().padEnd(19) + '║');
console.log('║ Pass Percentage     : ' + (passPercentage.toFixed(1) + '%').padEnd(19) + '║');
console.log('╚═══════════════════════════════════════════╝');

console.log('\n=== Array Methods Used ===');
console.log('✓ map()    - Transform scores into performance objects');
console.log('✓ filter() - Find students who passed (score >= 50)');
console.log('✓ reduce() - Calculate sum of all scores');
console.log('✓ Math.max(...arr) - Find highest score');
console.log('✓ Math.min(...arr) - Find lowest score');
console.log('==========================');
