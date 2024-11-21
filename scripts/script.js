// Dynamically populate the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Populate the last modified date in the footer
document.getElementById("lastModified").textContent = `Last Updated: ${document.lastModified}`;


// Wind Chill Calculation
const temperature = 5; // °C
const windSpeed = 10; // km/h

function calculateWindChill(temp, wind) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  ).toFixed(1);
}

if (temperature <= 10 && windSpeed > 4.8) {
  document.getElementById("windChill").textContent = `${calculateWindChill(
    temperature,
    windSpeed
  )} °C`;
} else {
  document.getElementById("windChill").textContent = "N/A";
}
