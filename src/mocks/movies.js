export const GENRES = [
  { value: 'Action', label: 'Action' },
  { value: 'Drama', label: 'Drama' },
  { value: 'Fantasy', label: 'Fantasy' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Romance', label: 'Romance' },
  { value: 'Adventure', label: 'Adventure' },
  { value: 'Science Fiction', label: 'Science Fiction' },
];

export const FILTER_GENRES = ['All', 'Drama', 'Fantasy', 'Comedy', 'Adventure'];

export const SORT_BY = [
  {
    label: 'Default',
    value: null,
  },
  {
    label: 'Realease Date',
    value: 'release_date',
  },
  {
    label: 'Rating',
    value: 'vote_average',
  },
];

export const defaultImageURL = 'assets/images/no-image-found.png';
