// Array de objetos de cursos 
const courses = [
    { subject: 'CSE', number: 110, title: 'Intro to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 121, title: 'JavaScript Language', credits: 3, completed: false },
    { subject: 'WDD', number: 231, title: 'Web Frontend Dev I', credits: 3, completed: false }
];

const courseContainer = document.querySelector(".course-list");
const totalCreditsDisplay = document.querySelector("#total-credits");

function displayCourses(filteredCourses) {
    courseContainer.innerHTML = "";

    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.className = `course-card ${course.completed ? 'completed' : ''}`; // 
        card.innerHTML = `<strong>${course.subject} ${course.number}</strong>`;
        courseContainer.appendChild(card);
    });

    // Uso obrigatório da função REDUCE 
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsDisplay.textContent = total;
}

// Filtros 
document.querySelector("#all").addEventListener("click", () => displayCourses(courses));
document.querySelector("#cse").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.subject === 'CSE'));
});
document.querySelector("#wdd").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.subject === 'WDD'));
});

// Inicialização
displayCourses(courses);