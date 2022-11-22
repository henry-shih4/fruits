import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [background, setBackground] = useState();

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/watermelon") {
      setBackground("bg-red-300");
    } else if (location.pathname === "/orange") {
      setBackground("bg-orange-300");
    } else if (location.pathname === "/kiwi") {
      setBackground("bg-[#90C825]");
    } else {
      setBackground("bg-slate-300");
    }
  }, [location.pathname]);

  return (
    <>
      <div
        className={`${
          background ? background : null
        } h-12 w-full flex justify-start items-center pl-4`}
      >
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "h-full flex items-center p-2 bg-white text-black transition-all"
              : "p-2 h-full flex items-center text-white"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "h-full flex items-center p-2 bg-white text-black transition-all"
              : "p-2 h-full flex items-center text-white"
          }
          to="/watermelon"
        >
          Watermelon
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "h-full flex items-center p-2  bg-white text-black transition-all"
              : "p-2 h-full flex items-center text-white"
          }
          to="/orange"
        >
          Orange
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "h-full flex items-center p-2 justify-center w-[80px] bg-white text-black transition-all"
              : "p-2 h-full flex items-center text-white"
          }
          to="/kiwi"
        >
          Kiwi
        </NavLink>
      </div>
    </>
  );
}
