document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        menu.classList.toggle("show");
    });
});