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

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  formStatus.textContent = "Thank you, " + name + "! Your message has been received. 💌";
  contactForm.reset();

  setTimeout(function () {
    formStatus.textContent = "";
  }, 5000);
});
