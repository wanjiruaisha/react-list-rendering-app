# React List Rendering App

A React List Rendering project built with Vite and Tailwind CSS. The application displays a collection of books dynamically using React components, props, state, and the `.map()` function.

## Project Overview

Book Library App is a simple and responsive React application that allows users to view a list of books, add new books, delete existing books, search for books, and filter books by genre.

This project demonstrates how to structure a React application using reusable components and dynamic list rendering.

## Features

* Display a list of books dynamically
* Render book cards using the `.map()` function
* Add new books through a form
* Delete books from the list
* Search books by title or author
* Filter books by genre
* Responsive design using Tailwind CSS
* Data managed using React state
* Clean component-based structure

## Technologies Used

* React
* Vite
* JavaScript
* Tailwind CSS
* Git
* GitHub

## Project Structure

```txt
src/
├── components/
│   ├── BookCard.jsx
│   ├── BookForm.jsx
│   ├── BookList.jsx
│   └── SearchAndFilter.jsx
│
├── data/
│   └── books.js
│
├── App.jsx
├── index.css
└── main.jsx
```

## Components

### App.jsx

The main component of the application. It manages the book data, handles adding and deleting books, and passes data to child components through props.

### BookList.jsx

Displays the list of books by mapping through the books array and rendering a `BookCard` for each book.

### BookCard.jsx

Displays the details of a single book, including title, author, genre, year, rating, and a delete button.

### BookForm.jsx

Contains the form used to add a new book to the list.

### SearchAndFilter.jsx

Allows users to search books by title or author and filter books based on genre.



## Installation and Setup

To run this project locally, follow these steps:

```bash
git clone https://github.com/wanjiruaisha/react-list-rendering-app.git
```

```bash
cd react-list-rendering-app
```

```bash
npm install
```

```bash
npm run dev
```

Open the local development link shown in the terminal.

## Deployment

This project can be deployed using:

* Vercel
* Netlify
* GitHub Pages

## Collaboration

This project was developed as part of a React List Rendering assignment. Collaboration is welcome for learning, reviewing, and improving the project.

Possible collaboration areas include:

* Improving the user interface
* Adding more book data
* Connecting the app to a real books API
* Adding edit functionality
* Improving search and filtering
* Adding animations or transitions
* Improving accessibility and responsiveness

## Contribution

Contributions are welcome. To contribute to this project:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes.
4. Stage and commit your changes.

```bash
git add .
git commit -m "feat: add your feature description"
```

5. Push your branch to GitHub.

```bash
git push origin feature/your-feature-name
```

6. Open a pull request for review.

Please make sure your code is clean, readable, and follows the existing project structure.



## Future Improvements

* Fetch books from an external API
* Add edit book functionality
* Add book cover images
* Add sorting by rating or year
* Add dark mode
* Add animations for adding and removing books

## Author

Aisha

## License

licensed under the MIT license.
