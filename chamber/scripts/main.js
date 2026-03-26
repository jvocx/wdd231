// ================= MENU =================
const btn = document.querySelector("#menu");
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("open");
});


// ================= WEATHER =================
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=-3.73&lon=-38.52&appid=1a5bf49d5a14f958c821d69ef3ab35b3&units=metric";

async function getWeather() {
    try {
        const res = await fetch(url);
        const data = await res.json();

        // CURRENT WEATHER
        document.querySelector("#temp").textContent =
            `Temperature: ${data.list[0].main.temp.toFixed(1)}°C`;

        document.querySelector("#desc").textContent =
            data.list[0].weather[0].description;

        // FORECAST (3 DIAS)
        const forecast = document.querySelector("#forecast");
        forecast.innerHTML = "";

        for (let i = 8; i < 24; i += 8) {
            const day = data.list[i];

            const date = new Date(day.dt_txt);
            const dayName = date.toLocaleDateString("en-US", {
                weekday: "short"
            });

            const div = document.createElement("div");
            div.textContent = `${dayName}: ${day.main.temp.toFixed(1)}°C`;

            forecast.appendChild(div);
        }

    } catch (error) {
        console.log("Weather error:", error);

        document.querySelector("#temp").textContent = "Weather unavailable";
    }
}

getWeather();


// ================= SPOTLIGHT =================
const membersURL = "data/members.json";

async function getMembers() {
    try {
        const res = await fetch(membersURL);
        const data = await res.json();

        // FILTRA GOLD E SILVER
        const filtered = data.members.filter(m =>
            m.membership === "Gold" || m.membership === "Silver"
        );

        // RANDOMIZA
        const shuffled = filtered.sort(() => 0.5 - Math.random());

        // PEGA 3
        const selected = shuffled.slice(0, 3);

        const container = document.querySelector("#spotlights");
        container.innerHTML = "";

        selected.forEach(m => {
            const card = document.createElement("div");

            card.innerHTML = `
                <h3>${m.name}</h3>
                <p>${m.phone}</p>
                <p>${m.address}</p>
                <p><strong>${m.membership}</strong></p>
                <a href="${m.website}" target="_blank">Visit Website</a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.log("Members error:", error);
    }
}

getMembers();