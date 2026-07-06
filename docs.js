/* ==========================================================
   AllkitPy Documentation
   docs.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // Highlight Current Page
    // ======================================================

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".sidebar a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            document
                .querySelectorAll(".sidebar a")
                .forEach(item => item.classList.remove("active"));

            link.classList.add("active");
        }

    });

    // ======================================================
    // Scroll To Top
    // ======================================================

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // ======================================================
    // Footer Version
    // ======================================================

    const version = "0.1.0";

    const footerVersion = document.querySelector("footer span");

    if (footerVersion) {

        footerVersion.textContent = `Version ${version}`;

    }

    // ======================================================
    // Search Placeholder
    // ======================================================

    const search = document.querySelector(".search input");

    if (search) {

        search.addEventListener("focus", () => {

            console.log("Documentation search will be added later.");

        });

    }

});

/* ==========================================================
   Future Features
==========================================================

Dark Mode

Module Search

Function Search

Copy Code Button

Expand / Collapse Sections

Previous / Next Module

Keyboard Shortcuts

Breadcrumb Navigation

========================================================== */