const animeLeft = document.querySelectorAll("[data-anime='left']");
const animeRight = document.querySelectorAll("[data-anime='right']");
const animeTop = document.querySelectorAll("[data-anime='top']");
const animeBot = document.querySelectorAll("[data-anime='top']");
const scrollPage = document.querySelectorAll("[data-scroll]");
animeLeft.forEach((animeLeft) => {
  animeLeft.classList.add("ativo");
});
animeRight.forEach((animeRight) => {
  animeRight.classList.add("ativo");
});
animeTop.forEach((animeTop) => {
  animeTop.classList.add("ativo");
});
animeBot.forEach((animeBot) => {
  animeBot.classList.add("ativo");
});
function scrollDaPagina() {
  scrollPage.forEach((scroll) => {
    const scrollToTop = scroll.getBoundingClientRect().top;
    const windowMetade = window.innerHeight * 0.6;
    const isSectionVisible = scrollToTop - windowMetade < 0;
    if (isSectionVisible) {
      scroll.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", scrollDaPagina);
