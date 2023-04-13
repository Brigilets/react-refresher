import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import BooksContext from "./context/books";

const App = () => {
  const { fetchBooks } = useContext(BooksContext);
  // const [books, setBooks] = useState([]);

  // const fetchBooks = async () => {
  //   const response = await axios.get("http://localhost:3001/books");

  //   setBooks(response.data);
  // };

  // const handleCreateBook = async (title) => {
  //   // POST request
  //   const response = await axios.post("http://localhost:3001/books", {
  //     title,
  //   });

  //   const updatedBooks = [...books, response.data];

  //   setBooks(updatedBooks);
  // };

  // const deleteBookById = async (id) => {
  //   await axios.delete(`http://localhost:3001/books/${id}`);
  //   const updatedBooks = books.filter((book) => book.id !== id);

  //   setBooks(updatedBooks);
  // };

  // const editBookById = async (id, title) => {
  //   const response = await axios.put(`http://localhost:3001/books/${id}`, {
  //     title,
  //   });
  //   console.log(response);
  //   const updatedBooks = books.map((book) => {
  //     if (book.id === id) {
  //       return { ...book, ...response.data };
  //     }
  //     return book;
  //   });

  //   setBooks(updatedBooks);
  // };
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
