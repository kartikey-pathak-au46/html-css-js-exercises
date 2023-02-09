const navbarEl = document.querySelector(".navbar");
const bottomcontainerEl = document.querySelector(".bottom-container");

console.log(bottomconstainerEl.offsetTop);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomcontainerEl.offsetTop - navbbarEl.offsetHeightv - 50
  ) {
    navbarEl.classList.add(".active");
  } else {
    navbarEl.classList.remove(".active");
  }
});
