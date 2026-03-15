const url = "data/members.json";

const container = document.querySelector("#members");

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);

}

function displayMembers(members) {

    members.forEach(member => {

        const card = document.createElement("section");

        card.innerHTML = `
<img src="images/${member.image}" alt="${member.name}">
<h3>${member.name}</h3>
<p>${member.address}</p>
<p>${member.phone}</p>
<a href="${member.website}" target="_blank">Visit Website</a>
`;

        container.appendChild(card);

    });

}

getMembers();


const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {

    container.classList.add("grid");
    container.classList.remove("list");

});

listButton.addEventListener("click", () => {

    container.classList.add("list");
    container.classList.remove("grid");

});