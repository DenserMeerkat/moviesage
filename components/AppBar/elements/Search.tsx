"use client";
import React from "react";
import SearchBox from "./SearchBox";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const Search = () => {
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
      <DialogContent className="">
        <DialogHeader></DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
