const msToDays = 84600000;
const theDateToday = new Date();

const visitsDisplay = document.querySelector(".latest-visit");

let lastVisit = new Date(window.localStorage.getItem("lastVisit")) || 0;

let daysDifference = Math.round((Date.now() - lastVisit.getTime()) / msToDays);
console.log(daysDifference);
console.log(lastVisit.getTime());
console.log(Date.now());

if (daysDifference == 0) {
  visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysDifference == 1) {
  visitsDisplay.textContent = "You last visited 1 day ago";
} else {
  visitsDisplay.textContent = `You last visited ${daysDifference} days ago`;
}

localStorage.setItem("lastVisit", theDateToday);
