// ===== 1. Select the elements we need =====
const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const body = document.body;

// ===== 2. Theme switcher =====
function applyTheme(theme) {
  body.classList.toggle("dark", theme === "dark");
  themeToggle.textContent = theme === "dark" ? "☀️ Theme" : "🌙 Theme";
}

// Restore the theme the visitor chose last time (default: light)
applyTheme(localStorage.getItem("theme") || "light");

// Event: user clicks the button -> run the callback
themeToggle.addEventListener("click", function () {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

// ===== 3. Contact form =====
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  formStatus.textContent = "Thank you, " + name + "! Your message has been received. 💌";
  contactForm.reset();

  setTimeout(function () {
    formStatus.textContent = "";
  }, 5000);
});
