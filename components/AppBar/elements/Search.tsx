"use client";
import React from "react";
import SearchBox from "./SearchBox";
import { useState, useEffect, ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SearchIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Movie } from "@/types/movie";
import searchMovies from "@/backend/searchLogic";

const Search = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [domLoaded, setDomLoaded] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/api/movies");
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
    setDomLoaded(true);
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  function handleKeyPress(event: KeyboardEvent) {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      setSearchOpen((prev) => !prev);
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    if (inputValue.length > 2) {
      const searchResults = searchMovies(inputValue, movies);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };
  return (
    <>
      {domLoaded && (
        <Dialog
          open={openSearch}
          onOpenChange={() => setSearchOpen((prev) => !prev)}
        >
          <DialogTrigger>
            <SearchBox
              open={openSearch}
              onClick={() => setSearchOpen((prev) => !prev)}
            />
          </DialogTrigger>
          <DialogContent className="w-full max-w-xl max-h-screen p-1">
            <DialogHeader>
              <DialogTitle>
                <div className="mt-6 md:mt-0 flex w-full max-w-xl items-center gap-1">
                  <SearchIcon className="h-5 w-5 ml-3" />
                  <Input
                    className="mr-8 border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent focus-visible:ring-transparent"
                    type="text"
                    placeholder="Type movie title"
                    onChange={handleInputChange}
                  />
                </div>
              </DialogTitle>
            </DialogHeader>

            {results.length > 1 && (
              <ScrollArea className="h-full md:h-96 max-w-2xl rounded-md">
                <div className="">
                  {results.map((movie) => (
                    <div
                      key={movie.id}
                      className="text-sm rounded-sm py-2 px-4 mb-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 hover:dark:bg-zinc-800 transition-colors"
                    >
                      {movie.title}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Search;
