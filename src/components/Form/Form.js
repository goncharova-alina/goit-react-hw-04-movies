import { Component } from "react";
import { toast } from "react-toastify";

class Form extends Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    if (value.trim() === "") {
      toast.error("This field cannot be empty");
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="SearchForm">
        <input
          onChange={this.handleChange}
          value={this.state.value}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    );
  }
}

export default Form;
