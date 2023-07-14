import { Movie } from "./fetchMovies";

function searchResullts(query: string, movies: Movie[]): Movie[] {
  const lowercaseQuery = query.toLowerCase();

  const filteredMovies = movies.filter((movie) => {
    const lowercaseTitle = movie.title.toLowerCase();
    // const lowercaseOverview = movie.overview.toLowerCase();

    return lowercaseTitle.includes(lowercaseQuery);
    //  ||
    // lowercaseOverview.includes(lowercaseQuery)
  });

  const sortedMovies = filteredMovies.sort((movieA, movieB) => {
    const relevanceScoreA = movieA.title.toLowerCase().indexOf(lowercaseQuery);
    // +
    // movieA.overview.toLowerCase().indexOf(lowercaseQuery);
    const relevanceScoreB = movieB.title.toLowerCase().indexOf(lowercaseQuery);
    // +
    // movieB.overview.toLowerCase().indexOf(lowercaseQuery);

    return relevanceScoreB - relevanceScoreA;
  });

  return sortedMovies;
}

export default searchResullts;
