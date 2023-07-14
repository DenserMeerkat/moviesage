export interface Genre {
  id: number;
  name: string;
}

export interface Keywords {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  keywords: Keywords[];
  original_language: string;
  overview: string;
  popularity: number;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
}

const fetchMovies = async () => {
  try {
    // Check if the data is already stored in local storage
    const storedData = sessionStorage.getItem("moviesData");
    if (storedData) {
      return JSON.parse(storedData) as Movie[];
    } else {
      // Fetch the JSON data if it's not stored in local storage
      const response = await fetch("/movies.json");
      const jsonData = await response.json();

      // Store the fetched data in local storage
      sessionStorage.setItem("moviesData", JSON.stringify(jsonData));

      return jsonData as Movie[];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [] as Movie[];
  }
};

export default fetchMovies;
