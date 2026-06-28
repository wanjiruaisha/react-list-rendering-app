function BookCard({ book, onDeleteBook }) {
  const { id, title, author, genre, year, rating } = book;

  const genreStyles = {
    Fiction: "bg-pink-100 text-pink-700",
    Finance: "bg-emerald-100 text-emerald-700",
    "Self Improvement": "bg-indigo-100 text-indigo-700",
    "African Literature": "bg-amber-100 text-amber-700",
  };

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

      <div className="flex flex-col gap-5 md:flex-row md:items-start">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-pink-100 text-4xl shadow-inner">
          📚
        </div>

        <div className="flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h3 className="text-2xl font-extrabold text-slate-900">
              {title}
            </h3>

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                genreStyles[genre] || "bg-slate-100 text-slate-700"
              }`}
            >
              {genre}
            </span>
          </div>

          <div className="space-y-2 text-slate-600">
            <p>
              <span className="font-semibold text-slate-800">Author:</span>{" "}
              {author}
            </p>

            <p>
              <span className="font-semibold text-slate-800">Year:</span>{" "}
              {year}
            </p>

            <p>
              <span className="font-semibold text-slate-800">Rating:</span>{" "}
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                {"⭐".repeat(Number(rating))}
              </span>
            </p>
          </div>
        </div>

        <button
          onClick={() => onDeleteBook(id)}
          className="rounded-xl bg-red-100 px-4 py-2 font-bold text-red-700 transition hover:bg-red-500 hover:text-white md:self-start"
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default BookCard;