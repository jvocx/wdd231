const container = document.querySelector("#places");

// LOAD DATA
async function loadPlaces() {
    try {
        const response = await fetch("data/places.json");
        const data = await response.json();

        displayPlaces(data);

    } catch (error) {
        console.error("Error loading data:", error);
    }
}

// DISPLAY CARDS
function displayPlaces(places) {
    container.innerHTML = places.map(place => `
        <div class="card">
            <h2>${place.name}</h2>
            <p><strong>Country:</strong> ${place.country}</p>
            <p><strong>Distance:</strong> ${place.distance}</p>
            <p>${place.description}</p>

            <button onclick="openModal('${place.name}')">
                View Details
            </button>
        </div>
    `).join("");
}

// LOCAL STORAGE
function saveFavorite(name) {
    localStorage.setItem("favoritePlace", name);
    alert(name + " saved as favorite!");
}

// LOAD PAGE
loadPlaces();