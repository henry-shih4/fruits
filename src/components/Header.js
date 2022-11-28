import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [background, setBackground] = useState();
  const [navAnimation, setNavAnimation] = useState(false);

  let location = useLocation();

  useEffect(() => {
    console.log(navAnimation);
  });

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
      <div className=" h-10">
        <div className="w-full flex justify-start items-center relative z-1">
          <div
            className={
              navAnimation
                ? `animate-backgroundSlide ${background} absolute top-0 left-0 w-full h-full -z-10`
                : `${background} absolute top-0 left-0 w-full h-full -z-10`
            }
            onAnimationEnd={() => {
              setNavAnimation(false);
            }}
          ></div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "justify-center w-[100px] h-full flex items-center p-2 bg-white text-black transition-colors duration-500"
                : "justify-center w-[100px]  p-2 h-full flex items-center text-white"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "justify-center w-[100px] h-full flex items-center p-2 bg-white text-black transition-colors duration-500"
                : "justify-center w-[100px]  p-2 h-full flex items-center text-white"
            }
            onClick={() => {
              setNavAnimation(true);
            }}
            to="/watermelon"
          >
            Watermelon
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "justify-center w-[100px] h-full flex items-center p-2  bg-white text-black transition-colors duration-500"
                : "justify-center w-[100px] p-2 h-full flex items-center text-white"
            }
            to="/orange"
            onClick={() => {
              setNavAnimation(true);
            }}
          >
            Orange
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "justify-center w-[100px] h-full flex items-center p-2  bg-white text-black transition-colors duration-500"
                : "justify-center w-[100px] p-2 h-full flex items-center text-white"
            }
            to="/kiwi"
            onClick={() => {
              setNavAnimation(true);
            }}
          >
            Kiwi
          </NavLink>
        </div>
      </div>
    </>
  );
}
