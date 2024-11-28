// Array of temple objects (data)
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
      {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-8204.jpg"
    },
      {
      templeName: "Adelaide Australia",
      location: "Adelaide, Australia",
      dedicated: "1999, March, 17",
      area: 10700,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4361.jpg"
    },
      {
      templeName: "Melbourne Australia",
      location: "Melbourne, Australia",
      dedicated: "1998, October, 30",
      area: 10700,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-4399.jpg"
    },
      {
      templeName: "Suva Fiji",
      location: "Suva, Fiji",
      dedicated: "1998, May, 7",
      area: 12755,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/suva-fiji-temple/suva-fiji-temple-4631.jpg"
    },
      {
      templeName: "Mérida Mexico",
      location: "Mérida, Mexico",
      dedicated: "1998, September, 25",
      area: 10700,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/merida-mexico-temple/merida-mexico-temple-14106.jpg"
    },
  ];
  
  // Select the element where the temple cards will be displayed
  const album = document.querySelector(".album");
  
  /**
   * Renders a list of temple objects as HTML cards inside the `.album` element.
   * @param {Array} templeArray - Array of temple objects to be displayed.
   */
  function renderTemples(templeArray) {
    album.innerHTML = ""; // Clear any existing content in the album
    templeArray.forEach((temple) => {
      // Create a <figure> element for each temple
      const figure = document.createElement("figure");
      figure.innerHTML = `
        <figcaption>${temple.templeName}</figcaption> <!-- Temple name -->

        <p>Location: ${temple.location}</p> <!-- Temple location -->
        <p>Dedicated: ${temple.dedicated}</p> <!-- Dedication date -->
        <p>Area: ${temple.area.toLocaleString()} sq ft</p> <!-- Temple area -->

        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy"> <!-- Temple image -->

      `;
      album.appendChild(figure); // Add the figure to the album
    });
  }
  
  // Initial render: Display all temples on page load
  renderTemples(temples);
  
  /**
   * Filters temples built before 1900 and displays them.
   */
  function filterOld() {
    const filtered = temples.filter((temple) =>
      new Date(temple.dedicated).getFullYear() < 1900
    );
    renderTemples(filtered); // Display only filtered temples
  }
  
  /**
   * Filters temples built after 2000 and displays them.
   */
  function filterNew() {
    const filtered = temples.filter((temple) =>
      new Date(temple.dedicated).getFullYear() > 2000
    );
    renderTemples(filtered);
  }
  
  /**
   * Filters temples larger than 90,000 square feet and displays them.
   */
  function filterLarge() {
    const filtered = temples.filter((temple) => temple.area > 90000);
    renderTemples(filtered);
  }
  
  /**
   * Filters temples smaller than 10,000 square feet and displays them.
   */
  function filterSmall() {
    const filtered = temples.filter((temple) => temple.area < 10000);
    renderTemples(filtered);
  }
  
  // Add event listener to the navigation menu for filtering
  document.querySelector("nav ul").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default behavior of links
    const title = e.target.title; // Identify which menu item was clicked
    if (title === "Old") filterOld(); // Filter old temples
    else if (title === "New") filterNew(); // Filter new temples
    else if (title === "Large") filterLarge(); // Filter large temples
    else if (title === "Small") filterSmall(); // Filter small temples
    else renderTemples(temples); // Show all temples if "Home" is clicked
  });
  
  // Footer functionality to display the current year
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  
  // Footer functionality to display the last modified date of the document
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  
  // Select the menu button and navigation
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

// Toggle the 'open' class when the menu button is clicked
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});
