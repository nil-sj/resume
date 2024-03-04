const audioMouseClick = new Audio("audio/mouse-click.mp3");
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const navToggle = document.querySelector('.nav-toggle');
const projectHeaders = document.querySelectorAll('.collapsible-project-header');
const projectPaneAlt = document.querySelector('.project-pane-alternative');

navLinks.forEach(navLink => {
    navLink.addEventListener("click", (event) => {
        audioMouseClick.play();
        navToggle.checked = false;
        navLinks.forEach(navLink => {
            if (navLink.classList.contains('active')) {
                navLink.classList.remove('active');
            }
        })
        event.target.classList.add('active');
    });
});

projectHeaders.forEach(pHeader => {
    pHeader.addEventListener("click", (event) => {
        if (pHeader.classList.contains('active')) {
            pHeader.classList.remove('active');
        } else {
            projectHeaders.forEach(pHitem => {
                if (pHitem.classList.contains('active')) {
                    pHitem.classList.remove('active');
                }
            });
            pHeader.classList.add('active');
            projectPaneAlt.innerHTML = pHeader.parentElement.querySelector('.collapsible-project-preview').innerHTML;
        }
    });
});

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
  
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.classList.contains(current)) {
            link.classList.add("active");
        }
    });
});

const currentDate = new Date();
const year = currentDate.getFullYear();
document.querySelector(".copy-year").textContent = year;