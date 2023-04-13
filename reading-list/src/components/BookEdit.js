import { useState } from "react";

import { useBookContext } from "../hooks/use-book-context";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBookContext();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label htmlFor="title">Title</label>
        <input
          className="input"
          // placeholder={book.title}
          value={title}
          onChange={handleChange}
        />
        <button className="button is-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default BookEdit;
