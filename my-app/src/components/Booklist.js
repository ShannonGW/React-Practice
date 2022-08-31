import React from "react";
import Book from "./Book";
import { books } from "./books";

export default function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
