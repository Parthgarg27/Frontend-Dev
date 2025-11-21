/* Q7. Customer Feedback Processor
   
   Analyzes customer reviews for positivity and length.
   Uses: includes(), split(), conditional statements
*/

console.log('=== Customer Feedback Processor ===\n');

// Function to process feedback
function processFeedback(feedback) {
  console.log('Original Feedback:');
  console.log('"' + feedback + '"');
  console.log('');
  
  // Count words using split()
  var words = feedback.split(' ');
  var wordCount = words.length;
  
  console.log('Feedback Analysis:');
  console.log('Total characters: ' + feedback.length);
  console.log('Total words: ' + wordCount);
  console.log('');
  
  // Check for negative keywords using includes()
  var hasNegativeWords = feedback.toLowerCase().includes('bad') || 
                         feedback.toLowerCase().includes('poor');
  
  // Additional negative keywords check
  var containsBad = feedback.toLowerCase().includes('bad');
  var containsPoor = feedback.toLowerCase().includes('poor');
  var containsTerrible = feedback.toLowerCase().includes('terrible');
  var containsAwful = feedback.toLowerCase().includes('awful');
  
  console.log('Negative Keywords Check:');
  console.log('Contains "bad": ' + containsBad);
  console.log('Contains "poor": ' + containsPoor);
  console.log('Contains "terrible": ' + containsTerrible);
  console.log('Contains "awful": ' + containsAwful);
  console.log('');
  
  // Determine sentiment
  var sentiment;
  var icon;
  
  if (hasNegativeWords || containsTerrible || containsAwful) {
    sentiment = "Needs Improvement";
    icon = "⚠";
  } else {
    sentiment = "Positive Feedback";
    icon = "✓";
  }
  
  console.log('=== RESULT: ' + sentiment + ' ' + icon + ' ===');
  console.log('');
  
  return {
    wordCount: wordCount,
    sentiment: sentiment,
    hasNegativeWords: hasNegativeWords
  };
}

// Test Case 1: Positive feedback
console.log('TEST CASE 1: Positive Review');
processFeedback("Great product! Fast delivery and amazing sound quality!");

console.log('---\n');

// Test Case 2: Negative feedback with "bad"
console.log('TEST CASE 2: Negative Review (contains "bad")');
processFeedback("The product quality is bad and delivery was delayed.");

console.log('---\n');

// Test Case 3: Negative feedback with "poor"
console.log('TEST CASE 3: Negative Review (contains "poor")');
processFeedback("Poor customer service and the item came damaged.");

console.log('---\n');

// Test Case 4: Another positive feedback
console.log('TEST CASE 4: Another Positive Review');
processFeedback("Excellent purchase! Highly recommend this to everyone. Five stars!");

console.log('---\n');

// Test Case 5: Mixed but overall positive
console.log('TEST CASE 5: Mixed Review (No negative keywords)');
processFeedback("Good value for money. Shipping could be faster but overall satisfied.");

console.log('---\n');

// Test Case 6: Negative with "terrible"
console.log('TEST CASE 6: Very Negative Review');
processFeedback("Terrible experience! The product broke after one day.");

console.log('---\n');

// Advanced: Detailed sentiment analysis
console.log('=== Advanced Analysis ===\n');

function advancedFeedbackAnalysis(feedback) {
  var words = feedback.split(' ');
  var wordCount = words.length;
  
  // Positive keywords
  var positiveKeywords = ['great', 'excellent', 'amazing', 'good', 'fantastic', 'wonderful', 'love', 'best'];
  var positiveCount = 0;
  
  // Negative keywords
  var negativeKeywords = ['bad', 'poor', 'terrible', 'awful', 'worst', 'hate', 'disappointed'];
  var negativeCount = 0;
  
  var lowerFeedback = feedback.toLowerCase();
  
  positiveKeywords.forEach(function(keyword) {
    if (lowerFeedback.includes(keyword)) positiveCount++;
  });
  
  negativeKeywords.forEach(function(keyword) {
    if (lowerFeedback.includes(keyword)) negativeCount++;
  });
  
  console.log('Feedback: "' + feedback + '"');
  console.log('Word count: ' + wordCount);
  console.log('Positive keywords found: ' + positiveCount);
  console.log('Negative keywords found: ' + negativeCount);
  
  var score = positiveCount - negativeCount;
  var rating;
  
  if (score >= 2) rating = "Highly Positive ⭐⭐⭐⭐⭐";
  else if (score === 1) rating = "Positive ⭐⭐⭐⭐";
  else if (score === 0) rating = "Neutral ⭐⭐⭐";
  else if (score === -1) rating = "Negative ⭐⭐";
  else rating = "Highly Negative ⭐";
  
  console.log('Sentiment Score: ' + score);
  console.log('Rating: ' + rating);
  console.log('');
}

advancedFeedbackAnalysis("Great product! Fast delivery and amazing sound quality!");
advancedFeedbackAnalysis("The product quality is bad and delivery was delayed.");
advancedFeedbackAnalysis("Good product but poor packaging. Overall satisfied though.");

console.log('=== Methods Used ===');
console.log('✓ includes() - Check for specific keywords');
console.log('✓ split()    - Break string into words array');
console.log('✓ length     - Count characters and words');
console.log('✓ toLowerCase() - Case-insensitive comparison');
console.log('✓ Conditionals - Determine sentiment based on keywords');
console.log('====================');
