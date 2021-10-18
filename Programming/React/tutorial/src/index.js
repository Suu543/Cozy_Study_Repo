import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
import { books } from "./books.js";
// export default이기 때문에 이름은 어떤 것을 사용해도 상관없다.
import Book from "./Book.js";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
