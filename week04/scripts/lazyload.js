// Update the 'last modified' date in the footer
const lastModified = document.getElementById('last-modified');
lastModified.textContent = document.lastModified;

// Select all lazy-loaded images
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// Add the 'loaded="true"' attribute when each image loads
lazyImages.forEach((img) => {
    img.addEventListener('load', () => {
        img.setAttribute('loaded', 'true');
    });
});
