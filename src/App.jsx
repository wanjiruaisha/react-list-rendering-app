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
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-indigo-50 to-cyan-50 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <header className="relative mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 px-6 py-14 text-center text-white shadow-2xl">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-yellow-300/30 blur-2xl"></div>
          <div className="absolute -bottom-16 -right-10 h-52 w-52 rounded-full bg-cyan-300/30 blur-2xl"></div>

          <div className="relative">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-200">
              React List Rendering Project
            </p>

            <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
              Book Library
            </h1>

            <p className="mx-auto max-w-2xl text-indigo-100">
              A colorful React app that displays books dynamically using
              reusable components, props, state, and the map function.
            </p>
          </div>
        </header>

        <BookForm onAddBook={handleAddBook} />

        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          genres={genres}
        />

        <section className="mb-6 rounded-3xl border border-white/70 bg-white/80 px-6 py-5 shadow-lg backdrop-blur">
          <p className="text-slate-600">
            Showing{" "}
            <strong className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-700">
              {filteredBooks.length}
            </strong>{" "}
            of{" "}
            <strong className="rounded-full bg-pink-100 px-3 py-1 text-pink-700">
              {books.length}
            </strong>{" "}
            books
          </p>
        </section>

        <BookList books={filteredBooks} onDeleteBook={handleDeleteBook} />
      </div>
    </main>
  );
}

export default App;