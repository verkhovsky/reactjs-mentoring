import { prepareMovie } from 'src/utils/moviesUtils';
import {
  getMoviesList,
  updateMovie,
  createMovie,
  deleteMovie,
} from 'src/services/movies';

export const SET_MOVIES = 'SET_MOVIES';
export const SET_MOVIES_LOADING = 'SET_MOVIES_LOADING';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_FILTER_BY = 'SET_FILTER_BY';
export const ADD_MOVIE = 'ADD_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export const setMovies = payload => ({ type: SET_MOVIES, payload });
export const setLoading = payload => ({ type: SET_MOVIES_LOADING, payload });
export const setSortBy = payload => ({ type: SET_SORT_BY, payload });
export const setFilterBy = payload => ({ type: SET_FILTER_BY, payload });
export const setCreatedMovie = payload => ({ type: ADD_MOVIE, payload });
export const setUpdatedMovie = payload => ({ type: UPDATE_MOVIE, payload });
export const setDeleteMovie = payload => ({ type: DELETE_MOVIE, payload });

// export const updateStoreMovie = (movie, callback) => (dispatch, getStore) => {
//   const store = getStore();
//   const movies = store.movies.movies;
//   const moviesData = movies.data;

//   const newMovies = moviesData.map(currentMovie =>
//     currentMovie.id !== movie.id ? currentMovie : movie,
//   );

//   dispatch(
//     setMovies({
//       ...movies,
//       data: newMovies,
//     }),
//   );
// };

export const fetchMovies = async dispatch => {
  try {
    dispatch(setLoading(true));
    const movies = await getMoviesList();

    dispatch(setMovies(movies));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addMovie = movie => async dispatch => {
  try {
    const preparedMovie = prepareMovie(movie);
    const createdMovie = await createMovie(preparedMovie);

    dispatch(setCreatedMovie(createdMovie));
  } catch (e) {}
};

export const editMovie = movie => async dispatch => {
  try {
    const preparedMovie = prepareMovie(movie);
    const updatedMovie = await updateMovie(preparedMovie);

    dispatch(setUpdatedMovie(updatedMovie));
  } catch (e) {}
};

export const removeMovie = id => async dispatch => {
  try {
    await deleteMovie(id);

    dispatch(setDeleteMovie(id));
  } catch (e) {}
};
