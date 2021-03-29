import React from "react";
import originPath from "../../../path";
import "./MovieMainInfo.scss";

const MovieMainInfo = ({ movie, defaultImg }) => {
  const {
    title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;

  const userScore = vote_average * 10;

  const imgPath = `${originPath.imagePoster}${poster_path}`;
  const imgUrl = poster_path ? imgPath : defaultImg;
  const releaseYear = release_date.slice(0, 4);

  return (
    <>
      <div className="movie-main-info">
        <div className="MovieImg">
          <img className="poster" src={imgUrl} alt={title} width={185} />
        </div>

        <div className="MovieDesc">
          <h2 className="title">
            {title}({releaseYear})
          </h2>
          <p className="text">User score: {userScore} %</p>
          <h3>Overview</h3>
          {overview ? <p>{overview}</p> : <p>No data</p>}

          <h3>Genres</h3>

          {genres && genres.length > 0 ? (
            <p>{genres.map((ganre) => ganre.name).join(" ")}</p>
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieMainInfo;
