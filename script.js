// Navbar a, in base alla pagina sulla quale mi trovo, diventa automaticamente bianco.
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Frecce scroll card
let scrollAmount = 500;
let leftButtons = document.querySelectorAll('.scrollLeft');
let rightButtons = document.querySelectorAll('.scrollRight');
let scrollContainers = document.querySelectorAll('.scroll-horizontal');

for (let i = 0; i < leftButtons.length; i++) {
  leftButtons[i].addEventListener('click', function() {
    scrollContainers[i].scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  rightButtons[i].addEventListener('click', function() {
    scrollContainers[i].scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
}

//Hamburger icon
document.addEventListener("DOMContentLoaded", function() {
    let hamburgerButton = document.querySelector('.navbar-toggler');
    hamburgerButton.addEventListener('click', function() {
        if (hamburgerButton.classList.contains('collapsed')) {
            hamburgerButton.classList.remove('collapsed');
        } else {
            hamburgerButton.classList.add('collapsed');
        }
    });
});





