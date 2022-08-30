import React from "react";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/41iBc3SbWBL.jpg",
    title: "How Rich People Think",
    author: "Steve Siebold",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81ZLwAwD-ML._AC_UL640_FMwebp_QL65_.jpg",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
  },
];

export default function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} book={book}>
            {" "}
          </Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
