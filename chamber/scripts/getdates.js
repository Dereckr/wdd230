// Year

const options = {year:"numeric"};

document.getElementById("currentyear").textContent = new Date().toLocaleDateString("en-US", options);


// Last Modified
const optionsModified = {day:"numeric", month:"numeric", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"};

document.getElementById("lastmodified").textContent = new Date(document.lastModified).toLocaleDateString("en-US", optionsModified);



const hamButton = document.querySelector("#options");
const pages = document.querySelector(".pages");

hamButton.addEventListener("click", ()=>{
    pages.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Dark Mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const borders = document.querySelectorAll(".borders");

modeButton.addEventListener("click",() => {
    if (modeButton.textContent.includes("🌛")){
    main.style.backgroundColor = "#000";
    main.style.color = "#fff";
    borders.forEach(borders =>{ borders.style.borderColor = "#fff";
});
    modeButton.textContent="☀";
} else{
    main.style.backgroundColor = "#fff";
    main.style.color = "#000";
    borders.forEach(borders =>{ borders.style.borderColor = "#000";
});
    modeButton.textContent="🌛";

}

})

// Input date

let dateForm = document.querySelector("#date");

const DateToday = Date.now();

dateForm.setAttribute("value",DateToday);

localStorage.setItem("visitday", DateToday);
