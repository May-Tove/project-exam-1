// showing menu when clicked on mobile version
const showMenu = () => {
  const menuBtn = document.querySelector(".menu-btn");
  const closeMenuButton = document.querySelector(".close-menu");
  const mainMenu = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    mainMenu.classList.toggle("show");
  });

  menuBtn.addEventListener("onkeydown", () => {
    mainMenu.classList.toggle("show");
  });
};

showMenu();

//close menu
const closeMenu = () => {
  const closeMenuButton = document.querySelector(".close-menu");
  const mainMenu = document.querySelector(".nav-links");

  closeMenuButton.addEventListener("click", () => {
    mainMenu.classList.remove("show");
  });
};

closeMenu();

// change nav on scroll
const header = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("navbar-change");
  } else {
    header.classList.remove("navbar-change");
  }
});
