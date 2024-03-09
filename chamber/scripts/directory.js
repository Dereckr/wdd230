const url = "data/members.json";

const article = document.querySelector("article");

async function getMembersData(url){
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.)
}