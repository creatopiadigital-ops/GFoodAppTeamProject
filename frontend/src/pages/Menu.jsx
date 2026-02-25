import Menu1 from '../images/Chicken.png'
import Menu2 from '../images/Karekare.png'
import Menu3 from '../images/CrispyPata.png'
import Menu4 from '../images/LechonKawali.png'
import Menu5 from '../images/Chicken.png'
import Menu6 from '../images/BistikTagalog.png'
import Menu7 from '../images/Chicken.png'
import Menu8 from '../images/Karekare.png'
import Menu9 from '../images/CrispyPata.png'
import Menu10 from '../images/LechonKawali.png'
import Menu11 from '../images/Chicken.png'
import Menu12 from '../images/BistikTagalog.png'
import Menu13 from '../images/Chicken.png'
import Menu14 from '../images/Karekare.png'
import Menu15 from '../images/CrispyPata.png'
import Menu16 from '../images/LechonKawali.png'
import Menu17 from '../images/LechonKawali.png'
import Menu18 from '../images/Chicken.png'
import Menu19 from '../images/BistikTagalog.png'
import Menu20 from '../images/Chicken.png'
import Menu21 from '../images/Karekare.png'
import Menu22 from '../images/CrispyPata.png'
import Menu23 from '../images/LechonKawali.png'
import Menu24 from '../images/Chicken.png'
import Menu25 from '../images/BistikTagalog.png'
import Menu26 from '../images/Karekare.png'
import Menu27 from '../images/CrispyPata.png'
import Menu28 from '../images/LechonKawali.png'
import Menu29 from '../images/Chicken.png'
import Menu30 from '../images/BistikTagalog.png'
const Menu = () => {
  const MenuItems = [
    {
      menuImage: Menu1,
      menuTitle: 'Adobo',
      menuCategory: 'Meals',
      menuPrice: '$380'
    },
    { menuImage: Menu2, menuTitle: 'Kare-kare', menuCategory: 'Meals', menuPrice: '$550' },
    { menuImage: Menu3, menuTitle: 'Crispy Pata', menuCategory: 'Meals', menuPrice: '$720' },
    { menuImage: Menu4, menuTitle: 'Lechon Kawali', menuCategory: 'Meals', menuPrice: '$480' },
    { menuImage: Menu5, menuTitle: 'Chicken Inasal', menuCategory: 'Meals', menuPrice: '$420' },
    { menuImage: Menu6, menuTitle: 'Bistik Tagalog', menuCategory: 'Meals', menuPrice: '$420' },
    { menuImage: Menu7, menuTitle: 'Grilled Bangus', menuCategory: 'Seafood', menuPrice: '$460' },
    { menuImage: Menu8, menuTitle: 'Mixed Seafood', menuCategory: 'Seafood', menuPrice: '$520' },
    {
      menuImage: Menu9,
      menuTitle: 'Sweat & sour food',
      menuCategory: 'Seafood',
      menuPrice: '$560'
    },
    {
      menuImage: Menu10,
      menuTitle: 'Butter Garlic Shrimp',
      menuCategory: 'Seafood',
      menuPrice: '$540'
    },
    { menuImage: Menu11, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$220' },
    { menuImage: Menu12, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu13, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu14, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu15, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu16, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu17, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu18, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu19, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu20, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu21, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu22, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu23, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu24, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu25, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu26, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu27, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu28, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu29, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' },
    { menuImage: Menu30, menuTitle: 'Calamares', menuCategory: 'Seafood', menuPrice: '$550' }
  ]
  const MenuButton = [
    { holderButton: 'All' },
    { holderButton: 'Meals' },
    { holderButton: 'Seafood' },
    { holderButton: 'Dessert' },
    { holderButton: 'Sizzling' },
    { holderButton: 'Beverages' },
    { holderButton: 'Samgyupsal' },
    { holderButton: 'Other' }
  ]

  return (
    <div className="h-full bg-[#F5F5F5] font-sans">
      <main className="flex-1 flex flex-col min-h-0 ">
        {/* Header */}
        <div className="w-full grid grid-cols-2 ">
          <div className="justify-item-end">
            <h1 className="text-3xl font-meduim text-black mb-1 xs:mb-2">Menu</h1>
            <p className="text-lg font-normal text-gray-600">See what's on your Menu</p>
          </div>
          <div className="grid auto-cols-max grid-flow-col grid-row-3 gap-3 justify-self-end ">
            <button class="w-auto h-[42px] px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              Take Out
            </button>
            <button class="w-auto h-[42px] px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              Additional Order
            </button>
            <button class="w-auto h-[42px] px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
              + Add New Order
            </button>
          </div>
        </div>
        <div class=" w-full bg-white mt-4 p-4">
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
          <div className="flex gap-6 my-3 overflow-x-scroll pb-4">
            {MenuButton.map((itemB) => (
              <button class="px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md ">
                {itemB.holderButton}
              </button>
            ))}
          </div>
          <div className="flex font-Meduim">
            <h2 className="fex my-2">Meals</h2>
          </div>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-3 sm:gap-4"> */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6  gap-3">
            {MenuItems.map((item) => (
              <div className="w-full h-[221px] p-2 m-1 border rounded-lg">
                <img
                  className="w-full h-[102px] border-10 rounded-xl border-gray-400"
                  src={item.menuImage}
                  alt={item.menuTitle}
                />
                <h1 className="text-black text-lg font-semibold">{item.menuTitle}</h1>
                <p className="text-base font-normal text-gray-500">{item.menuCategory}</p>
                <h2 className="text base font-semibold text-purple-600">{item.menuPrice}</h2>
              </div>
            ))}
          </div>
          {/* <div className="flex flex-row">
            {MenuItems.map((itemSeafood) => (
              <div className="flex flex-col w-[251px] h-[221px] p-2 m-1 border rounded-lg">
                <img
                  className="w-full h-[102px] border-10 rounded-xl border-gray-400"
                  src={itemSeafood.menuImage}
                  alt={itemSeafood.menuTitle}
                />
                <h1 className="text-black text-lg font-semibold">{itemSeafood.menuTitle}</h1>
                <p className="text-base font-normal text-gray-500">{itemSeafood.menuCategory}</p>
                <h2 className="text base font-semibold text-purple-600">{itemSeafood.menuPrice}</h2>
              </div>
            ))}
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default Menu

{
  /* <div className="flex flex-col w-[251px] h-[221px] p-2 m-1 border rounded-lg">
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
            </div> */
}
