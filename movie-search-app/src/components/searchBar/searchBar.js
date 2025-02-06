// src/components/SearchBar.js
import React, { useState } from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({ onSearch }) => {
  //функция, которая будет вызвана при отправке формы.
  const [query, setQuery] = useState(""); // Это состояние будет хранить текст, введенный пользователем в поле ввода.

  const handleSubmit = (e) => {
    e.preventDefault(); //предотвращает стандартное поведение браузера при отправке формы (перезагрузку страницы).
    onSearch(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["search-bar"]}>
      <input
        type="text"
        value={query} //связывает значение поля ввода с состоянием query, что позволяет отображать текущее значение.
        onChange={(e) => setQuery(e.target.value)} // обновлет состояние текста
        placeholder="Введите название фильма"
        className={styles["search-input"]} // поле ввода
      />
      <button type="submit" className={styles["search-button"]}>
        Поиск
      </button>
    </form>
  );
};

export default SearchBar;
