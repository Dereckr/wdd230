const bannerClose = document.querySelector(".bannerclose");
const banner = document.querySelector("#banner");

bannerClose.addEventListener("click", () => {
  banner.style.display = "none";
});

let today = new Date().getDay();
console.log(today);
if (today == 4 || today == 5 || today == 6 || today == 0) {
  banner.style.display = "none";
} else {
  banner.style.display = "block";
}
