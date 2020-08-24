import React from "react";
import "./Book.css";

const book = (props) => {
  return (
    <div className="card">
      <div className="container" onClick={props.deleteBook}>
        {props.bookTitle}
        <br />
        {props.bookAuthor}
        <br />
        {props.bookPages}
      </div>
    </div>
  );
};

export default book;
