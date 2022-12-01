import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [background, setBackground] = useState();
  const [navAnimation, setNavAnimation] = useState(false);
  const [showList, setShowList] = useState(false);
  const [activePage, setActivePage] = useState(false);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setActivePage(true);
    }
    if (location.pathname === "/watermelon") {
      setBackground("bg-watermelon");
    } else if (location.pathname === "/orange") {
      setBackground("bg-lightorange");
    } else if (location.pathname === "/kiwi") {
      setBackground("bg-kiwi");
    } else if (location.pathname === "/banana") {
      setBackground("bg-banana");
    } else if (location.pathname === "/strawberry") {
      setBackground("bg-strawberry");
    } else if (location.pathname === "/blueberry") {
      setBackground("bg-blueberry");
    } else {
      setBackground("bg-orange-100");
    }
  }, [location.pathname]);

  const fruits = [
    "watermelon",
    "orange",
    "kiwi",
    "banana",
    "strawberry",
    "blueberry",
  ];

  return (
    <>
      <div className="h-10">
        <div className="w-full flex justify-start items-center relative">
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
                : "justify-center w-[100px]  p-2 h-full flex items-center"
            }
            to="/"
            onClick={() => {
              setActivePage(false);
            }}
          >
            Home
          </NavLink>
          <div
            onMouseLeave={() => {
              setShowList(false);
            }}
          >
            <div className="relative">
              <div
                className={
                  activePage
                    ? "justify-center w-[100px] h-full flex items-center p-2  bg-white text-black transition-colors duration-500"
                    : "justify-center w-[100px]  p-2 h-full flex items-center text-white"
                }
                onClick={() => {
                  setShowList(true);
                }}
              >
                {
                  <>
                    <div className="flex justify-center items-center space-x-1 cursor-pointer">
                      <div className="text-black">Fruits</div>
                      <div className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-4 h-4 flex justify-center items-center"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                }
              </div>
              <div className={showList ? "absolute" : "absolute hidden"}>
                <ul>
                  {fruits.map((fruit) => {
                    return (
                      <NavLink
                        className="relative justify-center w-[100px] h-full flex items-center p-2  bg-white text-black transition-colors duration-300 hover:bg-slate-200"
                        to={`/${fruit}`}
                        onClick={() => {
                          setNavAnimation(true);
                          setActivePage(true);
                        }}
                      >
                        {fruit[0].toUpperCase() + fruit.slice(1)}
                      </NavLink>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
