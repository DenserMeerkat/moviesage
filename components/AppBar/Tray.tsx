import React from "react";
import ThemeSwitcher from "./elements/ThemeSwitcher";
import GitHubLink from "./elements/Github";
import Login from "./elements/Login";
import SearchBox from "./elements/SearchBox";

const Tray = () => {
  return (
    <div
      className={
        "flex gap-0.5 min-[400px]:gap-1 sm:gap-1.5 lg:gap-2 items-center"
      }
    >
      <SearchBox />
      <GitHubLink />
      <ThemeSwitcher />
      <Login />
    </div>
  );
};

export default Tray;
