import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [background, setBackground] = useState();
  const [navAnimation, setNavAnimation] = useState(false);
  const [showList, setShowList] = useState(false);
  const [fruit, setFruit] = useState();

  let location = useLocation();

  useEffect(() => {
    console.log(showList);
  });

  useEffect(() => {
    if (location.pathname === "/watermelon") {
      setBackground("bg-watermelon");
    } else if (location.pathname === "/orange") {
      setBackground("bg-lightorange");
    } else if (location.pathname === "/kiwi") {
      setBackground("bg-kiwi");
    } else if (location.pathname === "/banana") {
      setBackground("bg-yellow-200");
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
          <div className="relative">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "justify-center w-[100px] h-full flex items-center p-2  bg-white text-black transition-colors duration-500"
                  : "justify-center w-[100px] p-2 h-full flex items-center text-white"
              }
              onClick={() => {
                setShowList(true);
              }}
            >
              {fruit ? (
                <>
                  <div>{fruit}</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </>
              ) : (
                "More"
              )}
            </NavLink>
            <div
              className={showList ? "absolute" : "absolute hidden"}
              onMouseLeave={() => {
                setShowList(false);
              }}
            >
              <ul>
                <NavLink
                  className="justify-center w-[100px] h-full flex items-center p-2  bg-white text-black transition-colors duration-500"
                  to="/banana"
                  onClick={() => {
                    setNavAnimation(true);
                    setFruit("Banana");
                  }}
                >
                  Banana
                </NavLink>
                <NavLink
                  className="justify-center w-[100px] h-full flex items-center p-2  bg-white text-black transition-colors duration-500"
                  to="/strawberry"
                  onClick={() => {
                    setNavAnimation(true);
                    setFruit("Strawberry");
                  }}
                >
                  Strawberry
                </NavLink>
                <NavLink
                  className="justify-center w-[100px] h-full flex items-center p-2  bg-white text-black transition-colors duration-500"
                  to="/blueberry"
                  onClick={() => {
                    setNavAnimation(true);
                    setFruit("Blueberry");
                  }}
                >
                  Blueberry
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
