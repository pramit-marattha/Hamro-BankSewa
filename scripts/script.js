const hamburgerButton = document.querySelector(".header__hamburgerMenu");
const header = document.querySelector(".header");
const backgroundOverlay = document.querySelector(".overlay");

hamburgerButton.addEventListener("click", () => {
  console.log("button clicked");
  let classHamCheck = header.classList.contains("open");

  if (classHamCheck) {
    // close menu
    header.classList.remove("open");
    backgroundOverlay.classList.remove("background-fade-in");
    backgroundOverlay.classList.add("background-fade-out");
  } else {
    // open menu
    header.classList.add("open");
    backgroundOverlay.classList.remove("background-fade-out");
    backgroundOverlay.classList.add("background-fade-in");
  }
});
