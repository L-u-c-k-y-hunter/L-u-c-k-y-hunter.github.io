// Function to display the selected section and hide the others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.remove('hidden');
    document.getElementById(sectionId).classList.add('active');

    // Remove active class from other sidebar links
    const links = document.querySelectorAll('.sidebar ul li a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    const activeLink = document.querySelector(`a[href='#${sectionId}']`);
    activeLink.classList.add('active');
}

// Show home section by default when page loads
document.addEventListener("DOMContentLoaded", function() {
    showSection('home');
});
