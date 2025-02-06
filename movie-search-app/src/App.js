// src/App.js
import React, { useState } from "react";
import { fetchMovies } from "./api/api";
import SearchBar from "./components/searchBar/searchBar";
import MovieCard from "./components/Movie/MovieCard";
import styles from "./styles/App.module.css";

console.log(styles);

const App = () => {
  const [movies, setMovies] = useState([]); //данные о фильмах
  const [error, setError] = useState(""); //хранит сообщение об ошибке

  const handleSearch = async (query) => {
    //асинхронная функция принимает строку query (название фильма), выполняет запрос к API с помощью функции fetchMovies.
    try {
      const data = await fetchMovies(query);
      if (data.Response === "True") {
        setMovies(data.Search);
        setError(""); //Если ответ от API содержит Response: "True", то данные о фильмах сохраняются в состоянии movies, а сообщение об ошибке очищается.
      } else {
        setMovies([]);
        setError(data.Error); //Если ответ содержит Response: "False", то состояние movies очищается, и в error сохраняется сообщение об ошибке, полученное из API.
      }
    } catch (err) {
      setError("Ошибка при получении данных");
    }
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.paragraph}>Поиск фильмов </h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles["movie-list"]}>
        {" "}
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} /> // Для каждого фильма из массива movies создается компонент MovieCard, которому передаются данные о фильме и уникальный ключ key (используется imdbID).
        ))}
      </div>
    </div>
  );
};

export default App;
