
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});
document.getElementById('showNotesButton').addEventListener('click', function() {
  window.location.href = 'notes.html';  
});
const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    const formData = new FormData(form);

    fetch('http://localhost:3000/submit-form', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      alert('Your message has been received!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was a problem with your submission.');
    });
  });