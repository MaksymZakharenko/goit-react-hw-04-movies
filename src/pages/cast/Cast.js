import React, { Component } from "react";
import axios from "axios";
import styles from "./Cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
    moviesId: null,
    id: "",
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=6e40e6f870b3f7c3f9fcc54179d0bae2&language=ru-RU`
    );
    this.setState({ cast: response.data.cast });
  }

  render() {
    return (
      <ul className={styles.cast}>
        {this.state.cast.map((item) => (
          <li className={styles.item} key={item.id}>
            {item.profile_path !== null ? (
              <img
                className={styles.img}
                src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                alt={item.name}
              />
            ) : (
              <img
                className={styles.img}
                src="https://media.istockphoto.com/photos/keep-calm-and-dont-panic-picture-id478551858?k=6&m=478551858&s=612x612&w=0&h=WAGDYOp1ZgUbBX41XRmllq2ykLmL26SxvLlwvjpnnfg="
                alt={item.name}
              />
            )}

            <h2 className={styles.actor}>{item.name}</h2>
            <p className={styles.actor}>{item.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
