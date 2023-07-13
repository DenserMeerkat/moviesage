"use client";
import React from "react";
import SearchBox from "./SearchBox";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Search = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);
  useEffect(() => {
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
          <DialogContent className="top-12 w-full max-w-3xl max-h-screen">
            <DialogHeader>
              <DialogTitle>
                <div className="mt-6 md:mt-0 flex w-full max-w-2xl items-center gap-1">
                  <Input type="email" placeholder="Type movie title" />
                </div>
              </DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Search;
