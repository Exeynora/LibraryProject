import React from "react";
import "./Book.css";

const book = (props) => {
  return (
    <div>
      <div
        className={
          props.hasRead === "read"
            ? "card border-success mb-6"
            : "card border-danger mb-6"
        }>
        <div
          className={
            props.hasRead === "read"
              ? "card-body text-success"
              : "card-body text-danger"
          }
          style={{ maxWidth: "500px" }}>
          <h5 className="card-title">{props.bookTitle}</h5>
          <hr />
          <h6 className="card-subtitle">By {props.bookAuthor}</h6>
          <hr />
          <h6 className="card-subtitle">{props.bookPages} Pages</h6>
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.readBookToggler}>
            Toggle Read
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={props.deleteBook}>
            Delete Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default book;
