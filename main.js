// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project card click handler
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        // Add your project link logic here
        console.log('Project clicked:', this.querySelector('h3').textContent);
    });
});

// Add scroll animation for navbar
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('nav').style.top = "0";
    } else {
        document.querySelector('nav').style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// Add hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });


  

});



