# 💬 Quote Generator

A lightweight web app that displays a random motivational quote and its author every time you click a button. Built with vanilla HTML, CSS, and JavaScript, with no frameworks or dependencies.

🔗 **Live demo:** [View the app](https://piyushsaxena-pi.github.io/Quote-Generator/) <!-- update after deploying -->

![Quote Generator Screenshot]<img width="1345" height="632" alt="Screenshot 2026-10-08 232505" src="https://github.com/user-attachments/assets/49488310-6fcc-4196-b79f-2fc899f00fdb" />


## ✨ Features

- Generates a random quote on each button click
- Displays the author's name alongside each quote
- Clean, minimal, distraction-free interface
- Zero dependencies: runs in any modern browser

## 🛠️ Tech Stack

| Technology | Purpose |
| ---------- | ------- |
| HTML5      | Page structure and semantic markup |
| CSS3       | Styling and layout |
| JavaScript (ES6) | Quote logic and DOM updates |

## 📁 Project Structure

```
Quote-Generator/
├── quote.html   # Markup and page structure
├── quote.css    # Styles
├── quote.js     # Random quote logic and event handling
└── README.md
```

## 🚀 Getting Started

1. Clone the repository
```bash
   git clone https://github.com/Piyushsaxena-pi/Quote-Generator.git
```
2. Open the project folder
```bash
   cd Quote-Generator
```
3. Open `quote.html` in your browser. No build step or installation needed.

## 🧠 How It Works

1. The quotes are stored as a collection of quote/author pairs in `quote.js`. 
2. Clicking **Generate Quote** triggers a click event listener.
3. A random entry is picked and its text and author are written into the page via DOM manipulation.

## 📚 What I Practiced

- Selecting and updating elements with the DOM API
- Handling user events
- Generating random values in JavaScript
- Structuring a project into separate HTML, CSS, and JS files

## 🔮 Planned Improvements

- [ ] Fetch quotes from a public API for unlimited variety
- [ ] "Copy to clipboard" and "Share on X" buttons
- [ ] Avoid repeating the same quote twice in a row
- [ ] Dark/light theme toggle
- [ ] Fade animation when the quote changes

## 👤 Author

**Piyush Saxena**
GitHub: [@Piyushsaxena-pi](https://github.com/Piyushsaxena-pi)

⭐ If you found this project useful, consider giving it a star!
