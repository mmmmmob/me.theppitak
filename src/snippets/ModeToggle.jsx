import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

function ModeToggle() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={changeTheme}
      className="rounded-sm p-1 align-bottom text-base ring-1 ring-slate-700/50 ring-offset-1 hover:ring-slate-700 dark:ring-slate-400 hover:dark:ring-slate-400/50"
    >
      {theme === "dark" ? <IoSunny /> : <IoMoon />}
    </button>
  );
}

export default ModeToggle;
