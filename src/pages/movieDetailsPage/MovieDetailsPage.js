import React, { Component} from "react";
import axios from "axios";
import { NavLink, Route, withRouter } from "react-router-dom";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";
import styles from "./MovieDetailsPage.module.css";

class MovieDetails extends Component {
  state = {
    id: null,
    movie: null,
    original_title: null,
    release_date: null,
    overview: null,
    genres: [],
    backdrop_path: null,
  };

  async componentDidMount() {
    const { moviesId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${moviesId}?api_key=6e40e6f870b3f7c3f9fcc54179d0bae2&language=en-US`
    );
    this.setState({ ...response.data });

    console.log(response.data);

  }
  handelClick = () => {
    const { location, history } = this.props;
    history.push(location.state?.from || "/");
  };

  render() {

    return (
      <>
        <div className={styles.main}>
          <button
            onClick={this.handelClick}
            type="button"
            className={styles.goback}
          >
            Go back
          </button>
          <h2 className={styles.title}>
            {this.state.original_title} &nbsp; ({this.state.release_date})
          </h2>
          <div className={styles.block}>
            <img
              src={`https://image.tmdb.org/t/p/w400${this.state.poster_path}`}
              alt=""
            />
            <div className={styles.overview}>
              <h3 className={styles.overwiev_title}>Overview</h3>
              <p className={styles.overwiev_text}>{this.state.overview}</p>
            </div>

            <span>
              <h3>Genres</h3>
              {this.state.genres.map(({ id, name }) => (
                <li className={styles.item} key={id}>
                  {name}
                </li>
              ))}
            </span>
          </div>
          <div className={styles.main}>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/cast`,
                    state: { from: this.props.location.state?.from },
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/reviews`,
                    state: { from: this.props.location.state?.from },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Route path={`${this.props.match.path}/cast`}>
            <Cast id={this.props.match.params.moviesId} />
          </Route>
          <Route path={`${this.props.match.path}/reviews`}>
            <Reviews id={this.props.match.params.moviesId} />
          </Route>
        </div>
      </>
    );
  }
}

export default withRouter(MovieDetails);
