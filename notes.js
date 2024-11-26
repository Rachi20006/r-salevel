function showNotes() {
    // Hide the home section
    document.getElementById('home').style.display = 'none';
    
    // Show the subject buttons
    document.getElementById('subject-buttons').style.display = 'flex';
    
    // Hide all subject contents when switching to the Notes page
    const subjectContents = document.querySelectorAll('.subject-content');
    subjectContents.forEach(content => {
        content.style.display = 'none';
    });
    
    // Hide the footer on the Notes page
    document.getElementById('footer').style.display = 'none';
}

// Function to show specific subject content
function showContent(subject) {
    // Hide all other subjects' contents
    const subjectContents = document.querySelectorAll('.subject-content');
    subjectContents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected subject content
    document.getElementById(subject).style.display = 'block';
    
    // Hide all unit contents initially when the subject is clicked
    const unitContents = document.querySelectorAll('.unit-content');
    unitContents.forEach(content => {
        content.style.display = 'none';
    });
}

// Function to show specific unit content
function showUnit(unitId) {
    // Hide all other unit contents
    const unitContents = document.querySelectorAll('.unit-content');
    unitContents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected unit content
    document.getElementById(unitId).style.display = 'block';
}

// Function to show Notes or Videos within a specific unit
function showContentSection(sectionId) {
    // Hide all other sections within the unit (notes/videos)
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected content section (either notes or videos)
    document.getElementById(sectionId).style.display = 'block';
}
// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
