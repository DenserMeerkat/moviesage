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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import fetchMovies, { Movie, Genre, Keywords } from "@/backend/fetchMovies";
import searchMovies from "@/backend/searchLogic";

const Search = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [domLoaded, setDomLoaded] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchMovies();
      setMovies(fetchedData);
    };
    fetchData();
    setDomLoaded(true);
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

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
          <DialogContent className="w-full max-w-3xl max-h-screen">
            <DialogHeader>
              <DialogTitle>
                <div className="mt-6 md:mt-0 flex w-full max-w-2xl items-center gap-1">
                  <Input
                    type="email"
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
