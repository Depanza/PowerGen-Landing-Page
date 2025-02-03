// script.js
// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Enable smooth scrolling for all anchor links that start with #
    // This creates a smooth animation when clicking on navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent default jump-to behavior
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'  // Enable smooth scrolling animation
            });
        });
    });

    // Handle contact form submission using AJAX
    // This prevents page reload and provides a better user experience
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent form from submitting traditionally
        const form = e.target;
        
        // Send form data to server using Fetch API
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),  // Automatically collect all form data
            headers: {
                'X-Requested-With': 'XMLHttpRequest',  // Indicate this is an AJAX request
            }
        })
        .then(response => response.json())  // Parse JSON response from server
        .then(data => {
            if (data.success) {
                // Show success message and reset form if submission was successful
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            }
        })
        .catch(error => console.error('Error:', error));  // Log any errors that occur
    });

    // Implement navbar transparency effect on scroll
    // Makes navbar slightly transparent when user scrolls down
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {  // If page is scrolled more than 50px
            navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.95)';  // Semi-transparent
        } else {
            navbar.style.backgroundColor = '#333';  // Fully opaque
        }
    });
});