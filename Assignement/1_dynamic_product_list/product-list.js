// product-list.js
// Product List Manager with Add, Edit (inline) and Delete using Event Delegation.
// - Add via input and Add button
// - Edit enables inline editing; clicking outside saves automatically
// - Event delegation on the UL element handles Edit/Delete

const inputProduct = document.getElementById('newProductInput');
const addProductBtn = document.getElementById('addProductBtn');
const productList = document.getElementById('productList');

// Helper: create a list item DOM for a product name
function createProductListItem(productName) {
  const li = document.createElement('li');
  li.setAttribute('data-name', productName);

  const span = document.createElement('span');
  span.className = 'product-name';
  span.textContent = productName;
  span.tabIndex = 0; // focusable for accessibility

  const controls = document.createElement('div');
  controls.className = 'controls';

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit';

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';

  controls.appendChild(editBtn);
  controls.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(controls);

  return li;
}

// Add product
addProductBtn.addEventListener('click', () => {
  const name = inputProduct.value.trim();
  if (!name) return;
  const li = createProductListItem(name);
  productList.appendChild(li);
  inputProduct.value = '';
  inputProduct.focus();
});

// Handle Enter key in input
inputProduct.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addProductBtn.click();
});

// Event delegation on UL for Edit and Delete
productList.addEventListener('click', (e) => {
  const target = e.target;
  const li = target.closest('li');
  if (!li) return;

  // Delete
  if (target.classList.contains('delete-btn')) {
    li.remove();
    return;
  }

  // Edit button clicked
  if (target.classList.contains('edit-btn')) {
    enterEditMode(li);
    return;
  }
});

// Allow keyboard activation for Edit (Enter on focused product name)
productList.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('product-name')) {
    const li = e.target.closest('li');
    enterEditMode(li);
  }
});

let currentlyEditing = null;

// Enter inline edit mode for a list item
function enterEditMode(li) {
  // If another item was being edited, save it first
  if (currentlyEditing && currentlyEditing !== li) {
    saveEdit(currentlyEditing);
  }
  if (li.classList.contains('editing')) return;

  li.classList.add('editing');
  const nameSpan = li.querySelector('.product-name');
  const currentText = nameSpan.textContent;

  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentText;
  input.className = 'inline-editor';

  // Replace span with input
  li.insertBefore(input, nameSpan);
  nameSpan.style.display = 'none';
  input.focus();
  input.select();

  // Save on Enter
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      saveEdit(li);
    } else if (e.key === 'Escape') {
      cancelEdit(li);
    }
  });

  // Remember currently editing item
  currentlyEditing = li;
}

// Save current edit
function saveEdit(li) {
  const input = li.querySelector('.inline-editor');
  const nameSpan = li.querySelector('.product-name');
  if (!input) return;

  const newVal = input.value.trim();
  if (newVal) {
    nameSpan.textContent = newVal;
    li.setAttribute('data-name', newVal);
  }
  cleanupEdit(li);
}

// Cancel edit (restore previous text)
function cancelEdit(li) {
  cleanupEdit(li);
}

// Clean up edit mode elements
function cleanupEdit(li) {
  const input = li.querySelector('.inline-editor');
  const nameSpan = li.querySelector('.product-name');
  if (input) input.remove();
  if (nameSpan) nameSpan.style.display = '';
  li.classList.remove('editing');
  currentlyEditing = null;
}

// Auto-save if user clicks outside the edited item
document.addEventListener('click', (event) => {
  if (!currentlyEditing) return;
  const clickedInside = currentlyEditing.contains(event.target);
  if (!clickedInside) {
    saveEdit(currentlyEditing);
  }
});
