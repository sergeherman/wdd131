// JavaScript to toggle the navigation menu
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open'); // Toggle open class for navigation
    menuButton.classList.toggle('open'); // Toggle icon change for menu button
});

// JavaScript to display current year and last modified date in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
