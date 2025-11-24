// theme-switcher.js
// Apply themes by setting data-theme attribute on <body> using setAttribute.
// Buttons have data-theme values; current theme is stored in body.dataset.theme

const themeButtons = document.querySelectorAll('.theme-btn');
const bodyEl = document.body;

// Load saved theme from attribute if present (preserve across reloads by reading attribute)
const initialTheme = bodyEl.getAttribute('data-theme') || 'light';
bodyEl.setAttribute('data-theme', initialTheme);

// Apply when buttons clicked
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const chosen = btn.getAttribute('data-theme');
    // Apply theme by setAttribute
    bodyEl.setAttribute('data-theme', chosen);
    // Persist to localStorage so reload keeps it (optional but useful)
    try { localStorage.setItem('preferredTheme', chosen); } catch (e) {}
  });
});

// Attempt to read persisted theme from localStorage and apply on load
try {
  const saved = localStorage.getItem('preferredTheme');
  if (saved) {
    bodyEl.setAttribute('data-theme', saved);
  }
} catch(e) {}
