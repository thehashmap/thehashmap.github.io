let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

const backToTopButton = document.getElementById("back-to-top");
const colorToggle = document.getElementById("color-toggle-input");

// Typing effect with typed.js
const typed = new Typed(".animate", {
  strings: ["Web Developer", "IITian", "Sports fanatic"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 500,
  startDelay: 1000,
  loop: true,
});

// Mobile hamburger-menu
function navSlider() {
  const burgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".links");
  const links = document.querySelectorAll(".links li");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burgerMenu.classList.toggle("toggle");
  });
}
navSlider();

// Button entrance and exit
function scrollDownFunction() {
  if (window.pageYOffset > 1000) {
    // Show backToTopButton
    if (!backToTopButton.classList.contains("btn-entrance")) {
      backToTopButton.classList.remove("btn-exit");
      backToTopButton.classList.add("btn-entrance");
      backToTopButton.style.display = "block";
    }
  } else {
    // Hide backToTopButton
    if (backToTopButton.classList.contains("btn-entrance")) {
      backToTopButton.classList.remove("btn-entrance");
      backToTopButton.classList.add("btn-exit");
      setTimeout(() => {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

// Back to top button
function backToTop() {
  window.scrollTo(0, 0);
}

// Toggle dark mode
function checkMode() {
  if (colorToggle.checked) {
    darkModeOn();
  } else {
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("light-mode");
}

function darkModeOff() {
  document.body.classList.remove("light-mode");
}

window.addEventListener("scroll", scrollDownFunction);
backToTopButton.addEventListener("click", backToTop);
colorToggle.addEventListener("click", checkMode);