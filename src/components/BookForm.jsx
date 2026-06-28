import { useState } from "react";

function BookForm({ onAddBook }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    rating: "5",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.author.trim() ||
      !formData.genre.trim()
    ) {
      alert("Please fill in the title, author, and genre.");
      return;
    }

    const newBook = {
      id: crypto.randomUUID(),
      title: formData.title,
      author: formData.author,
      genre: formData.genre,
      year: formData.year || "Unknown",
      rating: formData.rating,
    };

    onAddBook(newBook);

    setFormData({
      title: "",
      author: "",
      genre: "",
      year: "",
      rating: "5",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-3xl border border-white/70 bg-white/85 p-6 shadow-lg backdrop-blur"
    >
      <div className="mb-5">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-500">
          Add Collection
        </p>
        <h2 className="text-2xl font-extrabold text-slate-900">
          Add a New Book
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="title"
          placeholder="Book title"
          value={formData.title}
          onChange={handleChange}
          className="rounded-2xl border border-purple-100 bg-purple-50/60 px-4 py-3 outline-none transition focus:border-purple-500 focus:bg-white"
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="rounded-2xl border border-pink-100 bg-pink-50/60 px-4 py-3 outline-none transition focus:border-pink-500 focus:bg-white"
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          className="rounded-2xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white"
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="rounded-2xl border border-cyan-100 bg-cyan-50/60 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
        />

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="rounded-2xl border border-amber-100 bg-amber-50/60 px-4 py-3 outline-none transition focus:border-amber-500 focus:bg-white md:col-span-2"
        >
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-3 font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
      >
        Add Book
      </button>
    </form>
  );
}

export default BookForm;