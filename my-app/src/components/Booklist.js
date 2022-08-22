import React from "react";

export default function Booklist() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/41iBc3SbWBL.jpg"
    alt="How Rich People Think"
  />
);
