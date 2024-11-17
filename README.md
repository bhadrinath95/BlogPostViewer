# Blog Posts Viewer

This is a simple web application that fetches and displays blog posts and their associated comments using data from [JSONPlaceholder](https://jsonplaceholder.typicode.com). The project is built with HTML, CSS, and JavaScript.

---

## Features

- Displays a list of blog posts with their titles and bodies.
- Each post includes a section for comments fetched dynamically from the API.
- Clean and responsive UI using HTML and CSS.

---

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling the user interface.
- **JavaScript**: Fetching and displaying data dynamically from APIs.

---

## APIs Used

This project uses the following endpoints from JSONPlaceholder:
- **Posts**: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)  
  Provides the list of blog posts.
- **Comments**: [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments)  
  Provides comments associated with each post.

---

## Project Structure

```
/project-folder
├── index.html               # Main HTML file
├── css/
│   └── styles.css           # CSS for styling the webpage
├── js/
│   └── script.js            # JavaScript for fetching and displaying data
└── README.md                # Project documentation
```

---

## How to Run

1. Clone the repository or download the files.
2. Open `index.html` in any modern web browser.
3. The page will automatically fetch and display blog posts and comments.

---

## WebLink
- [Blog Posts Viewer](https://bhadrinath95.github.io/BlogPostViewer/)

---

## JavaScript Overview

The JavaScript code:
1. Fetches blog posts and comments from the APIs.
2. Dynamically generates the HTML for each post and its comments.
3. Appends the generated HTML to the `#posts` container in the main page.

You’ll need to implement the JavaScript logic in `script.js`.

---

## Styling Overview

The CSS file (`styles.css`) provides:
- A clean and professional layout for the blog posts and comments.
- Responsive design to ensure usability on different screen sizes.
- Styling for visual hierarchy and emphasis on important elements like post titles and comments.

---

## Sample Output

Once implemented, the application will display a list of posts with their respective comments, styled cleanly and neatly, with a responsive layout.

---
