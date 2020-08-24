import React, { Component } from "react";
import Form from "../Components/Form/Form";
import Book from "../Components/Book/Book";
import axios from "axios";
import "./Library.css";

class Library extends Component {
  state = {
    books: [],
    showForm: false,
  };

  componentDidMount() {
    this.fetchBooks();
    console.log(this.state.books);
  }

  onAddBook = () => {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    const book = {
      title: title.value,
      author: author.value,
      pages: pages.value,
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

  render() {
    let form = this.state.showForm ? <Form onAddBook={this.onAddBook} /> : null;
    return (
      <div className="main">
        {this.state.books.map((book) => (
          <Book
            key={book.id}
            bookTitle={book.title}
            bookAuthor={book.author}
            bookPages={book.pages}
            deleteBook={() => this.deleteBook(book.id)}
          />
        ))}
        <input
          type="button"
          value="Toggle Form"
          onClick={this.toggleFormHandler}
        />
        {form}
      </div>
    );
  }
}

export default Library;
