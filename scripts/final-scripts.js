// Toggle the navigation menu for mobile view
document.querySelector('.menu-toggle').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Handle form submission and redirect to thank-you page
document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Redirect to the thank-you page after form submission
  window.location.href = 'thank-you.html';
});