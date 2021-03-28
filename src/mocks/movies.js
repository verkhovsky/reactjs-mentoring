export const MOVIES_DATA = [
  {
    title: 'Pulp Fiction',
    id: 'puplFiction',
    genre: 'Action',
    imageUrl: 'assets/images/pulp-fiction.png',
    releaseDate: new Date(2004, 11, 11),
    url: 'https://www.imdb.com/title/tt0110912/',
    overview:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    runtime: 154,
  },
  {
    title: 'Bohemian Rhapsody',
    id: 'bohemianRhapsody',
    genre: 'Drama',
    imageUrl: 'assets/images/bohemian-rhapsody.png',
    releaseDate: new Date(2003, 9, 10),
    url: 'https://www.imdb.com/title/tt1727824/',
    overview:
      'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid',
    runtime: 134,
  },
  {
    title: 'Kill Bill: Vol 2',
    id: 'killBill2',
    genre: 'Crime',
    imageUrl: 'assets/images/kill-bill-vol-2.png',
    releaseDate: new Date(1994, 8, 9),
    url: 'https://www.imdb.com/title/tt0378194/',
    overview:
      'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.',
    runtime: 137,
  },
  {
    title: 'Avengers: War of Infinity',
    id: 'avengersInfinity',
    genre: 'Action',
    imageUrl: 'assets/images/avengers.png',
    releaseDate: new Date(2004, 3, 4),
    url: 'https://www.imdb.com/title/tt4154756/',
    overview:
      'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe',
    runtime: 149,
  },
  {
    title: 'Inception',
    id: 'inception',
    genre: 'Action',
    imageUrl: 'assets/images/inception.png',
    releaseDate: new Date(2003, 3, 1),
    url: 'https://www.imdb.com/title/tt1375666/',
    overview:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    runtime: 148,
  },
  {
    title: 'Reservoir dogs',
    id: 'reservoirDogs',
    genre: 'Crime',
    imageUrl: 'assets/images/reservoir-dogs.png',
    releaseDate: new Date(1994, 0, 30),
    url: 'https://www.imdb.com/title/tt0105236/',
    overview:
      'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
    runtime: 99,
  },
];

export const GENRES = [
  'All',
  'Action',
  'Drama',
  'Documentary',
  'Comedy',
  'Horror',
  'Crime',
];

export const SORT_BY = [
  {
    value: 'Realease Date',
    id: 'realeaseDate',
  },
  {
    value: 'Rating',
    id: 'rating',
  },
];
