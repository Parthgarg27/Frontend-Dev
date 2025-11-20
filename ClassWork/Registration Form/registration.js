// Regex patterns for validation
const regexPatterns = {
    fullName: /^[A-Za-z\s]{3,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^[0-9]{10}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    username: /^[a-zA-Z0-9_]{4,15}$/,
    website: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/
};

// Error messages
const errorMessages = {
    fullName: "Name must contain only letters and spaces (min 3 characters)",
    email: "Please enter a valid email address",
    phone: "Phone number must be exactly 10 digits",
    password: "Password must be at least 8 characters with uppercase, lowercase, number and special character",
    confirmPassword: "Passwords do not match",
    username: "Username must be 4-15 characters (letters, numbers, underscore only)",
    website: "Please enter a valid URL (http:// or https://)"
};

// Function to validate field using regex
function validateField(fieldId, pattern, errorMsg) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    const feedback = field.parentElement.querySelector('.invalid-feedback');
    
    // Skip validation for optional fields if empty
    if(fieldId === 'website' && value === '') {
        field.classList.remove('is-invalid', 'is-valid');
        return true;
    }
    
    if(pattern.test(value)) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
        return true;
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
        feedback.textContent = errorMsg;
        return false;
    }
}

// Function to validate password match
function validatePasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword');
    const feedback = confirmPassword.parentElement.querySelector('.invalid-feedback');
    
    if(password === confirmPassword.value && confirmPassword.value !== '') {
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
        return true;
    } else {
        confirmPassword.classList.remove('is-valid');
        confirmPassword.classList.add('is-invalid');
        feedback.textContent = errorMessages.confirmPassword;
        return false;
    }
}

// Add real-time validation on input
document.getElementById('fullName').addEventListener('input', function() {
    validateField('fullName', regexPatterns.fullName, errorMessages.fullName);
});

document.getElementById('email').addEventListener('input', function() {
    validateField('email', regexPatterns.email, errorMessages.email);
});

document.getElementById('phone').addEventListener('input', function() {
    validateField('phone', regexPatterns.phone, errorMessages.phone);
});

document.getElementById('password').addEventListener('input', function() {
    validateField('password', regexPatterns.password, errorMessages.password);
    // Also validate confirm password if it has value
    if(document.getElementById('confirmPassword').value !== '') {
        validatePasswordMatch();
    }
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    validatePasswordMatch();
});

document.getElementById('username').addEventListener('input', function() {
    validateField('username', regexPatterns.username, errorMessages.username);
});

document.getElementById('website').addEventListener('input', function() {
    const value = this.value.trim();
    if(value !== '') {
        validateField('website', regexPatterns.website, errorMessages.website);
    } else {
        this.classList.remove('is-invalid', 'is-valid');
    }
});

// Form submission handler
const form = document.getElementById('registrationForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField('fullName', regexPatterns.fullName, errorMessages.fullName);
    const isEmailValid = validateField('email', regexPatterns.email, errorMessages.email);
    const isPhoneValid = validateField('phone', regexPatterns.phone, errorMessages.phone);
    const isPasswordValid = validateField('password', regexPatterns.password, errorMessages.password);
    const isPasswordMatch = validatePasswordMatch();
    const isUsernameValid = validateField('username', regexPatterns.username, errorMessages.username);
    
    const websiteValue = document.getElementById('website').value.trim();
    let isWebsiteValid = true;
    if(websiteValue !== '') {
        isWebsiteValid = validateField('website', regexPatterns.website, errorMessages.website);
    }
    
    // Check if all validations passed
    if(isNameValid && isEmailValid && isPhoneValid && isPasswordValid && 
       isPasswordMatch && isUsernameValid && isWebsiteValid) {
        
        // Get form data
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            username: document.getElementById('username').value,
            website: websiteValue || 'Not provided'
        };
        
        // Display success message
        resultDiv.innerHTML = `
            <div class="alert alert-success" role="alert">
                <h5 class="alert-heading">Registration Successful!</h5>
                <hr>
                <div class="validation-item"><strong>Name:</strong> ${formData.fullName}</div>
                <div class="validation-item"><strong>Email:</strong> ${formData.email}</div>
                <div class="validation-item"><strong>Phone:</strong> ${formData.phone}</div>
                <div class="validation-item"><strong>Username:</strong> ${formData.username}</div>
                <div class="validation-item"><strong>Website:</strong> ${formData.website}</div>
                <hr>
                <p class="mb-0">All fields validated successfully using Regex patterns!</p>
            </div>
        `;
        
        // Reset form
        form.reset();
        document.querySelectorAll('.form-control').forEach(field => {
            field.classList.remove('is-valid', 'is-invalid');
        });
        
    } else {
        resultDiv.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <strong>Validation Failed!</strong> Please correct the errors above and try again.
            </div>
        `;
    }
});
