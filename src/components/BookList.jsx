import BookCard from "./BookCard";

function BookList({ books, onDeleteBook }) {
  if (books.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-md">
        <h3 className="mb-2 text-2xl font-bold text-slate-900">
          No books found
        </h3>

        <p className="text-slate-600">
          Try adding a new book or changing your search/filter.
        </p>
      </div>
    );
  }

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onDeleteBook={onDeleteBook} />
      ))}
    </section>
  );
}

export default BookList;