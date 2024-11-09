// Dynamically populate the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Populate the last modified date in the footer
document.getElementById("lastModified").textContent = `Last Updated: ${document.lastModified}`;
