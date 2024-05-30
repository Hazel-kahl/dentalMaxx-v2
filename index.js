document.addEventListener("DOMContentLoaded", function() {
    const navToggler = document.querySelector("[data-nav-toggler]");
    const navbar = document.querySelector("[data-navbar]");
    const closeIcon = document.querySelector(".close-icon");
    const menuIcon = document.querySelector(".menu-icon");

    // Function to toggle the navbar visibility
    function toggleNavbar() {
        navbar.classList.toggle("active");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    }

    // Event listener for the toggle button
    navToggler.addEventListener("click", function() {
        toggleNavbar();
        // Change toggle button icon when the menu appears
        navToggler.classList.toggle("active");
    });

    // Event listener for the close button
    closeIcon.addEventListener("click", function() {
        toggleNavbar();
        // Restore toggle button icon when the menu is closed
        navToggler.classList.toggle("active");
    });

    // Get all navbar links
    const navbarLinks = document.querySelectorAll(".navbar-link");

    // Function to handle click on navbar link
    function handleNavbarLinkClick(event) {
        event.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute("href").substring(1); // Get the target section id
        const targetSection = document.getElementById(targetId); // Get the target section element
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section smoothly
        }
        toggleNavbar(); // Close the navbar after clicking a link
        navToggler.classList.remove("active"); // Restore the menu icon
    }

    // Add click event listener to each navbar link
    navbarLinks.forEach(function(navbarLink) {
        navbarLink.addEventListener("click", handleNavbarLinkClick);
    });

    document.getElementById('bookAppointmentButton').addEventListener('click', function() {
        var formContainer = document.getElementById('formContainer');
        if (formContainer.style.display === 'none' || formContainer.style.display === '') {
            formContainer.style.display = 'block';
        } else {
            formContainer.style.display = 'none';
        }
    });
    
    document.getElementById('appointment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Appointment booked successfully!');
        document.getElementById('formContainer').style.display = 'none';
    });
    

    // const header = document.querySelector([data-header]);

    // window.addEventListener("scroll", function () {
    //     if(this.window.scrollY >= 100) {
    //         header.classList.add("active");
    //     } else {
    //         header.classList.remove ("active");
    //     }
    // })

});
