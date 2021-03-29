import { Component } from "react";
import * as movieSearchApi from "../../../services/movieAPI/movieSearch-API";

class Reviews extends Component {
  state = {
    info: null,
  };

  async componentDidMount() {
    const { movieId } = this.props;
    const response = await movieSearchApi.fetchMovieReviewsInfo(movieId);
    this.setState({ info: response.data.results });
  }

  render() {
    const { info } = this.state;

    if (info === null) {
      return <></>;
    }
    return (
      <>
        {info.length > 0 ? (
          <ul>
            {info.map(({ id, author, content }) => (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </>
    );
  }
}

export default Reviews;
