/*==================================================
    ALLKITPY WEBSITE
==================================================*/

"use strict";

/*==================================================
    ELEMENTS
==================================================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
const header = document.querySelector("header");

/*==================================================
    MOBILE MENU
==================================================*/

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        menuBtn.textContent =
            nav.classList.contains("active")
                ? "✕"
                : "☰";

    });

}

/*==================================================
    CLOSE MENU AFTER CLICK
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});

/*==================================================
    ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section[id]");

function activateMenu() {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + current) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activateMenu);

/*==================================================
    HEADER SHADOW
==================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow =
            "0 2px 20px rgba(0,0,0,.05)";

    }

});

/*==================================================
    SCROLL ANIMATION
==================================================*/

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

document.querySelectorAll("section").forEach(sec => {

    sec.classList.add("hidden");

    observer.observe(sec);

});

/*==================================================
    CREATE SCROLL TO TOP BUTTON
==================================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topButton";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#4F46E5";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    topBtn.style.display =
        window.scrollY > 350
            ? "block"
            : "none";

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/*==================================================
    BUTTON RIPPLE
==================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const size = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.left =
            e.offsetX - size / 2 + "px";

        circle.style.top =
            e.offsetY - size / 2 + "px";

        circle.className = "ripple";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

/*==================================================
    CONSOLE MESSAGE
==================================================*/

console.log(
`
=====================================
 Allkitpy Website Loaded
 One Library. Every Python Utility.
=====================================
`
);