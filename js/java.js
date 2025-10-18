function openModal(title, imgSrc, description, tallas) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('modal-description').textContent = description;

  const tallasSelect = document.getElementById('tallas');
  tallasSelect.innerHTML = '';
  tallas.forEach(talla => {
    const option = document.createElement('option');
    option.value = talla;
    option.textContent = talla;
    tallasSelect.appendChild(option);
  });

  document.getElementById('modal').style.display = 'flex'
}

function closeModal() {
  document.getElementById('modal').style.display = 'none'
}

function addToCart() {
  alert('¡Producto añadido al carrito!')
}