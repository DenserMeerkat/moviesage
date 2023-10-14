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
