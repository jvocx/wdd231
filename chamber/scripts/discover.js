import { places } from "../data/places.mjs";

const container = document.querySelector("#cards-container");

// Criar cards
places.forEach(place => {
    const card = document.createElement("div");

    card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
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