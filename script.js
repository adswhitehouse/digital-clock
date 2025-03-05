// Variables
let hours = document.querySelector(".jsHours");
let minutes = document.querySelector(".jsMinutes");
let seconds = document.querySelector(".jsSeconds");

// Displays times
function displayTime() {
  let currentDate = new Date();

  hours.textContent =
    (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();

  minutes.textContent =
    (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();

  seconds.textContent =
    (currentDate.getSeconds() < 10 ? "0" : "") + currentDate.getSeconds();
}

// Updates times every second
setInterval(displayTime, 1000);
