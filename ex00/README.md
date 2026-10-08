# Personal Portfolio 

A responsive personal portfolio website built from scratch with HTML5, CSS3 and vanilla JavaScript. No frameworks, templates or UI libraries were used.

## Author

Areen Al-Akaleek, AI Engineer

## Sections

1. Header / Navbar with smooth-scroll links
2. About Me with a profile photo
3. Skills grid
4. Project Showcase (Projects 00 to 03)
5. Hobbies
6. Contact Form
7. Footer

## Features

- **Theme switcher:** a button toggles between a light pink theme and a dark theme. The choice is saved in `localStorage`, so it is remembered on the next visit.
- **Contact form:** uses HTML5 validation (`required`, `type="email"`). On submit, JavaScript prevents the page reload and shows a thank-you message.
- **Responsive design:** Flexbox for layout and a CSS media query (`max-width: 768px`) for tablets and phones.
- **CSS variables:** all colors are defined once in `:root` and overridden by `body.dark`.

## How the theme switcher works (event lifecycle)

1. **User action:** the visitor clicks the Theme button.
2. **Event firing:** the browser fires a `click` event on `#theme-toggle`.
3. **JavaScript callback:** the function registered with `addEventListener("click", ...)` runs and decides the new theme.
4. **DOM/CSS mutation:** the callback toggles the `dark` class on `<body>`. The CSS variables change, so the whole page is repainted with the new colors, and the button text is updated.

## Project structure

    ex00/
    ├── index.html
    ├── style.css
    ├── script.js
    ├── README.md
    └── assets/
        └── me.jpg

## How to run

Open `index.html` in any modern browser. No build step or installation is needed.

## Technologies

HTML5, CSS3 (Flexbox, media queries, custom properties), JavaScript ES6+, Git
