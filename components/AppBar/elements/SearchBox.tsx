"use client";
import React from "react";
import { Search, Command } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const SearchBox = () => {
  const [openSearch, setSearchOpen] = useState(false);
  useEffect(() => {
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
  return (
    <Button
      variant={"ghost"}
      className={
        " md:w-64 xl:w-72 px-2 h-10 rounded-md cursor-pointer sm:border sm:hover:border-zinc-500 flex items-center justify-between"
      }
      onClick={() => setSearchOpen((prev) => !prev)}
    >
      <div className="flex items-center gap-0.5">
        <Search className="p-1" />
        <p className="hidden sm:inline text-xs pr-1">Search Movies</p>
      </div>
      <div
        className={`hidden h-6 pr-1.5 rounded-sm md:flex items-center border bg-zinc-200 dark:bg-zinc-800`}
      >
        <Command className="p-1.5" />
        <p className="text-xs">k</p>
      </div>
    </Button>
  );
};
export default SearchBox;
