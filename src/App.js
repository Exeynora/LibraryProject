import React from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Book from "./Components/Book/Book";

function App() {
  return (
    <div className="App">
      <Book bookTitle="Something" bookAuthor="somebody" />
      <Form />
    </div>
  );
}

export default App;
