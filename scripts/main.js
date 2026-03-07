const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true, subject: "WDD" },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: true, subject: "WDD" },
    { code: "WDD 231", name: "Web Frontend Development", credits: 2, completed: false, subject: "WDD" },
    { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: false, subject: "CSE" }
];

function displayCourses(list) {
    const container = document.getElementById("courses");
    container.innerHTML = "";

    list.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("course-card");
        if (course.completed) div.classList.add("completed"); // Critério #11 [cite: 249]

        div.innerHTML = `<strong>${course.code}</strong>`;
        container.appendChild(div);
    });

    // Função Reduce obrigatória [cite: 249]
    const total = list.reduce((sum, c) => sum + c.credits, 0);
    document.getElementById("credits").textContent = total;
}

// Event Listeners em vez de onclick no HTML 
document.getElementById("all").addEventListener("click", () => displayCourses(courses));
document.getElementById("wdd").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.subject === "WDD"));
});
document.getElementById("cse").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.subject === "CSE"));
});

// Inicialização
displayCourses(courses);
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;