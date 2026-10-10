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

const profilePhoto = document.getElementById("profile-photo");
const photoButtons = document.querySelectorAll(".photo-btn");

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

profilePhoto.addEventListener("load", function () {
  profilePhoto.classList.remove("fade");
});

photoButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const photo = photos[button.dataset.photo];

    if (profilePhoto.getAttribute("src") === photo.src) {
      return;
    }

    photoButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    profilePhoto.classList.add("fade");
    setTimeout(function () {
      profilePhoto.src = photo.src;
      profilePhoto.alt = photo.alt;
    }, 400);
  });
});
