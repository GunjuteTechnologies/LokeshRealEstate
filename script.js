// script.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const categoryBtn = document.getElementById('categoryBtn');
    const techNav = document.getElementById('techNav');
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const tutorialSections = document.querySelectorAll('.tutorial-section');
        
        tutorialSections.forEach(section => {
            const sectionTitle = section.querySelector('h2').textContent.toLowerCase();
            const links = section.querySelectorAll('a');
            let hasVisibleItems = false;

            links.forEach(link => {
                const linkText = link.textContent.toLowerCase();
                const listItem = link.parentElement;
                
                if (linkText.includes(searchTerm) || sectionTitle.includes(searchTerm)) {
                    listItem.style.display = 'block';
                    hasVisibleItems = true;
                } else {
                    listItem.style.display = 'none';
                }
            });

            section.style.display = hasVisibleItems ? 'block' : 'none';
        });
    });

    // Technology navigation
    techNav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            
            // Remove active class from all links
            techNav.querySelectorAll('a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link
            e.target.classList.add('active');
        }
    });

    // Dark theme toggle
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('dark-theme');
        
        // Update theme toggle icon
        this.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });

    // Category button dropdown (placeholder)
    categoryBtn.addEventListener('click', function() {
        alert('Category dropdown functionality would go here');
    });
});