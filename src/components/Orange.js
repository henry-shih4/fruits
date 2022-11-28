export default function Orange() {
  return (
    <>
      <div className="h-[calc(100vh-40px)]">
        <div className="lg:grid grid-cols-2 grid-rows-4 h-full">
          <div className="h-[300px] lg:h-full row-start-1 row-end-3 col-start-1 ">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="w-3/4 h-full flex flex-col justify-center items-center space-y-3">
                <div className="mb-4">
                  <div className="flex justify-center items-center text-2xl">
                    Orange
                  </div>
                  <div className="text-center">
                    Orange, any of several species of small trees or shrubs of
                    the genus Citrus of the family Rutaceae and their nearly
                    round fruits, which have leathery and oily rinds and edible,
                    juicy inner flesh
                  </div>
                </div>
                <div className="relative flex justify-center items-center w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="absolute -left-10 w-6 h-6 animate-flash bg-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <div className="h-[40px] w-[120px] flex justify-center items-center underline bg-lightorange rounded-lg text-white">
                    See Recipes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 min-h-[300px] row-span-2 col-start-2 lg:p-0">
            <img
              className=" h-[300px] md:h-[360px] lg:h-full w-full object-cover"
              src="images/orange1.jpg"
              alt="orange-whole"
            />
          </div>
          <div className="row-span-2 col-start-2">
            <div className="h-[300px] md:h-[360px] lg:h-full  w-full flex flex-col justify-center items-center">
              <div className="w-3/4 h-full flex flex-col justify-center items-center space-y-3">
                <div className="text-2xl">Nutrition Info</div>
                <div className="flex flex-col justify-center items-center space-y-3">
                  <div>One navel orange (140g)</div>
                  <div className="flex space-x-4">
                    <ul>
                      <li>Calories: 73</li>
                      <li>Fat: 0.2g</li>
                      <li>Carbohydrates: 16.5g</li>
                      <li>Fiber: 2.8g</li>
                    </ul>
                    <ul>
                      <li>Sugars: 12g</li>
                      <li>Protein: 1.3g</li>
                      <li>Vitamin C: 82.7mg</li>
                      <li>Potassium: 232mg</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 min-h-[300px] row-start-3 row-end-5 col-start-1 lg:p-0">
            <img
              className="h-[300px] md:h-[360px] lg:h-full w-full object-cover"
              src="images/orange2.jpg"
              alt="orange-slice"
            />
          </div>
        </div>
      </div>
    </>
  );
}
