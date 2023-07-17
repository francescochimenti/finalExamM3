// Esercizio EXTRA

// L'elemento si vede nella porzione di pagina attualmente visibile?
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
  // Se anche solo una di queste condizioni non è vera, allora l'elemento non è completamente visibile
}

// Mostra o nasconde l'elemento e aggiunge un transizione carina
function handleScroll() {
  const cols = document.querySelectorAll('.container-fluid');
  for (const col of cols) {
    if (isInViewport(col)) {
      col.style.transition = "opacity 1s";
      col.style.opacity = 1;
    } else {
      col.style.opacity = 0;
    }
  }
}
//Chiama handleScroll quando scorro la pagina.
window.addEventListener('scroll', handleScroll);

// Navbar a, in base alla pagina sulla quale mi trovo, diventa automaticamente bianco.
let links = document.querySelectorAll(".nav-link");
for (let i = 0; i < links.length; i++) {
  if (links[i].href === window.location.href) {
    links[i].classList.add("active");
  }
}

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
/* Non ho ciclato anche il button right, perchè so che entrambi i bottoni sono sempre presenti entrambi nello stesso contenitore, se no sarebbe stato necessario ciclarli entrambi */
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

