// This file contains the JavaScript code for interactivity on the web page.
// It handles events such as button clicks to navigate between tabs and any animations related to the 3D figure.

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".tab-button");
    const tabs = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const targetTab = this.getAttribute("data-target");

            tabs.forEach(tab => {
                if (tab.id === targetTab) {
                    tab.style.display = "block";
                } else {
                    tab.style.display = "none";
                }
            });
        });
    });

    // Initialize the first tab as visible
    tabs[0].style.display = "block";
});