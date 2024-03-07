const baseURL = "https://dereckr.github.io/wdd230/";
const linksURL = "https://dereckr.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

const sessions = document.querySelector(".sessions");

const displayLinks = (weeks) => {
  weeks.forEach((week) => {
    const list = document.createElement("li");

    list.textContent = `${week.lesson}: `;

    week.links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.textContent = `_ ${link.title}_`;
      anchor.setAttribute("href", link.url);
      list.appendChild(anchor);
    });

    sessions.appendChild(list);
    /*
     */
  });
};

getLinks();
