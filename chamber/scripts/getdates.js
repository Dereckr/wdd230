
const options = {year:"numeric"};

document.getElementById("currentyear").textContent = new Date().toLocaleDateString("en-US", options);



const optionsModified = {day:"numeric", month:"numeric", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"};

document.getElementById("lastmodified").textContent = new Date(document.lastModified).toLocaleDateString("en-US", optionsModified);

const hamButton = document.querySelector("#options");
const pages = document.querySelector(".pages");

hamButton.addEventListener("click", ()=>{
    pages.classList.toggle("open");
    hamButton.classList.toggle("open");
});
