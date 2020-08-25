import React, { Component } from "react";
import Form from "../Components/Form/Form";
import Book from "../Components/Book/Book";
import axios from "axios";
//import "./Library.css";

class Library extends Component {
  state = {
    books: [],
    showForm: false,
  };

  componentDidMount() {
    this.fetchBooks();
  }

  onAddBook = () => {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let hasRead = document.getElementById("hasRead");

    const book = {
      title: title.value,
      author: author.value,
      pages: pages.value,
      hasRead: hasRead.value,
    };
    axios
      .post("https://library-d6386.firebaseio.com/books.json", book)
      .then(() => {
        this.fetchBooks();
      });
  };

  toggleFormHandler = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  fetchBooks = () => {
    console.log("FETCHING");
    axios
      .get("https://library-d6386.firebaseio.com/books.json")
      .then((res) => {
        let fetchedBooks = [];
        for (let key in res.data) {
          fetchedBooks.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ books: fetchedBooks });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteBook = (bookId) => {
    axios
      .delete("https://library-d6386.firebaseio.com/books/" + bookId + ".json")
      .then(() => {
        this.fetchBooks();
        console.log("Deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  hasReadToggler = (bookId) => {
    axios
      .patch("https://library-d6386.firebaseio.com/books/" + bookId + ".json", {
        //hasRead: this.state.books.hasRead === "on" ? "off" : "on",
        hasRead: "on",
      })
      .then(() => {
        this.fetchBooks();
      });

    console.log("TOGGLED");
    console.log(this.state.books.hasRead);
  };

  render() {
    let form = this.state.showForm ? <Form onAddBook={this.onAddBook} /> : null;
    return (
      <div className="main">
        <input
          style={{ marginLeft: "50%" }}
          type="button"
          value="Toggle Form"
          onClick={this.toggleFormHandler}
        />
        {form}

        {this.state.books.map((book) => (
          <Book
            key={book.id}
            bookTitle={book.title}
            bookAuthor={book.author}
            bookPages={book.pages}
            hasRead={book.hasRead}
            deleteBook={() => this.deleteBook(book.id)}
            readBookToggler={() => this.hasReadToggler(book.id)}
          />
        ))}
      </div>
    );
  }
}

export default Library;
