document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Load saved preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggle.textContent = "☀️ Light Mode";
    }

    toggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggle.textContent = "🌙 Dark Mode";
        }
    });
});
