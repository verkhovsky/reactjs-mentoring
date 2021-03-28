import { combineReducers } from 'redux';

import { moviesReducer } from './movies';

export const reducers = combineReducers({
  movies: moviesReducer,
});
