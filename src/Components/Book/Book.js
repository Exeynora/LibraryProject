import React from "react";

const book = (props) => {
  return (
    <div className="card">
      <div className="container">
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
