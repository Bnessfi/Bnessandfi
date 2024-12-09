document.addEventListener('DOMContentLoaded', function() {
    // Dropdown topics
    const mathematicsTopics = [
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
        const dropdown = document.getElementById(dropdownId);
        // Clear existing content
        dropdown.innerHTML = '';
        
        // Add topics
        mathematicsTopics.forEach(function(topic) {
            const topicLink = document.createElement('a');
            topicLink.href = '#' + topic.toLowerCase().replace(/\s+/g, '-');
            topicLink.textContent = topic;
            
            // Add click event listener
            topicLink.addEventListener('click', function(e) {
                e.preventDefault();
                // You can add specific functionality for each section here
                const parentDropdown = dropdown.id;
                if (parentDropdown === 'topicsDropdown1') {
                    // Handle Video Lectures selection
                    console.log('Video Lecture selected:', topic);
                } else if (parentDropdown === 'topicsDropdown2') {
                    // Handle Test Your Speed selection
                    console.log('Speed Test selected:', topic);
                } else if (parentDropdown === 'topicsDropdown3') {
                    // Handle Downloadable Resources selection
                    console.log('Resource selected:', topic);
                }
            });
            
            dropdown.appendChild(topicLink);
        });
    });

    // Hamburger menu toggle
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
