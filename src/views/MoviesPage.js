import { Component } from "react";
import queryString from "query-string";

import MoviesList from "../components/MoviesList/MoviesList";
import * as movieSearchAPI from "../services/movieAPI/movieSearch-API";
import Form from "../components/Form/Form";

class MoviesPage extends Component {
  state = {
    movies: null,
  };

  componentDidMount() {
    const { search } = this.props.location;
    if (search) {
      const parsed = queryString.parse(search);
      const response = movieSearchAPI.fetchMovieOnSubmit(parsed.query);
      response.then((r) => this.setState({ movies: r.data.results }));
    }
  }

  handleSearch = (query) => {
    const { history, match } = this.props;
    history.push(`${match.url}?query=${query}`);
    const response = movieSearchAPI.fetchMovieOnSubmit(query);
    response.then((r) => this.setState({ movies: r.data.results }));
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSearch} />
        {this.state.movies && (
          <>
            <MoviesList movies={this.state.movies} />
          </>
        )}
      </>
    );
  }
}

export default MoviesPage;
