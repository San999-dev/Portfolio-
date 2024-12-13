// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = e.target.getAttribute('href').substring(1);
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Contact form submission handler
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contact-form').reset(); // Clear form
  } else {
    alert('Please fill out all fields.');
  }
});
