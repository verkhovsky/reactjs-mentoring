import {
  SET_MOVIES,
  SET_MOVIES_LOADING,
  SET_SORT_BY,
  SET_FILTER_BY,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
} from '../actions/movies';

const moviesState = {
  movies: {},
  isLoading: true,
  filterBy: 'All',
};

export const moviesReducer = (state = moviesState, { type, payload }) => {
  switch (type) {
    case SET_MOVIES:
      return { ...state, movies: payload };
    case SET_MOVIES_LOADING:
      return { ...state, isLoading: payload };
    case SET_SORT_BY:
      return { ...state, sortBy: payload };
    case SET_FILTER_BY:
      return { ...state, filterBy: payload };
    case ADD_MOVIE:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: [...state.movies.data, payload],
        },
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: state.movies.data.map(currentMovie =>
            currentMovie.id !== payload.id ? currentMovie : payload,
          ),
        },
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: state.movies.data.filter(
            currentMovie => currentMovie.id !== payload,
          ),
        },
      };
    default:
      return state;
  }
};
