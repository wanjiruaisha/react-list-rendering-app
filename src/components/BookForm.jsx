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
      className="mb-6 rounded-3xl bg-white p-6 shadow-md"
    >
      <h2 className="mb-5 text-2xl font-bold text-slate-900">
        Add a New Book
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="title"
          placeholder="Book title"
          value={formData.title}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-800"
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-800"
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-800"
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-800"
        />

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-800 md:col-span-2"
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
        className="mt-5 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700"
      >
        Add Book
      </button>
    </form>
  );
}

export default BookForm;