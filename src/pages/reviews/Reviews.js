import React, { Component } from "react";
import axios from "axios";


class Reviews extends Component {
  state = {
    results: [],
    moviesId: null,
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/reviews?api_key=6e40e6f870b3f7c3f9fcc54179d0bae2&language=en-US`
    );
    this.setState({ results: response.data.results });
  }
  
  render() {
    return (
      <>
        <h2>Story</h2>
        <ul>
          {this.state.results.map((item) => (
            <li key={item.id}>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;


