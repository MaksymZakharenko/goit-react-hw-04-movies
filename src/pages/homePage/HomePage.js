import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import styles from "./HomePage.module.css";

class HomeView extends Component {
  state = {
    movies: [],
    location: {},
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=6e40e6f870b3f7c3f9fcc54179d0bae2&language=en-US&page=1"
    );
    this.setState({ movies: response.data.results });
  }
  render() {
    return (
      <>
        <h1 className={styles.title}>Trending movies</h1>
        <ul className={styles.setka}>
          {this.state.movies.map((movie) => (
            <li key={movie.id} className={styles.li}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                <img className={styles.img}
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt=""
                />
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(HomeView);
