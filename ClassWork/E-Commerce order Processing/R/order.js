// Function to get day name using switch
function getDayName(dayNumber) {
    let dayName;
    
    switch(dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            throw new Error("Invalid delivery day! Please select a day between 1 and 7.");
    }
    
    return dayName;
}

// Function to calculate total price using for loop
function calculateTotalPrice(price, quantity) {
    let totalPrice = 0;
    
    // Using for loop to add price for each quantity
    for(let i = 0; i < quantity; i++) {
        totalPrice += price;
    }
    
    return totalPrice;
}

// Function to apply discount based on total amount
function applyDiscount(totalAmount) {
    let discount = 0;
    let discountPercent = 0;
    
    if(totalAmount >= 2000) {
        discountPercent = 15;
        discount = totalAmount * 0.15;
    } else if(totalAmount >= 1000 && totalAmount < 2000) {
        discountPercent = 10;
        discount = totalAmount * 0.10;
    } else {
        discountPercent = 0;
        discount = 0;
    }
    
    return {
        discount: discount,
        discountPercent: discountPercent,
        finalAmount: totalAmount - discount
    };
}

// Main order processing function
function processOrder(priceInput, quantityInput, dayInput) {
    try {
        // Type conversion - convert inputs to numbers
        let price = Number(priceInput);
        let quantity = Number(quantityInput);
        let deliveryDay = Number(dayInput);
        
        // Validate if price and quantity are valid numbers
        if(isNaN(price) || price <= 0) {
            throw new Error("Price must be a valid positive number!");
        }
        
        if(isNaN(quantity) || quantity <= 0) {
            throw new Error("Quantity must be a valid positive number!");
        }
        
        // Validate delivery day
        if(isNaN(deliveryDay) || deliveryDay < 1 || deliveryDay > 7) {
            throw new Error("Delivery day must be between 1 and 7!");
        }
        
        // Get day name using switch
        let dayName = getDayName(deliveryDay);
        
        // Calculate total price using for loop
        let totalPrice = calculateTotalPrice(price, quantity);
        
        // Debugger statement to inspect calculations
        debugger;
        
        // Apply discount
        let billDetails = applyDiscount(totalPrice);
        
        // Return order details
        return {
            success: true,
            price: price,
            quantity: quantity,
            dayName: dayName,
            totalPrice: totalPrice,
            discount: billDetails.discount,
            discountPercent: billDetails.discountPercent,
            finalAmount: billDetails.finalAmount
        };
        
    } catch(error) {
        return {
            success: false,
            errorMessage: error.message
        };
    }
}

// Get form and result elements
const orderForm = document.getElementById('orderForm');
const resultDiv = document.getElementById('result');

// Handle form submission
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const priceInput = document.getElementById('productPrice').value;
    const quantityInput = document.getElementById('quantity').value;
    const dayInput = document.getElementById('deliveryDay').value;
    
    // Process the order
    const result = processOrder(priceInput, quantityInput, dayInput);
    
    if(result.success) {
        // Display success result with bill details
        resultDiv.innerHTML = `
            <div class="alert alert-success" role="alert">
                <h5 class="alert-heading">Order Processed Successfully!</h5>
                <hr>
                <p><strong>Product Price:</strong> ₹${result.price.toFixed(2)}</p>
                <p><strong>Quantity:</strong> ${result.quantity}</p>
                <p><strong>Subtotal:</strong> ₹${result.totalPrice.toFixed(2)}</p>
                <p><strong>Discount Applied:</strong> ${result.discountPercent}% (-₹${result.discount.toFixed(2)})</p>
                <p><strong>Delivery Day:</strong> ${result.dayName}</p>
                <hr>
                <h5><strong>Final Amount:</strong> ₹${result.finalAmount.toFixed(2)}</h5>
            </div>
        `;
    } else {
        // Display error message
        resultDiv.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <strong>Error!</strong> ${result.errorMessage}
            </div>
        `;
    }
});
