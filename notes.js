// Function to show subject content
function showSubject(subjectId) {
    const subjects = document.querySelectorAll('.subject-content');
    subjects.forEach(subject => subject.style.display = 'none');

    const selectedSubject = document.getElementById(subjectId);
    if (selectedSubject) {
        selectedSubject.style.display = 'block';
    }
}

// Function to show unit content or redirect
function showUnit(unitId) {
    if (unitId === 'maths-unit1') {
        window.location.href = 'maths-unit1.html'; 
    } else if (unitId === 'maths-unit2') {
        window.location.href = 'maths-unit2.html'; 
    } else if (unitId === 'physics-unit1') {
        window.location.href = 'physics-unit1.html'; 
    } else if (unitId === 'physics-unit2') {
        window.location.href = 'physics-unit2.html'; 
    } else if (unitId === 'physics-unit3') {
        window.location.href = 'physics-unit3.html'; 
    } else if (unitId === 'biology-unit1') {
        window.location.href = 'biology-unit1.html'; 
    } else if (unitId === 'biology-unit2') {
        window.location.href = 'biology-unit2.html'; 
    } else if (unitId === 'biology-unit3') {
        window.location.href = 'biology-unit3.html'; 
    } else if (unitId === 'chemistry-unit1') {
        window.location.href = 'chemistry-unit1.html'; 
    } else if (unitId === 'chemistry-unit2') {
        window.location.href = 'chemistry-unit2.html'; 
    } else if (unitId === 'chemistry-unit3') {
        window.location.href = 'chemistry-unit3.html'; 
    }
}

// Debounce function to handle button clicks with delay
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Adding event listener to unit buttons with debounce
document.querySelectorAll('.unit-button').forEach(button => {
    button.addEventListener('click', debounce(() => {
        console.log('Button clicked');
        // Your action here
    }, 300)); // 300ms delay
});

// Cookie consent initialization
window.addEventListener('load', function() {
    window.cookieconsent.initialise({
        "type": "opt-in",  // Opt-in allows only necessary cookies by default
        "content": {
            "message": "We use cookies to ensure you get the best experience on our website."
        },
        "palette": {
            "popup": {
                "background": "#000"
            },
            "button": {
                "background": "#f1d600"
            }
        },
        "law": {
            "regionalLaw": true  // Enable this if it's a GDPR-compliant cookie law
        }
    });

    // Automatically accept necessary cookies
    document.cookie = "necessary-cookie=true; path=/"; // Set the necessary cookie
});
