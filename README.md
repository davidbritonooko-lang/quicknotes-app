# QuickNotes App

QuickNotes is a lightweight, responsive web application designed for capturing, categorizing, and managing daily notes and tasks efficiently. It provides a clean and distraction-free interface to keep your ideas organized right inside your browser.

## Features
- **Note Creation & Categorization**: Add notes under Personal, Work, or Study categories complete with custom color-coded border indicators.
- **Real-Time Search**: Instantly filter through your notes as you type in the search bar.
- **Robust Validation**: Built-in validation prevents empty submissions and restricts notes to a maximum of 200 characters with helpful error messages.
- **Local Storage Persistence**: Your notes are saved automatically in the browser storage so they persist across page reloads.
- **Responsive Layout**: Designed with modern CSS Flexbox to stack smoothly on mobile devices and scale cleanly on desktops.

## How to Run Locally
1. Clone or download this project into a folder named `quicknotes-app`.
2. Open the folder in your code editor (such as VS Code).
3. Open `index.html` directly in your browser, or spin it up using a live development server (like the Live Server extension in VS Code).

## What I Learned
1. **DOM Manipulation & Safety**: Learned how to construct dynamic UI elements safely using `createElement` and `textContent` to prevent script injection vulnerabilities, avoiding unsafe `innerHTML` usage for user-generated text.
2. **Browser Storage Integration**: Gained hands-on experience using `localStorage` alongside `JSON.stringify` and `JSON.parse` to persist complex client-side application states.
3. **Responsive UI Design & Validation**: Practiced building reliable form validation loops and implementing CSS media queries to guarantee seamless mobile responsiveness.