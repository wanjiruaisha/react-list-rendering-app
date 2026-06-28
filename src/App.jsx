import { useEffect, useMemo, useState } from "react";
import { initialBooks } from "./data/books";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchAndFilter from "./components/SearchAndFilter";

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : initialBooks;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  function handleAddBook(newBook) {
    setBooks((prevBooks) => [newBook, ...prevBooks]);
  }

  function handleDeleteBook(id) {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  }

  const genres = useMemo(() => {
    return [...new Set(books.map((book) => book.genre))];
  }, [books]);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || book.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 px-6 py-12 text-center text-white shadow-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
            React List Rendering Project
          </p>

          <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
            Book Library
          </h1>

          <p className="mx-auto max-w-2xl text-slate-200">
            A professional React app that displays books dynamically using
            components, props, state, and the map function.
          </p>
        </header>

        <BookForm onAddBook={handleAddBook} />

        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          genres={genres}
        />

        <section className="mb-6 rounded-2xl bg-white px-6 py-4 shadow-md">
          <p className="text-slate-600">
            Showing{" "}
            <strong className="text-slate-900">{filteredBooks.length}</strong>{" "}
            of <strong className="text-slate-900">{books.length}</strong> books
          </p>
        </section>

        <BookList books={filteredBooks} onDeleteBook={handleDeleteBook} />
      </div>
    </main>
  );
}

export default App;