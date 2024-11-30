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
function showUnit(unitId) {
    // Redirect to the corresponding unit HTML page
    if (unitId === 'physics-unit1') {
        window.location.href = 'physics-unit1.html'; // Redirect to Physics Unit 1 page
    } else if (unitId === 'physics-unit2') {
        window.location.href = 'physics-unit2.html'; // Redirect to Physics Unit 2 page (if you create this page)
    }
    // Add similar conditions for other subjects and units as needed
}
