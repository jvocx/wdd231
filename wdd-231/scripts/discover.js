import { places } from "../data/places.mjs";

const container = document.querySelector("#cards-container");

// CRIAR CARDS
places.forEach((place, index) => {
    const card = document.createElement("section"); // 👈 MELHOR que div
    card.classList.add("card");

    // 👇 DUPLA GARANTIA pro grid (JS + CSS)
    card.style.gridArea = `card${index + 1}`;

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button type="button">Learn More</button>
    `;

    container.appendChild(card);
});

// LOCAL STORAGE
const message = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diff = now - lastVisit;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else {
        message.textContent = `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
    }
}

localStorage.setItem("lastVisit", now);