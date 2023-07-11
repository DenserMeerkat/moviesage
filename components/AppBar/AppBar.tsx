import React from "react";
import LogoTitle from "./elements/LogoTitle";
import Tray from "./Tray";
import SearchBox from "./elements/SearchBox";

const AppBar = () => {
  return (
    <header
      className="sticky top-0 z-50 border-b 
    bg-slate-50/[0.5]  dark:bg-zinc-950/[0.7] backdrop-filter backdrop-blur-lg"
    >
      <div className=" max-w-7xl mx-auto py-2 px-2 md:px-6">
        <div className="w-full flex items-center justify-between">
          <LogoTitle />
          <Tray />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
