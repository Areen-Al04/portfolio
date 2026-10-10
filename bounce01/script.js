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

// ===== 4. Bounce 01: Profile photo switcher =====
const profilePhoto = document.getElementById("profile-photo");
const photoButtons = document.querySelectorAll(".photo-btn");

// Dictionary: every photo has its own src and alt
const photos = {
  casual: {
    src: "assets/casual.jpg",
    alt: "Casual portrait of Areen Al-Akaleek"
  },
  professional: {
    src: "assets/professional.jpg",
    alt: "Professional portrait of Areen Al-Akaleek"
  }
};

// When the new image finishes loading, fade it back in
profilePhoto.addEventListener("load", function () {
  profilePhoto.classList.remove("fade");
});

photoButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const photo = photos[button.dataset.photo];

    // Do nothing if this photo is already displayed
    if (profilePhoto.getAttribute("src") === photo.src) {
      return;
    }

    // Highlight the clicked button only
    photoButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    // Fade out, then swap src and alt (no page reload)
    profilePhoto.classList.add("fade");
    setTimeout(function () {
      profilePhoto.src = photo.src;
      profilePhoto.alt = photo.alt;
    }, 400);
  });
});
