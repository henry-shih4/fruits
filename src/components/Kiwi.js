export default function Kiwi() {
  return (
    <>
      <div className="h-[calc(100vh-40px)]">
        <div className="md:grid grid-cols-2 grid-rows-4 h-full">
          <div className="h-[300px] lg:h-full row-start-1 row-end-3 col-start-1 ">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="w-3/4 h-full flex flex-col justify-center items-center space-y-3">
                <div className="mb-4">
                  <div className="text-2xl text-center">Kiwi</div>
                  <div className="text-center">
                    Kiwi, (Actinidia deliciosa), also called kiwifruit or
                    Chinese gooseberry, is an edible fruit of the family
                    Actinidiaceae. The plant is native to mainland China and
                    Taiwan and is also grown commercially in New Zealand and
                    California.
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
                  <div className="h-[40px] w-[120px] flex justify-center items-center underline bg-kiwi rounded-lg text-white -z-10">
                    See Recipes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 min-h-[300px] row-span-2 col-start-2 md:p-0">
            <img
              className="h-[300px] md:h-full w-full object-cover"
              src="images/kiwi1.jpg"
              alt="kiwi-whole"
            />
          </div>
          <div className="row-span-2 col-start-2">
            <div className="h-[300px] md:h-[360px] lg:h-full  w-full flex flex-col justify-center items-center">
              <div className="w-3/4 h-full flex flex-col justify-center items-center space-y-3">
                <div className="text-2xl">Nutrition Info</div>
                <div className="flex flex-col justify-center items-center space-y-3">
                  <div>One medium-sized kiwi (75g)</div>
                  <div className="flex space-x-4">
                    <ul>
                      <li>Calories: 42</li>
                      <li>Fat: 0.4g</li>
                      <li>Carbohydrates: 10.1g</li>
                      <li>Sodium: 3.8mg</li>
                      <li>Fiber: 2.1g</li>
                    </ul>
                    <ul>
                      <li>Sugars: 6.7g</li>
                      <li>Protein: 0.8g</li>
                      <li>Vitamin C: 56mg</li>
                      <li>Potassium: 148mg</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 min-h-[300px] row-start-3 row-end-5 col-start-1 md:p-0">
            <img
              className="h-[300px] md:h-full w-full object-cover"
              src="images/kiwi2.jpg"
              alt="kiwi-slice"
            />
          </div>
        </div>
      </div>
    </>
  );
}
