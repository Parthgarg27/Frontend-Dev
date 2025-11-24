function processOrder() {
  try {
    // Taking user inputs
    let priceInput = prompt("Enter product price:");
    let qtyInput = prompt("Enter product quantity:");
    let dayInput = prompt("Enter delivery day number (1–7):");

    // Type conversion
    let price = Number(priceInput);
    let quantity = Number(qtyInput);
    let dayNum = Number(dayInput);

    // Error handling: price & quantity must be numbers
    if (isNaN(price) || isNaN(quantity)) {
      throw new Error("Price and quantity must be valid numbers!");
    }

    // Error handling: delivery day must be 1–7
    if (dayNum < 1 || dayNum > 7 || isNaN(dayNum)) {
      throw new Error("Delivery day must be a number between 1 and 7!");
    }

    // Switch to convert day number → day name
    let deliveryDay;
    switch (dayNum) {
      case 1:
        deliveryDay = "Monday";
        break;
      case 2:
        deliveryDay = "Tuesday";
        break;
      case 3:
        deliveryDay = "Wednesday";
        break;
      case 4:
        deliveryDay = "Thursday";
        break;
      case 5:
        deliveryDay = "Friday";
        break;
      case 6:
        deliveryDay = "Saturday";
        break;
      case 7:
        deliveryDay = "Sunday";
        break;
      default:
        throw new Error("Invalid delivery day!"); // fallback (won’t occur)
    }

    // For loop to compute total price = price * quantity
    let total = 0;
    for (let i = 0; i < quantity; i++) {
      total += price;
    }

    debugger; // Debugger point to inspect total price and discount calculation

    // Apply discount
    let discount = 0;

    if (total > 2000) {
      discount = 0.15; // 15%
    } else if (total >= 1000 && total <= 2000) {
      discount = 0.1; // 10%
    }

    let discountAmount = total * discount;
    let finalBill = total - discountAmount;

    // Display final bill
    console.log("------ FINAL BILL ------");
    console.log(`Price per item : ${price}`);
    console.log(`Quantity       : ${quantity}`);
    console.log(`Total Price    : ${total}`);
    console.log(`Discount       : ${discount * 100}%`);
    console.log(`Amount Saved   : ${discountAmount}`);
    console.log(`Final Bill     : ${finalBill}`);
    console.log(`Delivery Day   : ${deliveryDay}`);
    console.log("------------------------");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Run the order processor
processOrder();
