// Navbar home bg
let navbar = document.querySelector(".navbarHome");
window.addEventListener("scroll", function () {
  let halfPage = document.body.scrollHeight / 7;
  if (window.scrollY > halfPage) {
    navbar.classList.add("myNavNav");
  } else {
    navbar.classList.remove("myNavNav");
  }
});

// Video button
let video = document.querySelector(".mainVideo");
let muteButton = document.getElementById("muteButton");
muteButton.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    muteButton.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>';
  } else {
    video.muted = true;
    muteButton.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>';
  }
});