import Header from "./Header";

export default function Watermelon() {
  return (
    <>
      <div className="h-[calc(100vh-40px)]">
        <div className="md:grid grid-cols-2 grid-rows-4 h-full lg:w-11/12 mx-auto">
          <div className="h-[300px] lg:h-full row-start-1 row-end-3 col-start-1 ">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="w-3/4 h-full flex flex-col justify-center items-center space-y-3">
                <div className="mb-4">
                  <div className="flex justify-center items-center text-2xl">
                    Watermelon
                  </div>
                  <div className="text-center">
                    Watermelon, (Citrullus lanatus), succulent fruit and
                    vinelike plant of the gourd family (Cucurbitaceae), native
                    to tropical Africa and cultivated around the world.
                  </div>
                </div>
                <div className="relative flex justify-center items-center w-max">
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
                  <div className="h-[40px] w-[120px] flex justify-center items-center underline bg-watermelon rounded-lg text-white -z-10">
                    See Recipes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 min-h-[300px] row-span-2 col-start-2 md:p-0">
            <img
              className="h-[300px] md:h-full w-full object-cover"
              src="images/watermelon1.jpg"
              alt="watermelon-whole"
            />
          </div>
          <div className="row-span-2 col-start-2">
            <div className="h-[300px] md:h-[360px] lg:h-full  w-full flex flex-col justify-center items-center">
              <div className="w-3/4 h-full flex flex-col justify-center items-center space-y-3">
                <div className="text-2xl">Nutrition Info</div>
                <div className="flex flex-col justify-center items-center space-y-3">
                  <div>One cup of diced watermelon (152g)</div>
                  <div className="flex space-x-4">
                    <ul>
                      <li>Calories: 46</li>
                      <li>Fat: 0.2g</li>
                      <li>Carbohydrates: 11.5g</li>
                      <li>Sodium: 1.5mg</li>
                      <li>Fiber: 0.6g</li>
                    </ul>
                    <ul>
                      <li>Sugars: 9.4g</li>
                      <li>Protein: 0.9g</li>
                      <li>Vitamin C: 12.3mg</li>
                      <li>Vitamin A: 42.6mcg</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 min-h-[300px] row-start-3 row-end-5 col-start-1 md:p-0">
            <img
              className="h-[300px] md:h-full w-full object-cover "
              src="images/watermelon2.jpg"
              alt="watermelon-slice"
            />
          </div>
        </div>
      </div>
    </>
  );
}
