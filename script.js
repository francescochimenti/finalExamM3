// Navbar a, in base alla pagina sulla quale mi trovo, diventa automaticamente bianco.
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Frecce scroll card
let scrollAmount = 500;
let leftButtons = document.querySelectorAll(".scrollLeft");
let rightButtons = document.querySelectorAll(".scrollRight");
let scrollContainers = document.querySelectorAll(".scroll-horizontal");

for (let i = 0; i < leftButtons.length; i++) {
  leftButtons[i].addEventListener("click", function () {
    scrollContainers[i].scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  rightButtons[i].addEventListener("click", function () {
    scrollContainers[i].scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
}

//Hamburger icon
document.addEventListener("DOMContentLoaded", function () {
  let hamburgerButton = document.querySelector(".navbar-toggler");
  hamburgerButton.addEventListener("click", function () {
    if (hamburgerButton.classList.contains("collapsed")) {
      hamburgerButton.classList.remove("collapsed");
    } else {
      hamburgerButton.classList.add("collapsed");
    }
  });
});

// Esercizio EXTRA

// Funzione per verificare se un elemento è nel viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
// Funzione per gestire l'evento scroll
function handleScroll() {
  const cols = document.querySelectorAll('.container-fluid');

  cols.forEach((col) => {
    if (isInViewport(col)) {
      col.style.transition = "opacity 1s";
      col.style.opacity = 1;
    } else {
      col.style.opacity = 0;
    }
  });
}
window.addEventListener('scroll', handleScroll);

