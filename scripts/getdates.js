
const options = {year:"numeric"};

document.getElementById("currentyear").textContent = new Date().toLocaleDateString("en-US", options);



const optionsModified = {day:"numeric", month:"numeric", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"};

document.getElementById("lastmodified").textContent = new Date(document.lastModified).toLocaleDateString("en-US", optionsModified);
