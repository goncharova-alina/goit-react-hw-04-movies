import { Component } from "react";
import * as movieSearchAPI from "../services/movieAPI/movieSearch-API";
import MoviesList from "../components/MoviesList/MoviesList";

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const response = await movieSearchAPI.fetchMoviesTrending();

    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default HomePage;
