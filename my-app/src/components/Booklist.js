import React from "react";

//setup vars
const title = "How Rich People Think";
const author = "Steve Siebold";
const img = "https://m.media-amazon.com/images/I/41iBc3SbWBL.jpg";

export default function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log("props", props); //console.log above return
  //when we console.log, we see that props is an object
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {console.log("props", props)} {/* you can also console log in JSX */}
    </article>
  );
};

/* the {} inside of the {} just means there's an object. The first {} indicates
we are using JS inside of the JSX and the second {} simply means an object. 
There is really no special syntax here.
*/

//inline styling is more powerful than CSS coming from index.css
