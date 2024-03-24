const urlSpotlight = "data/members.json";

async function spotlight() {
  const response = await fetch(urlSpotlight);
  const data = await response.json();
  const silverAndGold = data.members.filter(
    (member) =>
      member.membershipLevel === "Silver" || member.membershipLevel === "Gold"
  );
  const cl1 = document.querySelector(".client1");
  const cl2 = document.querySelector(".client2");

  for (let i = 0; i < Math.min(silverAndGold.length, 2); i++) {
    const member = silverAndGold[i];
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const website = document.createElement("p");
    const phoneNumber = document.createElement("p");
    const address = document.createElement("p");

    h3.textContent = member.name;
    website.textContent = member.website;
    phoneNumber.textContent = member.phoneNumber;
    address.textContent = member.address;

    div.appendChild(h3);
    div.appendChild(website);
    div.appendChild(phoneNumber);
    div.appendChild(address);

    if (i === 0) {
      cl1.appendChild(div);
    } else if (i === 1) {
      cl2.appendChild(div);
    }
  }
}

spotlight();
