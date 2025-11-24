// image-gallery.js
// Image gallery with modal preview. Clicking an image opens modal with larger image.
// Clicking outside the modal content closes it. Use stopPropagation to prevent inside clicks closing it.

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const modalImage = document.getElementById('modalImage');

// Delegate click on gallery images
gallery.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;
  const largeSrc = img.getAttribute('data-large') || img.src;
  openModalWithImage(largeSrc, img.alt || '');
});

function openModalWithImage(src, alt) {
  modalImage.src = src;
  modalImage.alt = alt;
  modal.hidden = false;
}

// Close when clicking outside modal-content
modal.addEventListener('click', () => {
  closeModal();
});

// Prevent clicks inside modal-content from closing
modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Close helper
function closeModal() {
  modal.hidden = true;
  modalImage.src = '';
}
