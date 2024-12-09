document.addEventListener('DOMContentLoaded', function() {
    // Dropdown topics
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

    // Populate all dropdowns
    ['topicsDropdown1', 'topicsDropdown2', 'topicsDropdown3'].forEach(function(dropdownId) {
        var dropdown = document.getElementById(dropdownId);
        mathematicsTopics.forEach(function(topic) {
            var topicLink = document.createElement('a');
            topicLink.href = '#' + topic.toLowerCase().replace(/\s+/g, '-');
            topicLink.textContent = topic;
            dropdown.appendChild(topicLink);
        });
    });

    // Hamburger menu toggle
    var hamburgerMenu = document.getElementById('hamburgerMenu');
    var navLinks = document.getElementById('navLinks');
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
