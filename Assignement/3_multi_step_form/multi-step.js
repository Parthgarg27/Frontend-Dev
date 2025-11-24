// multi-step.js
// 3-step form with validation for each step. Next advances only when current input is valid.

const form = document.getElementById('multiStepForm');
const steps = Array.from(document.querySelectorAll('.step'));
let currentStepIndex = 0;

const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

function showStep(index) {
  steps.forEach((step, i) => {
    step.hidden = i !== index;
  });
  currentStepIndex = index;
}

// Validation functions
function validateName() {
  return nameInput.value.trim().length > 0;
}
function validateEmail() {
  return /\S+@\S+\.\S+/.test(emailInput.value);
}
function validatePassword() {
  return passwordInput.value.length >= 6;
}

// Wire buttons
document.getElementById('next1').addEventListener('click', () => {
  if (!validateName()) {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }
  showStep(1);
});

document.getElementById('back2').addEventListener('click', () => showStep(0));
document.getElementById('next2').addEventListener('click', () => {
  if (!validateEmail()) {
    alert('Please enter a valid email.');
    emailInput.focus();
    return;
  }
  showStep(2);
});
document.getElementById('back3').addEventListener('click', () => showStep(1));
document.getElementById('finishBtn').addEventListener('click', () => {
  if (!validatePassword()) {
    alert('Password must be at least 6 characters.');
    passwordInput.focus();
    return;
  }
  // All steps valid -> show summary
  const summaryContent = document.getElementById('summaryContent');
  const summaryData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    password: '●'.repeat(Math.min(8, passwordInput.value.length)) + (passwordInput.value.length > 8 ? '…' : '')
  };
  summaryContent.textContent = JSON.stringify(summaryData, null, 2);
  document.getElementById('summary').hidden = false;
  // Optionally hide form
  form.hidden = true;
});

// show initial step
showStep(0);
