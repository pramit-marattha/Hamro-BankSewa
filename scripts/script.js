const hamburgerButton = document.querySelector(".header__hamburgerMenu");

hamburgerButton.addEventListener("click", () => {
  console.log("button clicked");
  let classHamCheck = hamburgerButton.classList.contains("open");

  if (classHamCheck) {
    hamburgerButton.classList.remove("open");
  } else {
    hamburgerButton.classList.add("open");
  }
});
