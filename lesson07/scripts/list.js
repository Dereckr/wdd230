const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document .querySelector("#list");
let chaptersArray = getChaptersList() || [];
chaptersArray.forEach(chapter => {displayList(chapter);
    
});

button.addEventListener("click", ()=>{
    if (input.value != ""){
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();  
    }
input.focus();
})

function displayList(item){
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.setAttribute("aria-label","delete button")
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", ()=>{
        li.remove();
        input.focus();   
    })
}

function setChapterList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChaptersList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
