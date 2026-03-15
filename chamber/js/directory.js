const url = "data/members.json";
const cards = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data);
        }
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }
}

const displayMembers = (members) => {
    cards.innerHTML = ""; // Limpa o container

    members.forEach((member) => {
        let card = document.createElement("section");

        // Atende ao requisito de exibir: Nome, Endereço, Telefone, URL, Imagem e Nível 
        card.innerHTML = `
            <img src="images/${member.image}" alt="Logo of ${member.name}" loading="lazy" width="150">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><strong>Level:</strong> ${member.membership === 3 ? 'Gold' : member.membership === 2 ? 'Silver' : 'Member'}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        cards.appendChild(card);
    });
}

// Alternância de Visualização [cite: 107, 110]
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});

// Datas do Rodapé [cite: 75, 112]
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

getMembers();