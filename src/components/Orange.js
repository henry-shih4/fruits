export default function Orange() {
  return (
    <>
      <div className="min-h-screen">
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
          <div className="min-h-[300px] p-3 row-span-2 col-start-2">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="images/orange1.jpg"
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
          <div className="min-h-[300px] p-3 row-start-3 row-end-5 col-start-1">
            <img
              className=" h-full w-full object-cover rounded-lg"
              src="images/orange2.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
