const bannerClose = document.querySelector(".bannerclose");
const banner = document.querySelector("#banner");

bannerClose.addEventListener("click", () => {
  banner.style.display = "none";
});
