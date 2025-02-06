// отображение карточек фильмов
import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  return (
    <div className={styles["movie-card"]}>
      {" "}
      //! основной контейнер для карточки фильма
      <img
        src={movie.Poster}
        alt={movie.Title}
        className={styles["movie-poster"]}
      />
      //! изображения постера
      <h2 className={styles["movie-title"]}>{movie.Title}</h2>
      <p className={styles["movie-year"]}>{movie.Year}</p>
    </div>
  );
};
export default MovieCard;
