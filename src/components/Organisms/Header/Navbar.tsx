import { useState } from "react";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import useDarkMode from "../../../hooks/useDarkMode";
import dataList from "../../../util/data";
import Logo from "../../Molecules/Logo";

const lists = dataList();

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useDarkMode();

  function handleTheme() {
    const isDark = theme === "dark";

    setTheme(isDark ? "light" : "dark");
  }

  function handleMenu() {
    setMenu((old) => !old);
  }

  return (
    <nav className="fixed z-10 w-full top-0 bg-white dark:bg-slate-900">
      <div className="flex justify-around items-center py-5">
        <Logo />
        <ul className="hidden md:flex items-center space-x-10 text-gray-600 dark:text-gray-100 font-semibold text-md">
          {lists?.map((list, i) => (
            <li
              key={i}
              className="hover:text-gray-400 dark:hover:text-gray-300"
            >
              <a href={list.link}>{list.title}</a>
            </li>
          ))}
        </ul>
        <div onClick={handleTheme} className="hidden md:block">
          {theme === "dark" ? (
            <MoonIcon className="h-6 w-6 text-yellow-400 cursor-pointer" />
          ) : (
            <SunIcon className="h-6 w-6 text-yellow-400 cursor-pointer" />
          )}
        </div>
        {/* hamburger menu */}
        <div
          onClick={handleMenu}
          className="md:hidden space-y-1 cursor-pointer z-10"
        >
          {menu ? (
            <XIcon className="h-6 w-6 text-slate-100 font-bold" />
          ) : (
            <MenuIcon
              className={`h-7 w-7 ${
                theme === "dark" ? "text-gray-700" : "text-slate-100"
              }`}
            />
          )}
        </div>
        {/* mobile menu */}
        <ul
          className={`${
            !menu && "hidden"
          } md:hidden bg-indigo-500 absolute top-0 right-0 w-full text-center py-16 space-y-10 text-xl`}
        >
          {lists?.map((list, i) => (
            <li
              onClick={handleMenu}
              key={i}
              className="text-slate-100 font-semibold"
            >
              <a href={list.link}>{list.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
