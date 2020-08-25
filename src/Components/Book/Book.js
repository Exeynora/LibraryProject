import React from "react";
//import "./Book.css";

const book = (props) => {
  return (
    <div>
      <div
        className={
          props.hasRead === "on"
            ? "card border-success mb-6"
            : "card border-danger mb-6"
        }
        style={{
          maxWidth: "16%",
          minWidth: "16%",
          float: "left",
          textAlign: "center",
        }}>
        <div
          className={
            props.hasRead === "on"
              ? "card-body text-success"
              : "card-body text-danger"
          }
          style={{ maxWidth: "500px" }}>
          <h5 className="card-title">{props.bookTitle}</h5>
          <h6 className="card-subtitle">{props.bookAuthor}</h6>
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.readBookToggler}>
            Toggle Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default book;
