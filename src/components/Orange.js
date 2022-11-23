export default function Orange() {
  return (
    <>
      <div className="h-screen">
        <div className="lg:grid grid-cols-2 grid-rows-4 h-full">
          <div className="h-[300px] md:h-[360px] lg:h-full row-start-1 row-end-3 col-start-1 ">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="w-3/4 h-full flex flex-col justify-center items-center space-y-3">
                <div className="text-2xl">Orange</div>
                <div>
                  Orange, any of several species of small trees or shrubs of the
                  genus Citrus of the family Rutaceae and their nearly round
                  fruits, which have leathery and oily rinds and edible, juicy
                  inner flesh
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[300px] row-span-2 col-start-2">
            <img
              className="h-full w-full object-cover"
              src="images/orange1.jpg"
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
          <div className="min-h-[300px] row-start-3 row-end-5 col-start-1">
            <img
              className=" h-full w-full object-cover"
              src="images/orange2.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
