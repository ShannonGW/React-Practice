import React from "react";

const books = [
  {
    img: "https://m.media-amazon.com/images/I/41iBc3SbWBL.jpg",
    title: "How Rich People Think",
    author: "Steve Siebold",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
];
export default function Booklist() {
  return (
    <section className="booklist">
      {/* we need to pass the props object where we render the object,
not where it is created.  */}
    </section>
  );
}

// const Book = ({ img, title, author, children }) => {
const Book = (props) => {
  // console.log("props", props); //console.log above return
  //when we console.log, we see that props is an object

  //destructure props to avoid typing it repeatedly
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>

    // {console.log("props", props)} {/* you can also console log in JSX */}
    // <article className="book">
    /* <img src={props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author.toUpperCase()}</h4> */
    // </article>
  );
};

/* the {} inside of the {} just means there's an object. The first {} indicates
we are using JS inside of the JSX and the second {} simply means an object. 
There is really no special syntax here.
*/

//inline styling is more powerful than CSS coming from index.css
