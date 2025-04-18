// Add interactive elements and animations
document.addEventListener('DOMContentLoaded', function() {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.section');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 150) {
                element.classList.add('revealed');
            }
        });
    }
    
    // Initial check
    revealOnScroll();
    
    // Add event listener for scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.experience-item, .included-card, .capability-group, .delivery-point, .investment-card, .first-step-card, .pricing-card, .final-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add subtle animation to section icons
    const sectionIcons = document.querySelectorAll('.section-icon');
    
    sectionIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(15deg) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0) scale(1)';
        });
    });
    
    // Add smooth scrolling for better navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add subtle background animation to header
    const header = document.querySelector('header');
    let offset = 0;
    
    function animateHeader() {
        offset += 0.2;
        header.style.backgroundPosition = `${offset}px ${offset}px`;
        requestAnimationFrame(animateHeader);
    }
    
    animateHeader();
});
