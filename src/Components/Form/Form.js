import React, { Component } from "react";
import "./Form.css";

//Формата със сигурност може да бъде доста по-красива с Bootstrap, ама хич не ми се занимаваше
class Form extends Component {
  state = {
    checked: "unread",
    //checked: false,
  };

  hasReadToggler = () => {
    //Issue with React form sending hasRead as a string the first time.
    //this.setState({ checked: !this.state.checked });

    //newChecked should be the OPPOSITE of state checked
    let newChecked = this.state.checked === "unread" ? "read" : "unread";
    this.setState({ checked: newChecked });
  };

  render() {
    return (
      <form onSubmit={this.props.onAddBook}>
        <label htmlFor="title">Enter title:</label>
        <input required type="text" name="title" id="title" />
        <br />
        <label htmlFor="author">Enter author:</label>
        <input required type="text" name="author" id="author" />
        <br />
        <label htmlFor="pages">Enter pages:</label>
        <input required type="number" name="pages" id="pages" />
        <br />
        <label>
          Has Read:
          <input
            id="hasRead"
            name="hasRead"
            type="checkbox"
            onChange={this.hasReadToggler}
            defaultValue={this.state.checked}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
