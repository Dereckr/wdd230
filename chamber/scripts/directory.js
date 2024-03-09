const url = "data/members.json";

const article = document.querySelector("article");

async function getMembersData(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    const section = document.createElement("section");
    const image = document.createElement("img");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const anchor = document.createElement("a");
    image.setAttribute("href", member.url);
    image.setAttribute("alt",`${company.name} logo` );
    address.textContent = member.address;
  });
};
