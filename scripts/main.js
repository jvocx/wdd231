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
    { code: "CSE 110", category: "cse" },
    { code: "WDD 130", category: "wdd" },
    { code: "CSE 111", category: "cse" }
];

const container = document.querySelector(".course-list");

function displayCourses(list) {
    container.innerHTML = "";
    list.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("course");
        div.textContent = course.code;
        container.appendChild(div);
    });
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