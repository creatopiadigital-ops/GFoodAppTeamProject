import Menu1 from '../images/Chicken.png'
const Menu = () => {
  return (
    <div className="flex flex-col h-full bg-[#F5F5F5]">
      <main className="flex-1 flex flex-col min-h-0 ">
        {/* Header */}
        <div className="flex gap-6 w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <h1 className="text-3xl font-meduim text-black mb-1 xs:mb-2">Menu</h1>
            <p className="text-lg font-normal text-gray-600">See what's on your Menu</p>
          </div>
          <div className="flex flex-row m-auto center px-4 gap-6 relative">
            <button className="px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              Take Out
            </button>
            <button className="px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              Additional Orders
            </button>
            <button className="px-4 py-2 font-light border border-purple-500 text-white bg-purple-900 rounded-md ">
              + Add New Order
            </button>
          </div>
        </div>
        <div className=" w-full bg-white mt-4 p-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search menu"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base font-normal"
            />
          </div>
          <div className="flex gap-6 my-3">
            <button className="px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              All
            </button>
            <button className="px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              Meals
            </button>
            <button className="px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              Seafood
            </button>
            <button className="px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              Dessert
            </button>
            <button className="px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              Sizzling
            </button>
            <button className="px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              Beverages
            </button>
            <button className="px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              Samgyupsal
            </button>
            <button className="px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              Other
            </button>
          </div>
          <div className="flex font-Meduim">
            <h2 className="fex my-2">Meals</h2>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-[251px] h-[221px] p-2 m-1 border rounded-lg">
              <img
                className="w-full h-[102px] border-10 rounded-xl border-gray-400"
                src={Menu1}
                alt="ChickenMenu"
              />
              <h1 className="text-black text-lg font-semibold">Chicken Adobo</h1>
              <p className="text-base font-normal text-gray-500">Meal</p>
            </div>
            <div className="flex flex-col w-[251px] h-[221px] p-2 m-1 border rounded-lg">
              <img
                className="w-full h-[102px] border-10 rounded-xl border-gray-400"
                src={Menu1}
                alt="ChickenMenu"
              />
              <h1 className="text-black text-lg font-semibold">Chicken Adobo</h1>
              <p className="text-base font-normal text-gray-500">Meal</p>
            </div>
            <div className="flex flex-col w-[251px] h-[221px] p-2 m-1 border rounded-lg">
              <img
                className="w-full h-[102px] border-10 rounded-xl border-gray-400"
                src={Menu1}
                alt="ChickenMenu"
              />
              <h1 className="text-black text-lg font-semibold">Chicken Adobo</h1>
              <p className="text-base font-normal text-gray-500">Meal</p>
            </div>
            <div className="flex flex-col w-[251px] h-[221px] p-2 m-1 border rounded-lg">
              <img
                className="w-full h-[102px] border-10 rounded-xl border-gray-400"
                src={Menu1}
                alt="ChickenMenu"
              />
              <h1 className="text-black text-lg font-semibold">Chicken Adobo</h1>
              <p className="text-base font-normal text-gray-500">Meal</p>
            </div>
            <div className="flex flex-col w-[251px] h-[221px] p-2 m-1 border rounded-lg">
              <img
                className="w-full h-[102px] border-10 rounded-xl border-gray-400"
                src={Menu1}
                alt="ChickenMenu"
              />
              <h1 className="text-black text-lg font-semibold">Chicken Adobo</h1>
              <p className="text-base font-normal text-gray-500">Meal</p>
            </div>
            <div className="flex flex-col w-[251px] h-[221px] p-2 m-1 border rounded-lg">
              <img
                className="w-full h-[102px] border-10 rounded-xl border-gray-400"
                src={Menu1}
                alt="ChickenMenu"
              />
              <h1 className="text-black text-lg font-semibold">Chicken Adobo</h1>
              <p className="text-base font-normal text-gray-500">Meal</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Menu
