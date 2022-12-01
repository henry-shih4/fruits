import { useNavigate } from "react-router-dom";

export default function Blueberry() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[calc(100vh-40px)]">
        <div className="md:grid grid-cols-2 grid-rows-4 h-full">
          <div className="h-[300px] md:h-full row-start-1 row-end-3 col-start-1 ">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="w-3/4 h-full flex flex-col justify-center items-center space-y-3">
                <div className="mb-4">
                  <div className="font-bold text-xl flex justify-center items-center md:text-2xl">
                    Blueberry
                  </div>
                  <div className="text-center">
                    the edible blue or blackish berry of any of several North
                    American plants (genus Vaccinium) of the heath family
                  </div>
                </div>
                <div
                  className="relative flex justify-center items-center w-max"
                  onClick={() => {
                    navigate("/recipes/blueberries");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="absolute -left-10 w-6 h-6 animate-flash bg-white -z-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <div className="h-[40px] w-[120px] flex justify-center items-center underline bg-blueberry rounded-lg text-white -z-10">
                    See Recipes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 min-h-[300px] row-span-2 col-start-2 md:p-0">
            <img
              className=" h-[300px] md:h-full w-full object-cover"
              src="images/blueberry1.jpg"
              alt="blueberries"
            />
          </div>
          <div className="row-span-2 col-start-2">
            <div className="h-[300px] md:h-full  w-full flex flex-col justify-center items-center">
              <div className="w-3/4 h-full flex flex-col justify-center items-center space-y-3">
                <div className="font-bold text-xl md:text-2xl">
                  Nutrition Info
                </div>
                <div className="flex flex-col justify-center items-center space-y-3">
                  <div>3.5-ounce (100-gram) serving of raw blueberries</div>
                  <div className="flex space-x-4">
                    <ul>
                      <li>Calories: 57</li>
                      <li>Fat: 0.3g</li>
                      <li>Carbohydrates: 14.5g</li>
                      <li>Fiber: 2.4g</li>
                    </ul>
                    <ul>
                      <li>Sugars: 10g</li>
                      <li>Protein: 0.7g</li>
                      <li>Water: 84%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 min-h-[300px] row-start-3 row-end-5 col-start-1 md:p-0">
            <img
              className="h-[300px] md:h-full w-full object-cover"
              src="images/blueberry2.jpg"
              alt="blueberry-plant"
            />
          </div>
        </div>
      </div>
    </>
  );
}
