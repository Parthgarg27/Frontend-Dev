// Q2: Student Form Validator
function validateStudentForm(name, email, phone, password) {
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;

    return {
        nameValid: nameRegex.test(name),
        emailValid: emailRegex.test(email),
        phoneValid: phoneRegex.test(phone),
        passwordValid: passwordRegex.test(password)
    };
}

console.log(validateStudentForm("John", "john@mail.com", "9876543210", "Pass@123"));
