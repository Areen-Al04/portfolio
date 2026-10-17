const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const body = document.body;

function applyTheme(theme) {
  body.classList.toggle("dark", theme === "dark");
  themeToggle.textContent = theme === "dark" ? "☀️ Theme" : "🌙 Theme";
}

applyTheme(localStorage.getItem("theme") || "light");

themeToggle.addEventListener("click", function () {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

const RECIPIENT = "areen.alakaleek4@gmail.com";

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = "Portfolio contact from " + name;
  const mailBody = message + "\n\nFrom: " + name + " (" + email + ")";

  window.location.href =
    "mailto:" + RECIPIENT +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(mailBody);

  formStatus.textContent = "Thank you, " + name + "! Opening your email app... 💌";
  contactForm.reset();

  setTimeout(function () {
    formStatus.textContent = "";
  }, 5000);
});
