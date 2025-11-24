// char-counter.js
// Live character counter with warning at 20 chars and prevent typing past 0 remaining.

const textarea = document.getElementById('messageBox');
const counterSpan = document.getElementById('charCounter');
const resetBtn = document.getElementById('resetBtn');

const MAX_CHARS = 100;
const WARNING_THRESHOLD = 20;

function updateCounter(event) {
  // For preventing additional input when at limit using preventDefault on keydown,
  // we handle that separately. Here we just update display based on current value.
  const remaining = MAX_CHARS - textarea.value.length;
  counterSpan.textContent = remaining;

  // styling
  counterSpan.classList.remove('warning', 'danger');
  if (remaining <= 0) {
    counterSpan.classList.add('danger');
  } else if (remaining <= WARNING_THRESHOLD) {
    counterSpan.classList.add('warning');
  }
}

// Prevent typing when limit reached
textarea.addEventListener('keydown', (e) => {
  const remaining = MAX_CHARS - textarea.value.length;
  const isControlKey = e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Tab' || e.ctrlKey || e.metaKey;
  if (remaining <= 0 && !isControlKey) {
    // Block additional character input
    e.preventDefault();
    // ensure UI updates to show 0
    updateCounter();
  }
});

// Also handle paste to prevent overflow
textarea.addEventListener('paste', (e) => {
  const pasteText = (e.clipboardData || window.clipboardData).getData('text');
  const remaining = MAX_CHARS - textarea.value.length;
  if (pasteText.length > remaining) {
    e.preventDefault();
    // insert only allowed portion
    const allowed = pasteText.slice(0, remaining);
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = textarea.value.slice(0, start) + allowed + textarea.value.slice(end);
    textarea.value = newText;
    updateCounter();
  }
});

textarea.addEventListener('input', updateCounter);

// Reset button
resetBtn.addEventListener('click', () => {
  textarea.value = '';
  updateCounter();
});

// Initialize
updateCounter();
