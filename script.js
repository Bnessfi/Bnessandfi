document.addEventListener('DOMContentLoaded', function() {
    // Topics dropdown logic
    var mathematicsTopics = [
        'Algebra', 
        'Geometry', 
        'Arithmetic', 
        'Trigonometry', 
        'Calculus', 
        'Statistics and Probability', 
        'Linear Algebra', 
        'Discrete Mathematics', 
        'Number Theory', 
        'Financial Mathematics'
    ];

    var dropdownContent = document.getElementById('topicsDropdown');
    mathematicsTopics.forEach(function(topic) {
        var topicLink = document.createElement('a');
        topicLink.href = '#' + topic.toLowerCase().replace(/\s+/g, '-');
        topicLink.textContent = topic;
        dropdownContent.appendChild(topicLink);
    });

    // Smooth scrolling
    var smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hamburger menu toggle
    var hamburgerMenu = document.getElementById('hamburgerMenu');
    var navLinks = document.getElementById('navLinks');
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});