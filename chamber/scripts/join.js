document.addEventListener("DOMContentLoaded", () => {

    // TIMESTAMP
    document.getElementById("timestamp").value = new Date().toISOString();

    // OPEN MODAL
    const buttons = document.querySelectorAll(".card");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.modal;
            document.getElementById(id).style.display = "block";
        });
    });

    // CLOSE MODAL
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        const closeBtn = modal.querySelector("button");
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    });

});