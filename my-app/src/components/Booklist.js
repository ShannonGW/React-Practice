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
const names = ["Shannon", "Amy", "Fran"];
const newNames = names.map((name) => {
  // console.log("name", name);
  return <h1>{name}</h1>;
});
console.log("newNames", newNames);

export default function Booklist() {
  return <section className="booklist">{newNames}</section>;
}
