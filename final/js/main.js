const container = document.querySelector("#places")

async function loadPlaces() {
    try {
        const response = await fetch("data/places.json")
        const data = await response.json()

        displayPlaces(data)

    } catch (error) {
        console.error("Erro ao carregar dados:", error)
    }
}

function displayPlaces(places) {
    container.innerHTML = places.map(place => `
    <div class="card">
      <h2>${place.name}</h2>
      <p>${place.country}</p>
      <p>${place.distance}</p>
      <p>${place.description}</p>
      <button onclick="saveFavorite('${place.name}')">Favoritar</button>
    </div>
  `).join("")
}

// LocalStorage
function saveFavorite(name) {
    localStorage.setItem("favoritePlace", name)
    alert(name + " salvo como favorito!")
}

// Rodar
loadPlaces()