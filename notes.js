function showSubject(subjectId) {
    // Hide all subject content
    const subjects = document.querySelectorAll('.subject-content');
    subjects.forEach(subject => subject.style.display = 'none');

    // Show the selected subject content
    const selectedSubject = document.getElementById(subjectId);
    if (selectedSubject) {
        selectedSubject.style.display = 'block';
    }
}

function showUnit(unitId) {
    if (unitId === 'maths-unit1') {
        window.location.href = 'maths-unit1.html'; // Redirect to Maths Unit 1
    } else if (unitId === 'maths-unit2') {
        window.location.href = 'maths-unit2.html'; // Redirect to Maths Unit 2
    } else if (unitId === 'physics-unit1') {
        window.location.href = 'physics-unit1.html'; // Redirect to Physics Unit 1
    } else if (unitId === 'physics-unit2') {
        window.location.href = 'physics-unit2.html'; // Redirect to Physics Unit 2
    } else if (unitId === 'physics-unit3') {
        window.location.href = 'physics-unit3.html'; // Redirect to Physics Unit 3
    } else if (unitId === 'biology-unit1') {
        window.location.href = 'biology-unit1.html'; // Redirect to Biology Unit 1
    } else if (unitId === 'biology-unit2') {
        window.location.href = 'biology-unit2.html'; // Redirect to Biology Unit 2
    } else if (unitId === 'biology-unit3') {
        window.location.href = 'biology-unit3.html'; // Redirect to Biology Unit 3
    } else if (unitId === 'chemistry-unit1') {
        window.location.href = 'chemistry-unit1.html'; //Redirect to Chemistry Unit1
    } else if (unitId === 'chemistry-unit2') 
        window.location.href = 'chemistry-unit2.html'; 
     else if (unitId === 'chemistry-unit3') 
        window.location.href = 'chemistry-unit3.html'; 
}
function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  document.querySelectorAll('.unit-button').forEach(button => {
    button.addEventListener('click', debounce(() => {
      console.log('Button clicked');
      // Your action here (e.g., changing content or data)
    }, 300)); // Adjust 300ms to the delay you want
  });
  
