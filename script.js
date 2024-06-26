const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

// Set Date Input - Min., with Today's Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

let countdownTitle = "";
let countdownDate = "";

// Take Values from Form Input
function updateCountdown(e) {
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
}

// Event Listener
countdownForm.addEventListener("submit", updateCountdown);
