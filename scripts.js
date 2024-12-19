// File: scripts.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");

    // Add event listener for form submissions
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", () => {
            showLoadingSpinner();
        });
    });
});

function showLoadingSpinner() {
    // Create a loading spinner overlay
    const spinnerOverlay = document.createElement("div");
    spinnerOverlay.id = "loading-spinner";
    spinnerOverlay.style.position = "fixed";
    spinnerOverlay.style.top = 0;
    spinnerOverlay.style.left = 0;
    spinnerOverlay.style.width = "100%";
    spinnerOverlay.style.height = "100%";
    spinnerOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    spinnerOverlay.style.display = "flex";
    spinnerOverlay.style.alignItems = "center";
    spinnerOverlay.style.justifyContent = "center";
    spinnerOverlay.style.zIndex = 1000;

    // Spinner icon
    const spinner = document.createElement("div");
    spinner.className = "spinner-border text-light";
    spinner.style.width = "3rem";
    spinner.style.height = "3rem";

    spinnerOverlay.appendChild(spinner);
    document.body.appendChild(spinnerOverlay);

    // Automatically remove the spinner after 10 seconds in case of an error
    setTimeout(() => {
        hideLoadingSpinner();
    }, 10000);
}

function hideLoadingSpinner() {
    const spinnerOverlay = document.getElementById("loading-spinner");
    if (spinnerOverlay) {
        spinnerOverlay.remove();
    }
}
