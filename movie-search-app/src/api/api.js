//! Создание утилиты для выполнения запросов к API
import axios from "axios";

const API_KEY = "888adbf1"; // Замените на ваш API ключ
const BASE_URL = "http://www.omdbapi.com/";

export const fetchMovies = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: { apikey: API_KEY, s: query },
  });
  return response.data;
};

// обработка поиска и отображения результатов
