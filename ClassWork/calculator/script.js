
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Custom Error: Cannot divide by zero!");
        }
        
        return a / b;
    } catch (error) {
        throw error;
    }
}

// Get form and result elements
const form = document.getElementById('calcForm');
const resultDiv = document.getElementById('result');

// Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    try {
        // Call divide function
        const result = divide(num1, num2);
        
        // Display success result
        resultDiv.innerHTML = `
            <div class="alert alert-success" role="alert">
                <strong>Result:</strong> ${num1} ÷ ${num2} = ${result}
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <strong>Error!</strong> ${error.message}
            </div>
        `;
    }
});
