const urlR = "data/rentals.json";

const rentals = document.querySelector("#rentals");

async function getPrices(urlR) {
  const response = await fetch(urlR);
  const data = await response.json();
  displayPrices(data.prices);
}

const displayPrices = (prices) => {
  prices.forEach((price) => {
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    const th4 = document.createElement("th");
    const th5 = document.createElement("th");
    const th6 = document.createElement("th");
    th1.textContent = price.type;
    th2.textContent = price.MaxPersons;

    tr.appendChild(th1);
    tr.appendChild(th2);

    rentals.appendChild(tr);
  });
};

getPrices(urlR);
