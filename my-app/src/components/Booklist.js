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
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/41iBc3SbWBL.jpg"
    alt="How Rich People Think"
  />
);

const Title = () => <h1>How Rich People Think</h1>;

const Author = () => <h4>Steve Siebold</h4>;
