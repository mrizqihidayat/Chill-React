
const movieImage = (fileName) =>
  new URL(`../assets/movies/${fileName}`, import.meta.url).href;

export const continueWatchingData = [
  {
    id: 1,
    title: "My Perfect Stranger",
    image: movieImage("Type=1.png"),
    rating: 4.5,
  },
  {
    id: 2,
    title: "Shazam",
    image: movieImage("Type=2.png"),
    rating: 4.0,
  },
  {
    id: 3,
    title: "Blue Lock",
    image: movieImage("Type=5.png"),
    rating: 4.6,
  },
  {
    id: 4,
    title: "Rio",
    image: movieImage("Type=8.png"),
    rating: 4.2,
  },
  {
    id: 5,
    title: "Big Hero 6",
    image: movieImage("Type=10.png"),
    rating: 4.2,
  },
  {
    id: 6,
    title: "Suzume",
    image: movieImage("Type=11.png"),
    rating: 4.3,
  },
  {
    id: 7,
    title: "The Batman",
    image: movieImage("Type=12.png"),
    rating: 4.7,
  },
  {
    id: 8,
    title: "Missing",
    image: movieImage("Type=9.png"),
    rating: 4.0,
  },
  {
    id: 9,
    title: "Megan",
    image: movieImage("Type=20.png"),
    rating: 4.1,
  },
  {
    id: 10,
    title: "The Tomorrow War",
    image: movieImage("Type=7.png"),
    rating: 4.0,
  },
];

export const topRatedData = [
  {
    id: 1,
    image: movieImage("Number=18.png"),
    isNewEpisode: true,
    title: "My Hero Academia",
    rating: "13+",
    duration: "24m",
    genres: ["Animasi", "Aksi", "Pahlawan"],
  },
  {
    id: 2,
    image: movieImage("Number=9.png"),
    isNewEpisode: false,
    title: "All Of Us Are Dead",
    rating: "18+",
    duration: "12 Episode",
    genres: ["Horor", "Drama", "Zombie"],
  },
  {
    id: 3,
    image: movieImage("Number=26.png"),
    isNewEpisode: false,
    title: "BAYMAX!",
    rating: "SU",
    duration: "6 Episode",
    genres: ["Keluarga", "Komedi", "Petualangan"],
  },
  {
    id: 4,
    image: movieImage("Number=5.png"),
    isNewEpisode: true,
    title: "Blue Lock",
    rating: "13+",
    duration: "24m",
    genres: ["Animasi", "Olahraga", "Thriller"],
  },
  {
    id: 5,
    image: movieImage("Number=10.png"),
    isNewEpisode: false,
    title: "A Man Called Otto",
    rating: "13+",
    duration: "2j 6m",
    genres: ["Drama", "Komedi", "Kehidupan"],
  },
  {
    id: 6,
    image: movieImage("Number=17.png"),
    isNewEpisode: true,
    title: "Duty After School",
    rating: "17+",
    duration: "10 Episode",
    genres: ["Aksi", "Thriller", "Fiksi Ilmiah"],
  },
  {
    id: 7,
    image: movieImage("Number=23.png"),
    isNewEpisode: false,
    title: "Ted Lasso",
    rating: "17+",
    duration: "3 Season",
    genres: ["Komedi", "Drama", "Olahraga"],
  },
  {
    id: 8,
    image: movieImage("Number=22.png"),
    isNewEpisode: false,
    title: "The Devil All The Time",
    rating: "18+",
    duration: "2j 18m",
    genres: ["Kriminal", "Thriller", "Drama"],
  },
];


export const trendingData = [
  {
    id: 1,
    image: movieImage("Number=3.png"),
    title: "Avatar The Way of Water",
    top10: true,         
    duration: "3j 12m",
    genres: ["Fiksi Ilmiah", "Petualangan", "Aksi"],
  },
  {
    id: 2,
    image: movieImage("Number=7.png"),
    title: "The Tomorrow War",
    top10: true,         
    duration: "2j 18m",
    genres: ["Fiksi Ilmiah", "Aksi", "Petualangan"],
  },
  {
    id: 3,
    image: movieImage("Number=9.png"),
    title: "All of Us Are Dead",
    top10: true,         
    duration: "12 Episode",
    genres: ["Horor", "Drama", "Thriller"],
  },
  {
    id: 4,
    image: movieImage("Number=8.png"),
    title: "The Batman",
    top10: true,         
    duration: "2j 56m",
    genres: ["Aksi", "Kriminal", "Drama"],
  },
  {
    id: 5,
    image: movieImage("Number=14.png"),
    title: "Suzume",
    top10: true,         
    duration: "2j 2m",
    genres: ["Anime", "Fantasi", "Petualangan"],
  },
  {
    id: 6,
    image: movieImage("Number=16.png"),
    title: "Ant-Man and the Wasp: Quantumania",
    top10: true,         
    duration: "2j 5m",
    genres: ["Aksi", "Petualangan", "Komedi"],
  },
  {
    id: 7,
    image: movieImage("Number=19.png"),
    title: "Doctor Strange in the Multiverse of Madness",
    top10: true,         
    duration: "2j 6m",
    genres: ["Fantasi", "Aksi", "Petualangan"],
  },
  {
    id: 8,
    image: movieImage("Number=21.png"),
    title: "Black Adam",
    top10: true,         
    duration: "2j 5m",
    genres: ["Aksi", "Fantasi", "Fiksi Ilmiah"],
  },
  {
    id: 9,
    image: movieImage("Number=25.png"),
    title: "Jurassic World Dominion",
    top10: true,         
    duration: "2j 27m",
    genres: ["Aksi", "Petualangan", "Fiksi Ilmiah"],
  },
  {
    id: 10,
    image: movieImage("Number=27.png"),
    title: "Dilan 1991",
    top10: true,         
    duration: "1j 58m",
    genres: ["Drama", "Romantis"],
  },
];

export const newReleaseData = [
  {
    ...trendingData.find((movie) => movie.title === "Ant-Man and the Wasp: Quantumania"),
    id: 1,
  },
  {
    ...topRatedData.find((movie) => movie.title === "Duty After School"),
    id: 2,
  },
  {
    ...topRatedData.find((movie) => movie.title === "Blue Lock"),
    id: 3,
  },
  {
    ...topRatedData.find((movie) => movie.title === "BAYMAX!"),
    id: 4,
  },
  {
    ...trendingData.find((movie) => movie.title === "The Batman"),
    id: 5,
  },
  {
    ...trendingData.find((movie) => movie.title === "Suzume"),
    id: 6,
  },
  {
    ...trendingData.find((movie) => movie.title === "Avatar The Way of Water"),
    id: 7,
  },
];