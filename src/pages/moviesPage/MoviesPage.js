import React, { Component } from "react";
import parseQueryString from "../../lib/parse-query-string";
import { Link } from "react-router-dom";
import SearchForm from "../../components/searchForm/SearchForm";
import styles from "./MoviesPage.module.css";

class Movies extends Component {
  state = {
    data: [],
    id: "",
  };

  componentDidMount() {
    const currentQuery = parseQueryString(this.props.location.search).query;
    if (currentQuery) {
      this.handleSearch();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const query = parseQueryString(prevProps.location.search).query;
    const currentQuery = parseQueryString(this.props.location.search).query;

    if (query !== currentQuery) {
      this.handleSearch();
    }
  }

  handleSearch = async () => {
    const { location } = this.props;
    const query = parseQueryString(location.search).query;
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6e40e6f870b3f7c3f9fcc54179d0bae2&query=${query}&language=en-US&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  };

  handleChange = (evt) => {
    this.setState({ term: evt.target.value });
  };

  handleSubmit = (term) => {
    const { history, location } = this.props;
    const query = parseQueryString(location.search).query;
    if (!term || term === query) {
      return;
    }

    history.push(`/movies?query=${term}`);
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <SearchForm searchProducts={this.handleSubmit} />
        <ul className={styles.setka}>
          {data.map((item) => (
            <Link
              key={item.id}
              to={{
                state: { from: this.props.location },
                pathname: `/movies/${item.id}`,
              }}
            >
              <li className={styles.li} key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.name}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Movies;
