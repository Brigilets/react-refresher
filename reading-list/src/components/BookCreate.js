import { useState } from "react";

import { useBookContext } from "../hooks/use-book-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBookContext();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input className="input" value={title} onChange={handleTitleChange} />
        <button className="button" type="submit">
          Create!
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
