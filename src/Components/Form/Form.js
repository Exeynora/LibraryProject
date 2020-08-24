import React from "react";

const form = (props) => {
  return (
    <form>
      <label htmlFor="title">Enter title:</label>
      <input required type="text" name="title" id="title" />
      <br />
      <label htmlFor="author">Enter author:</label>
      <input required type="text" name="author" id="author" />
      <br />
      <label htmlFor="pages">Enter pages:</label>
      <input required type="text" name="pages" id="pages" />
      <br />
      <input type="button" onClick={props.onAddBook} value="Submit" />
    </form>
  );
};

export default form;
