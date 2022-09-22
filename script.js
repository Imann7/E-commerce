const scrollTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
});
