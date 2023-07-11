import React from "react";
import ThemeSwitcher from "./elements/ThemeSwitcher";
import GitHubLink from "./elements/Github";
import Login from "./elements/Login";
import SearchBox from "./elements/SearchBox";
import { useMediaQuery } from "react-responsive";

const Tray = () => {
  const isNonMobile = useMediaQuery({ minWidth: 600 });
  return (
    <div className={"flex gap-0.5 md:gap-1 items-center"}>
      <SearchBox />
      <div className="md:mx-1" />
      {isNonMobile && <GitHubLink />}
      <ThemeSwitcher />
      <div className="md:mx-1" />
      <Login />
    </div>
  );
};

export default Tray;
