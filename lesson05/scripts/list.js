const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document .querySelector("#list");

button.addEventListener("click", ()=>{
    if (input.value != ""){
    const myChap = input.value;
    input.value = "";

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = myChap;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", ()=>{
        li.remove();
        input.focus();
    })


    input.focus();





}
}
)