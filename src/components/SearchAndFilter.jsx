function SearchAndFilter({
  searchTerm,
  onSearchChange,
  selectedGenre,
  onGenreChange,
  genres,
}) {
  return (
    <section className="mb-6 grid gap-4 rounded-3xl border border-white/70 bg-white/85 p-6 shadow-lg backdrop-blur md:grid-cols-[2fr_1fr]">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="rounded-2xl border border-indigo-100 bg-indigo-50/70 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white"
      />

      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="rounded-2xl border border-pink-100 bg-pink-50/70 px-4 py-3 outline-none transition focus:border-pink-500 focus:bg-white"
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