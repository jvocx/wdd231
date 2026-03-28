// TIMESTAMP
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timestamp").value = new Date().toISOString();
});

// MODAL
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}