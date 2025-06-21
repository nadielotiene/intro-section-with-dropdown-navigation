const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const dropdowns = document.querySelectorAll(".has-dropdown");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});

dropdowns.forEach(drop => {
    const link = drop.querySelector("a");

    link.addEventListener("click", (e) => {
        e.preventDefault();
        drop.classList.toggle("open");
    });
});
