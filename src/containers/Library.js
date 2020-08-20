import React, { Component } from "react";
import Form from "../Components/Form/Form";
import Book from "../Components/Book/Book";

class Library extends Component {
  onAddBook(event) {
    event.PreventDefault();
    console.log("hehe");
  }

  render() {
    return (
      <div>
        <Book />
        {/* <Form submitted={(event) => this.props.onAddBook(event)} /> */}
        <div className="card">
          <form>
            <label htmlFor="title">Enter title:</label>
            <input type="text" name="title" id="title" />
            <br />
            <label htmlFor="author">Enter author:</label>

            <input type="text" name="author" id="author" />
            <br />
            <label htmlFor="pages">Enter pages:</label>
            <input type="text" name="pages" id="pages" />
            <input type="submit" onClick={(event) => this.onAddBook(event)} />
          </form>
        </div>
      </div>
    );
  }
}

export default Library;
