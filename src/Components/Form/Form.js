import React from "react";

const book = (props) => {
  return (
    <div className="card">
      <form id="mainForm">
        <label for="title">Enter title:</label>
        <input type="text" name="title" id="title" />
        <br />
        <label for="author">Enter author:</label>

        <input type="text" name="author" id="author" />
        <br />
        <label for="pages">Enter pages:</label>
        <input type="text" name="pages" id="pages" />
        <input type="submit" onclick="addBookToLibrary(event);" />
      </form>
    </div>
  );
};

export default book;
