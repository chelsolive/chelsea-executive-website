// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;
    const timeline = document.getElementById('timeline').value;
    
    // Create mailto link with form data
    const mailtoLink = `mailto:hello@olivealexanderexecutive.com?subject=Application from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ACompany: ${encodeURIComponent(company)}%0A%0AMessage:%0A${encodeURIComponent(message)}%0A%0ATimeline to Start:%0A${encodeURIComponent(timeline)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation message
    alert('Thank you for your application! Your email client will open to send your application.');
    
    // Reset form
    this.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
    }
});
