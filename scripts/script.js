const hamburgerButton = document.querySelector(".header__hamburgerMenu");
const header = document.querySelector(".header");
const backgroundOverlay = document.querySelector(".overlay");
const backgroundFade = document.querySelectorAll(".background-fade-register");
const body = document.querySelector("body");

hamburgerButton.addEventListener("click", () => {
  console.log("button clicked");
  let classHamCheck = header.classList.contains("open");

  if (classHamCheck) {
    // close menu
    body.classList.remove("scrollBlocked");
    header.classList.remove("open");
    backgroundFade.forEach((elem) => {
      elem.classList.remove("background-fade-in");
      elem.classList.add("background-fade-out");
    });
  } else {
    // open menu
    body.classList.add("scrollBlocked");
    header.classList.add("open");
    backgroundFade.forEach((elem) => {
      elem.classList.remove("background-fade-out");
      elem.classList.add("background-fade-in");
    });
  }
});
