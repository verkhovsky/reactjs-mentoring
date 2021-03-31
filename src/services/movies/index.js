import axios from 'axios';

import { DB_ENDPOINTS } from '../endpoints';

export const getMoviesList = params =>
  axios.get(DB_ENDPOINTS.MOVIES, {
    params: {
      ...params,
    },
  });

export const createMovie = movie =>
  axios.post(DB_ENDPOINTS.MOVIES, { ...movie });

export const updateMovie = movie =>
  axios.put(DB_ENDPOINTS.MOVIES, { ...movie });

export const deleteMovie = id => axios.delete(`${DB_ENDPOINTS.MOVIES}/${id}`);
