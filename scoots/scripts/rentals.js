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
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.textContent = price.type;
    td2.textContent = price.maxPersons;

    tr.appendChild(td1);
    tr.appendChild(td2);

    price.reservation.forEach((reserv) => {
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      td3.textContent = reserv.halfDay;
      td4.textContent = reserv.fullDay;
      tr.appendChild(td3);
      tr.appendChild(td4);
    });
    price.walkIn.forEach((w) => {
      const td5 = document.createElement("td");
      const td6 = document.createElement("td");
      td5.textContent = w.halfDay;
      td6.textContent = w.fullDay;
      tr.appendChild(td5);
      tr.appendChild(td6);
    });

    rentals.appendChild(tr);
  });
};

getPrices(urlR);
