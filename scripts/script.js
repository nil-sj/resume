const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
    navLink.addEventListener("click", (event) => {
        navLinks.forEach(navLink => {
            if (navLink.classList.contains('active')) {
                navLink.classList.remove('active');
            }
        })
        event.target.classList.add('active');
    });
});

const currentDate = new Date();
const year = currentDate.getFullYear();
document.querySelector(".copy-year").textContent = year;