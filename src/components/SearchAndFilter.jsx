function SearchAndFilter({
  searchTerm,
  onSearchChange,
  selectedGenre,
  onGenreChange,
  genres,
}) {
  return (
    <section className="mb-6 grid gap-4 rounded-3xl bg-white p-6 shadow-md md:grid-cols-[2fr_1fr]">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-800"
      />

      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-800"
      >
        <option value="All">All Genres</option>

        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </section>
  );
}

export default SearchAndFilter;