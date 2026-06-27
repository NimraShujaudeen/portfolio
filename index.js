// Active navbar link on scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 120;
    let sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Scroll reveal animation
const cards = document.querySelectorAll(
  ".home-content, .home-img, .about-box, .skill-card, .project-card, .contact form"
);

const revealOnScroll = () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Contact form message
const form = document.querySelector(".contact form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Thank you! Your message has been submitted.");

  form.reset();
});