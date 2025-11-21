/* Q8. Dynamic Discount Evaluator
   
   Store discount system based on categories and cart total.
   Uses: array of objects, loops, conditionals, reduce()
*/

console.log('=== Dynamic Discount Evaluator ===\n');

// Shopping cart with products
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

console.log('Shopping Cart:');
console.log('');

// Display cart items
cart.forEach(function(product, index) {
  console.log((index + 1) + '. ' + product.item);
  console.log('   Category: ' + product.category);
  console.log('   Price: ₹' + product.price);
  console.log('');
});

// Calculate discount for each item based on category
console.log('=== Applying Category Discounts ===\n');

var itemsWithDiscount = cart.map(function(product) {
  var discountPercentage = 0;
  var discountReason = '';
  
  // Apply category-specific discounts
  if (product.category === "electronics") {
    discountPercentage = 10;
    discountReason = "Electronics discount";
  } else if (product.category === "fashion") {
    discountPercentage = 5;
    discountReason = "Fashion discount";
  } else {
    discountPercentage = 0;
    discountReason = "No category discount";
  }
  
  var discountAmount = (product.price * discountPercentage) / 100;
  var discountedPrice = product.price - discountAmount;
  
  console.log(product.item + ' (' + product.category + '):');
  console.log('  Original Price: ₹' + product.price);
  console.log('  Discount: ' + discountPercentage + '% (' + discountReason + ')');
  console.log('  Discount Amount: ₹' + discountAmount);
  console.log('  After Discount: ₹' + discountedPrice);
  console.log('');
  
  return {
    ...product,
    discountPercentage: discountPercentage,
    discountAmount: discountAmount,
    discountedPrice: discountedPrice
  };
});

// Calculate subtotal using reduce()
var subtotal = itemsWithDiscount.reduce(function(acc, product) {
  return acc + product.discountedPrice;
}, 0);

console.log('Subtotal (after category discounts): ₹' + subtotal);
console.log('');

// Check if cart total qualifies for additional discount
var additionalDiscountPercent = 0;
var additionalDiscountAmount = 0;

if (subtotal > 50000) {
  additionalDiscountPercent = 5;
  additionalDiscountAmount = (subtotal * 5) / 100;
  console.log('🎉 Cart value exceeds ₹50,000!');
  console.log('   Additional ' + additionalDiscountPercent + '% discount applied!');
} else {
  var amountNeeded = 50000 - subtotal;
  console.log('Cart value: ₹' + subtotal);
  console.log('Add ₹' + amountNeeded.toFixed(2) + ' more to get extra 5% off!');
}

console.log('');

// Calculate final total
var finalTotal = subtotal - additionalDiscountAmount;

// Calculate total savings
var originalTotal = cart.reduce(function(acc, product) {
  return acc + product.price;
}, 0);

var totalSavings = originalTotal - finalTotal;
var savingsPercentage = (totalSavings / originalTotal) * 100;

// Display detailed bill
console.log('╔═══════════════════════════════════════════╗');
console.log('║           PURCHASE SUMMARY                ║');
console.log('╠═══════════════════════════════════════════╣');

cart.forEach(function(product) {
  var itemLine = '║ ' + product.item.padEnd(37) + '    ║';
  console.log(itemLine);
  console.log('║   ₹' + product.price.toString().padEnd(38) + '║');
});

console.log('╠═══════════════════════════════════════════╣');
console.log('║ Original Total      : ₹' + originalTotal.toString().padEnd(18) + '║');
console.log('║ After Category Disc : ₹' + subtotal.toFixed(2).padEnd(18) + '║');

if (additionalDiscountAmount > 0) {
  console.log('║ Additional Disc (5%): -₹' + additionalDiscountAmount.toFixed(2).padEnd(17) + '║');
}

console.log('╠═══════════════════════════════════════════╣');
console.log('║ FINAL TOTAL         : ₹' + finalTotal.toFixed(2).padEnd(18) + '║');
console.log('║ You Saved           : ₹' + totalSavings.toFixed(2).padEnd(18) + '║');
console.log('║ Savings Percentage  : ' + savingsPercentage.toFixed(1).padEnd(20) + '%║');
console.log('╚═══════════════════════════════════════════╝');

// Test with different cart scenarios
console.log('\n\n=== Testing Large Cart (>50k) ===\n');

const largeCart = [
  { item: "Gaming Laptop", category: "electronics", price: 75000 },
  { item: "Smartphone", category: "electronics", price: 35000 },
  { item: "Headphones", category: "electronics", price: 8000 },
  { item: "Jacket", category: "fashion", price: 4000 }
];

console.log('Large Cart Items:');
largeCart.forEach(function(product) {
  console.log('- ' + product.item + ': ₹' + product.price + ' (' + product.category + ')');
});
console.log('');

var largeCartSubtotal = largeCart.reduce(function(acc, product) {
  var discount = 0;
  if (product.category === "electronics") discount = 10;
  else if (product.category === "fashion") discount = 5;
  
  var discountedPrice = product.price - (product.price * discount / 100);
  return acc + discountedPrice;
}, 0);

console.log('Subtotal after category discounts: ₹' + largeCartSubtotal);

if (largeCartSubtotal > 50000) {
  var extraDiscount = largeCartSubtotal * 0.05;
  var largeFinalTotal = largeCartSubtotal - extraDiscount;
  console.log('✓ Qualifies for extra 5% discount: ₹' + extraDiscount);
  console.log('Final Total: ₹' + largeFinalTotal.toFixed(2));
} else {
  console.log('Final Total: ₹' + largeCartSubtotal.toFixed(2));
}

console.log('\n=== Concepts Used ===');
console.log('✓ Array of objects');
console.log('✓ forEach() loop for display');
console.log('✓ map() to transform cart with discounts');
console.log('✓ reduce() to calculate totals');
console.log('✓ Conditional statements for discount logic');
console.log('✓ Nested conditionals for category matching');
console.log('=====================');
