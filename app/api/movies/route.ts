import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { Movie } from "@/types/movie";

const moviesFilePath = path.join(process.cwd(), "public", "movies.json");

export async function GET(req: NextApiRequest, res: NextApiResponse<Movie[]>) {
  try {
    if (!fs.existsSync(moviesFilePath)) {
      throw new Error("Movies file not found");
    }

    const moviesData = fs.readFileSync(moviesFilePath, "utf-8");
    const movies = JSON.parse(moviesData) as Movie[];
    console.log("movies", movies);
    res.statusCode = 200;
    res.json(movies);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.statusCode = 500;
    res.json([]);
  }
}
