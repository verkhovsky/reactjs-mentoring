import { object, string, number, array } from 'yup';

import { ERROR_LABELS, urlRegex } from './constants';

export const ActionModalSchema = object().shape({
  title: string()
    .min(3, ERROR_LABELS.titleMin)
    .required(ERROR_LABELS.titleRequired),
  overview: string().required(ERROR_LABELS.overview),
  runtime: number()
    .min(1, ERROR_LABELS.runtimeMin)
    .required(ERROR_LABELS.runtimeRequired),
  genres: array().min(1, ERROR_LABELS.required),
  poster_path: string()
    .matches(urlRegex, ERROR_LABELS.correctUrl)
    .required(ERROR_LABELS.posterPath),
});
