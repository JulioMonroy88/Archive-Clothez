let slideIndex = 1;
showSlides(slideIndex);

// Control de siguiente/anterior
function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Control por puntos
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");
  
  if (n > slides.length) {
    slideIndex = 1; // Volver al inicio
  }
  if (n < 1) {
    slideIndex = slides.length; // Ir al final
  }
  
  // Calcular el desplazamiento necesario
  let offset = (slideIndex - 1) * -100;
  document.querySelector(".carousel-track").style.transform = `translateX(${offset}%)`;
  
  // Actualizar los puntos de navegación
  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex - 1].classList.add("active");
}

/* OPCIONAL: Carrusel Automático (descomentar para activar) 

function autoSlide() {
  moveSlide(1); 
  setTimeout(autoSlide, 5000); // Cambia cada 5 segundos
}

window.onload = autoSlide; // Inicia el carrusel automático al cargar

*/