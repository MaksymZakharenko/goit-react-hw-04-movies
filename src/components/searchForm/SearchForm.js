import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";

class SearchForm extends Component {
  static propTypes = {
    searchProducts: PropTypes.func.isRequired,
  };

  state = {
    search: "",
  };

  handleChange = (evt) => {
    this.setState({ search: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.searchProducts(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    const { search } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          name="search"
          onChange={this.handleChange}
          type="text"
          value={search}
          placeholder="enter name movies"
        />
        <button className={styles.button} type="submit">
          ENTER
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  searchProducts: PropTypes.func.isRequired,
};

export default SearchForm;
