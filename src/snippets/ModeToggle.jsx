import React, { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

function ModeToggle() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <button
        onClick={() => darkModeHandler()}
        className="rounded-sm p-1 align-bottom text-base ring-1 ring-slate-700/50 ring-offset-1 hover:ring-slate-700 dark:ring-slate-400 hover:dark:ring-slate-400/50"
      >
        {dark && <IoSunny />}
        {!dark && <IoMoon />}
      </button>
    </>
  );
}

export default ModeToggle;
