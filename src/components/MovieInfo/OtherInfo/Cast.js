import { Component } from "react";
import * as movieSearchApi from "../../../services/movieAPI/movieSearch-API";
import originPath from "../../../path";
import "./Cast.scss";
import defaultImg from "../../../default.jpg";

class Cast extends Component {
  static defaultProps = {
    defaultImg: defaultImg,
  };
  state = {
    info: null,
  };

  async componentDidMount() {
    const { movieId } = this.props;

    const response = await movieSearchApi.fetchMovieCastInfo(movieId);
    this.setState({ info: response.data });
  }

  render() {
    const { info } = this.state;

    if (info === null) {
      return <></>;
    }

    return (
      <>
        {info.cast.length > 0 ? (
          <ul className="CastList">
            {info.cast.map((elem) => (
              <li key={elem.id} className="item">
                {elem.profile_path ? (
                  <img
                    src={`${originPath.imageProfile}${elem.profile_path}`}
                    alt={elem.original_name}
                    width="45"
                  />
                ) : (
                  <img src={this.props.defaultImg} alt="Not found" width="45" />
                )}

                {elem.original_name}
                <p>Character: {elem.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No info</p>
        )}
      </>
    );
  }
}

export default Cast;
