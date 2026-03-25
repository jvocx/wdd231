const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

/* FOOTER */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

/* COURSES */
const courses = [
    { code: "CSE 110", category: "cse", credits: 3, completed: true },
    { code: "WDD 130", category: "wdd", credits: 3, completed: false },
    { code: "CSE 111", category: "cse", credits: 3, completed: true },
    { code: "WDD 231", category: "wdd", credits: 3, completed: false }
];

const container = document.querySelector(".course-list");

function displayCourses(list) {
    container.innerHTML = "";

    list.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("course");

        if (course.completed) {
            div.classList.add("completed");
        }

        div.textContent = `${course.code} (${course.credits} credits) ${course.completed ? "✔ Completed" : ""}`;

        container.appendChild(div);
    });

    updateCredits(list);
}

function updateCredits(list) {
    const total = list.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("totalCredits").textContent = total;
}

displayCourses(courses);

/* FILTER */
document.querySelectorAll(".buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        if (filter === "all") {
            displayCourses(courses);
        } else {
            displayCourses(courses.filter(c => c.category === filter));
        }
    });
});