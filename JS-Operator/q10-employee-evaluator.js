/* Q10. Departmental Employee Evaluator
   
   Evaluates employees from multiple departments based on performance points.
   Uses: nested arrays, loops, comparison operators, nested if-else
*/

console.log('=== Departmental Employee Evaluator ===\n');

// Nested array for departments with scores
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

console.log('Department Performance Data:');
console.log(departments);
console.log('');

// Function to evaluate performance based on score
function evaluatePerformance(score) {
  var rating;
  var color;
  
  if (score >= 90) {
    rating = "Excellent";
    color = "⭐⭐⭐⭐⭐";
  } else if (score >= 75 && score <= 89) {
    rating = "Good";
    color = "⭐⭐⭐⭐";
  } else if (score >= 60 && score <= 74) {
    rating = "Average";
    color = "⭐⭐⭐";
  } else {
    rating = "Needs Improvement";
    color = "⭐⭐";
  }
  
  return {
    rating: rating,
    stars: color
  };
}

// Evaluate all departments
console.log('=== Performance Evaluation Results ===\n');

var evaluations = [];

for (var i = 0; i < departments.length; i++) {
  var deptName = departments[i][0];
  var score = departments[i][1];
  
  var evaluation = evaluatePerformance(score);
  
  console.log('Department: ' + deptName);
  console.log('Score: ' + score);
  console.log('Rating: ' + evaluation.rating + ' ' + evaluation.stars);
  console.log('');
  
  evaluations.push({
    department: deptName,
    score: score,
    rating: evaluation.rating
  });
}

// Summary statistics
console.log('=== Department Performance Summary ===\n');

var excellentCount = 0;
var goodCount = 0;
var averageCount = 0;
var needsImprovementCount = 0;

var totalScore = 0;
var highestScore = departments[0][1];
var lowestScore = departments[0][1];
var highestDept = departments[0][0];
var lowestDept = departments[0][0];

for (var i = 0; i < departments.length; i++) {
  var score = departments[i][1];
  var deptName = departments[i][0];
  
  // Count by rating
  if (score >= 90) {
    excellentCount++;
  } else if (score >= 75) {
    goodCount++;
  } else if (score >= 60) {
    averageCount++;
  } else {
    needsImprovementCount++;
  }
  
  // Track highest and lowest
  if (score > highestScore) {
    highestScore = score;
    highestDept = deptName;
  }
  
  if (score < lowestScore) {
    lowestScore = score;
    lowestDept = deptName;
  }
  
  totalScore += score;
}

var averageScore = totalScore / departments.length;

console.log('Total Departments: ' + departments.length);
console.log('Average Score: ' + averageScore.toFixed(2));
console.log('');

console.log('Performance Distribution:');
console.log('  Excellent (≥90): ' + excellentCount + ' departments');
console.log('  Good (75-89): ' + goodCount + ' departments');
console.log('  Average (60-74): ' + averageCount + ' departments');
console.log('  Needs Improvement (<60): ' + needsImprovementCount + ' departments');
console.log('');

console.log('Best Performing: ' + highestDept + ' (' + highestScore + ' points)');
console.log('Needs Attention: ' + lowestDept + ' (' + lowestScore + ' points)');

// Detailed report table
console.log('\n╔════════════════════════════════════════════════╗');
console.log('║         DEPARTMENTAL EVALUATION REPORT         ║');
console.log('╠════════════════════════════════════════════════╣');

for (var i = 0; i < evaluations.length; i++) {
  var dept = evaluations[i].department.padEnd(10);
  var score = evaluations[i].score.toString().padStart(3);
  var rating = evaluations[i].rating.padEnd(20);
  console.log('║ ' + dept + ' │ ' + score + ' │ ' + rating + ' ║');
}

console.log('╚════════════════════════════════════════════════╝');

// Recommendations based on scores
console.log('\n=== Recommendations ===\n');

for (var i = 0; i < departments.length; i++) {
  var deptName = departments[i][0];
  var score = departments[i][1];
  var recommendation;
  
  if (score >= 90) {
    recommendation = "Maintain excellence. Consider for recognition awards.";
  } else if (score >= 75) {
    recommendation = "Good performance. Focus on continuous improvement.";
  } else if (score >= 60) {
    recommendation = "Average performance. Identify areas for development.";
  } else {
    recommendation = "Immediate intervention required. Develop improvement plan.";
  }
  
  console.log(deptName + ': ' + recommendation);
}

// Advanced: Year-over-year comparison (simulated)
console.log('\n\n=== Year-Over-Year Comparison (Simulated) ===\n');

const previousYearScores = [
  ["HR", 68],
  ["Finance", 82],
  ["Tech", 90],
  ["Support", 58]
];

console.log('Performance Change Analysis:');
console.log('');

for (var i = 0; i < departments.length; i++) {
  var deptName = departments[i][0];
  var currentScore = departments[i][1];
  var previousScore = previousYearScores[i][1];
  var change = currentScore - previousScore;
  var changePercent = ((change / previousScore) * 100).toFixed(1);
  
  var trend = change > 0 ? '↑' : change < 0 ? '↓' : '→';
  var trendText = change > 0 ? 'Improved' : change < 0 ? 'Declined' : 'Stable';
  
  console.log(deptName + ':');
  console.log('  Previous: ' + previousScore + ' | Current: ' + currentScore);
  console.log('  Change: ' + (change > 0 ? '+' : '') + change + ' points (' + changePercent + '%) ' + trend + ' ' + trendText);
  console.log('');
}

console.log('=== Concepts Demonstrated ===');
console.log('✓ Nested arrays - Store department data');
console.log('✓ for loops - Iterate through departments');
console.log('✓ Comparison operators - Evaluate performance levels');
console.log('✓ Nested if-else - Complex conditional logic');
console.log('✓ Array indexing - Access nested array elements');
console.log('✓ Mathematical operations - Calculate averages and changes');
console.log('=============================');
