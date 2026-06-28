function BookCard({ book, onDeleteBook }) {
  const { id, title, author, genre, year, rating } = book;

  return (
    <article className="flex flex-col gap-5 rounded-3xl bg-white p-6 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-xl md:flex-row md:items-start">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-4xl">
        📚
      </div>

      <div className="flex-1">
        <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>

        <div className="space-y-2 text-slate-600">
          <p>
            <span className="font-semibold text-slate-800">Author:</span>{" "}
            {author}
          </p>

          <p>
            <span className="font-semibold text-slate-800">Genre:</span>{" "}
            {genre}
          </p>

          <p>
            <span className="font-semibold text-slate-800">Year:</span> {year}
          </p>

          <p>
            <span className="font-semibold text-slate-800">Rating:</span>{" "}
            {"⭐".repeat(Number(rating))}
          </p>
        </div>
      </div>

      <button
        onClick={() => onDeleteBook(id)}
        className="rounded-xl bg-red-100 px-4 py-2 font-bold text-red-700 transition hover:bg-red-200 md:self-start"
      >
        Delete
      </button>
    </article>
  );
}

export default BookCard;