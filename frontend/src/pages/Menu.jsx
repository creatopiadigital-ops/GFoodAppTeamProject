import tableIcon from '../images/Modaltable.png'
//Meals
import Menu1 from '../images/Chicken.png'
import Menu2 from '../images/Karekare.png'
import Menu3 from '../images/CrispyPata.png'
import Menu4 from '../images/LechonKawali.png'
import Menu5 from '../images/Chicken.png'
import Menu6 from '../images/BistikTagalog.png'
//Seafood
import Menu7 from '../images/GrilledBangus.png'
import Menu8 from '../images/MixesSeafood.png'
import Menu9 from '../images/SweatSour.png'
import Menu10 from '../images/ButterGarlic.png'
import Menu11 from '../images/Calamares.png'
// Dessert
import Menu12 from '../images/LechePlan.png'
import Menu13 from '../images/Halohalo.png'
//Sizzlings
import Menu14 from '../images/Porksisig.png'
import Menu15 from '../images/Beefsisig.png'
import Menu16 from '../images/Chickensisig.png'
//Beverages
import Menu17 from '../images/Cucumberjuice.png'
import Menu18 from '../images/Icetea.png'
import Menu19 from '../images/Calamansijuices.png'
import Menu20 from '../images/Coke.png'
import Menu21 from '../images/Sprite.png'
import Menu22 from '../images/Bottledwater.png'
//Samgyusal
import Menu23 from '../images/Porksamgyup.png'
import Menu24 from '../images/Beefsamgyup.png'
//Add Ons
import Menu25 from '../images/Plainrice.png'
import Menu26 from '../images/Garlicrice.png'
import Menu27 from '../images/Kimchi.png'
import Menu28 from '../images/Cheesedip.png'
import Menu29 from '../images/Kimchi.png'
import Menu30 from '../images/Cheesedip.png'

import React, { useState } from 'react'

const Menu = () => {
  const MenuItems = [
    { id: 1, menuImage: Menu1, menuTitle: 'Adobo', menuCategory: 'Meals', menuPrice: '$380' },
    { id: 2, menuImage: Menu2, menuTitle: 'Kare-kare', menuCategory: 'Meals', menuPrice: '$550' },
    { id: 3, menuImage: Menu3, menuTitle: 'Crispy Pata', menuCategory: 'Meals', menuPrice: '$720' },
    {
      id: 4,
      menuImage: Menu4,
      menuTitle: 'Lechon Kawali',
      menuCategory: 'Meals',
      menuPrice: '$480'
    },
    {
      id: 5,
      menuImage: Menu5,
      menuTitle: 'Chicken Inasal',
      menuCategory: 'Meals',
      menuPrice: '$420'
    },
    {
      id: 6,
      menuImage: Menu6,
      menuTitle: 'Bistik Tagalog',
      menuCategory: 'Meals',
      menuPrice: '$420'
    },
    {
      id: 7,
      menuImage: Menu7,
      menuTitle: 'Grilled Bangus',
      menuCategory: 'Seafood',
      menuPrice: '$460'
    },
    {
      id: 8,
      menuImage: Menu8,
      menuTitle: 'Mixed Seafood',
      menuCategory: 'Seafood',
      menuPrice: '$520'
    },
    {
      id: 9,
      menuImage: Menu9,
      menuTitle: 'Sweet & Sour',
      menuCategory: 'Seafood',
      menuPrice: '$560'
    },
    {
      id: 10,
      menuImage: Menu10,
      menuTitle: 'Butter Garlic Shrimp',
      menuCategory: 'Seafood',
      menuPrice: '$540'
    },
    {
      id: 11,
      menuImage: Menu11,
      menuTitle: 'Calamares',
      menuCategory: 'Seafood',
      menuPrice: '$220'
    },
    {
      id: 12,
      menuImage: Menu12,
      menuTitle: 'Leche Flan',
      menuCategory: 'Dessert',
      menuPrice: '$550'
    },
    {
      id: 13,
      menuImage: Menu13,
      menuTitle: 'Halo-Halo',
      menuCategory: 'Dessert',
      menuPrice: '$550'
    },
    {
      id: 14,
      menuImage: Menu14,
      menuTitle: 'Pork Sisig',
      menuCategory: 'Sizzling',
      menuPrice: '$550'
    },
    {
      id: 15,
      menuImage: Menu15,
      menuTitle: 'Beef Sisig',
      menuCategory: 'Sizzling',
      menuPrice: '$550'
    },
    {
      id: 16,
      menuImage: Menu16,
      menuTitle: 'Chicken Sisig',
      menuCategory: 'Sizzling',
      menuPrice: '$550'
    },
    {
      id: 17,
      menuImage: Menu17,
      menuTitle: 'Cucumber Juice',
      menuCategory: 'Beverage',
      menuPrice: '$550'
    },
    {
      id: 18,
      menuImage: Menu18,
      menuTitle: 'Iced Tea',
      menuCategory: 'Beverage',
      menuPrice: '$550'
    },
    {
      id: 19,
      menuImage: Menu19,
      menuTitle: 'Calamansi Juice',
      menuCategory: 'Beverage',
      menuPrice: '$550'
    },
    { id: 20, menuImage: Menu20, menuTitle: 'Coke', menuCategory: 'Beverage', menuPrice: '$550' },
    { id: 21, menuImage: Menu21, menuTitle: 'Sprite', menuCategory: 'Beverage', menuPrice: '$550' },
    {
      id: 22,
      menuImage: Menu22,
      menuTitle: 'Bottled Water',
      menuCategory: 'Beverage',
      menuPrice: '$550'
    },
    {
      id: 23,
      menuImage: Menu23,
      menuTitle: 'Pork Samgyup',
      menuCategory: 'Samgyup',
      menuPrice: '$550'
    },
    {
      id: 24,
      menuImage: Menu24,
      menuTitle: 'Beef Samgyup',
      menuCategory: 'Samgyup',
      menuPrice: '$550'
    },
    {
      id: 25,
      menuImage: Menu25,
      menuTitle: 'Plain Rice',
      menuCategory: 'Add ons',
      menuPrice: '$550'
    },
    {
      id: 26,
      menuImage: Menu26,
      menuTitle: 'Garlic Rice',
      menuCategory: 'Add ons',
      menuPrice: '$550'
    },
    { id: 27, menuImage: Menu27, menuTitle: 'Kimchi', menuCategory: 'Add ons', menuPrice: '$550' },
    {
      id: 28,
      menuImage: Menu28,
      menuTitle: 'Cheese Dip',
      menuCategory: 'Add ons',
      menuPrice: '$550'
    },
    {
      id: 29,
      menuImage: Menu29,
      menuTitle: 'Extra Kimchi',
      menuCategory: 'Add ons',
      menuPrice: '$550'
    },
    {
      id: 30,
      menuImage: Menu30,
      menuTitle: 'Extra Cheese Dip',
      menuCategory: 'Add ons',
      menuPrice: '$550'
    }
  ]

  const tables = [
    { id: 1, name: 'Table F-1', type: 'Food', seats: 4, isAvailable: true, price: 100 },
    { id: 2, name: 'Table F-2', type: 'Food', seats: 4, isAvailable: true, price: 120 },
    { id: 3, name: 'Table F-3', type: 'Food', seats: 6, isAvailable: false, price: 150 },
    { id: 4, name: 'Table F-4', type: 'Food', seats: 4, isAvailable: false, price: 100 },
    { id: 5, name: 'Table S-1', type: 'Samgyup', seats: 4, isAvailable: true, price: 200 },
    { id: 6, name: 'Table S-2', type: 'Samgyup', seats: 6, isAvailable: false, price: 250 },
    { id: 7, name: 'Table S-3', type: 'Samgyup', seats: 4, isAvailable: true, price: 180 },
    { id: 8, name: 'Table S-4', type: 'Samgyup', seats: 4, isAvailable: false, price: 150 },
    { id: 9, name: 'Table 1', type: 'KTV', seats: 6, isAvailable: false, price: 300 },
    { id: 10, name: 'Table 2', type: 'KTV', seats: 4, isAvailable: true, price: 250 },
    { id: 11, name: 'Table 3', type: 'KTV', seats: 4, isAvailable: true, price: 200 },
    { id: 12, name: 'Table 4', type: 'KTV', seats: 6, isAvailable: false, price: 350 },
    { id: 13, name: 'Table F-5', type: 'Food', seats: 4, isAvailable: true, price: 120 },
    { id: 14, name: 'Table S-6', type: 'Samgyup', seats: 6, isAvailable: true, price: 280 },
    { id: 15, name: 'Table7', type: 'KTV', seats: 4, isAvailable: true, price: 220 }
  ]

  // ✅ STATES
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // ✅ UNIQUE CATEGORIES
  const uniqueCategories = ['All', ...new Set(MenuItems.map((item) => item.menuCategory))]

  // ✅ FILTER FUNCTION
  const filteredItems = MenuItems.filter((item) => {
    const matchCategory = selectedCategory === 'All' || item.menuCategory === selectedCategory

    const matchModalSearch =
      item.menuCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.menuTitle.toLowerCase().includes(searchTerm.toLowerCase())

    return matchCategory && matchModalSearch
  })

  //Modal Function
  const [searchModal, setSearchModal] = useState('')

  const [checked, setChecked] = useState({
    Food: false,
    Samgyup: false,
    KTV: false
  })

  const selectedTypes = Object.keys(checked).filter((key) => checked[key])

  const filteredModal = tables.filter((item) => {
    const value = searchModal.toLowerCase().trim()

    const selectedTypes = Object.keys(checked).filter((key) => checked[key])

    // ✅ Type filter
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(item.type)

    // ✅ Status text
    const statusText = item.isAvailable ? 'available' : 'occupied'

    // ✅ Search filter
    const matchesSearch =
      value === '' ||
      item.name.toLowerCase().includes(value) ||
      statusText.toLowerCase().includes(value)

    // ✅ Combine both
    return matchesType && matchesSearch
  })
  //modal
  const [isTakeOutOpen, setIsTakeOutOpen] = useState(false)

  //Set InputBox Clear
  let dynamicTitle = 'Menu'
  if (selectedCategory !== 'All') {
    dynamicTitle = selectedCategory
  } else if (searchTerm && filteredItems.length > 0) {
    dynamicTitle = filteredItems[0].menuCategory
    // console.log('hello')
  }

  return (
    <div className="bg-[#F5F5F5] font-sans">
      <main className="h-full flex flex-col w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
          <div>
            <h1 className="text-3xl font-medium text-black mb-1">Menu</h1>
            <p className="text-lg font-normal text-gray-600">See what's on your Menu</p>
          </div>
          <div className="flex flex-wrap grid auto-cols-max grid-flow-col gap-3 justify-self-end ">
            <button
              onClick={() => setIsTakeOutOpen(true)}
              className="w-auto h-[42px] px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md hover:bg-purple-500
                transition-all duration-200 cursor-pointer shadow-sm
                hover:shadow-xl hover:text-white"
            >
              Take Out
            </button>
            <button
              className="w-auto h-[42px] px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md hover:bg-purple-500
                transition-all duration-200 cursor-pointer shadow-sm
                hover:shadow-xl hover:text-white"
            >
              Additional Order
            </button>
            <button
              className="w-auto h-[42px] px-4 py-2 font-meduim border border-purple-500 text-purple-900 bg-White-600 rounded-md hover:bg-purple-500
                transition-all duration-200 cursor-pointer shadow-sm
                hover:shadow-xl hover:text-white"
            >
              + Add New Order
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col min-h-0 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <div className="flex flex-col gap-4 flex-1 min-h-0">
            {/* ✅ SEARCH INPUT */}
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base font-normal"
              />
            </div>

            {/* ✅ CATEGORY BUTTONS */}
            <div className="flex gap-4 overflow-x-auto pb-4 ">
              {/* re-render */}
              {uniqueCategories.map((category) => (
                <button
                  key={category}
                  //setClear
                  onClick={() => {
                    setSelectedCategory(category)
                    setSearchTerm('')
                  }}
                  className={`px-4 py-2 border rounded-md ${
                    selectedCategory === category
                      ? 'bg-purple-500 text-white'
                      : 'text-purple-900 hover:bg-purple-500  hover:text-white transition-all duration-300 border-purple-500 hover:shadow-lg ' // Target
                  }`}
                >
                  {category}

                  {/* hover:bg-purple-500
                transition-all duration-200 cursor-pointer shadow-sm
                hover:shadow-xl hover:text-white */}
                </button>
              ))}
            </div>
            {/* <div className="h-[50vh] overflow-y-auto pr-4 ">
                {filteredItems.map((category) => (
                  <div>
                    <h1 className="text-2xl font-semibold mb-2">{category.menuCategory}</h1>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
                      {filteredItems.map((item) => (
                        <div key={item.id} className="bg-white border rounded-xl shadow-sm p-2">
                          <img
                            className="w-full h-[102px] rounded-xl"
                            src={item.menuImage}
                            alt={item.menuTitle}
                          />
                          <h1 className="text-black text-lg font-semibold">{item.menuTitle}</h1>
                          <p className="text-gray-500">{item.menuCategory}</p>
                          <h2 className="font-semibold text-purple-600">{item.menuPrice}</h2>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div> */}
            <div className="h-[50vh] overflow-y-auto pr-4 ">
              <h1 className="text-3xl font-medium text-black mb-1 font-sans">{dynamicTitle}</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 ">
                {filteredItems.map((item) => (
                  <div key={item.id} className="bg-white border rounded-xl shadow-sm p-2">
                    <img
                      className="w-full h-[102px] rounded-xl"
                      src={item.menuImage}
                      alt={item.menuTitle}
                    />
                    <h1 className="text-black text-lg font-semibold content-center">
                      {item.menuTitle}
                    </h1>
                    <p className="text-gray-500">{item.menuCategory}</p>
                    <h2 className="font-semibold text-purple-600">{item.menuPrice}</h2>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ DISPLAY FILTERED ITEMS */}
          </div>
        </div>
        {isTakeOutOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            {/* Modal Box */}
            <div className="bg-white w-[956px] h-[620px] rounded-lg shadow-lg p-6 relative">
              {/* Close Button */}
              <button
                onClick={() => setIsTakeOutOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>

              {/* Modal Area - Take out*/}
              <p className="">Table Legend:</p>

              <div className="flex flex-cols-2 items-center gap-20 m-2 relative">
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
                  placeholder="Search by name or availability"
                  value={searchModal}
                  onChange={(e) => setSearchModal(e.target.value)}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base font-normal"
                />

                <div
                  onClick={() =>
                    setChecked({
                      ...checked,
                      Food: !checked.Food
                    })
                  }
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div
                    className={`w-6 h-6 border-2 rounded flex items-center justify-center 
                  ${checked.Food ? 'bg-purple-600 border-purple-600' : 'bg-white border-gray-400'}
                `}
                  >
                    {checked.Food && <span className="text-white text-sm">✓</span>}
                  </div>

                  <span className="text-base font-medium select-none">Food</span>
                </div>
                {/* Samgyup Checkbox */}
                <div
                  onClick={() =>
                    setChecked({
                      ...checked,
                      Samgyup: !checked.Samgyup
                    })
                  }
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div
                    className={`w-6 h-6 border-2 rounded flex items-center justify-center 
                  ${checked.Samgyup ? 'bg-purple-600 border-purple-600' : 'bg-white border-gray-400'}
                `}
                  >
                    {checked.Samgyup && <span className="text-white text-sm">✓</span>}
                  </div>

                  <span className="text-base font-medium select-none">Samgyup</span>
                </div>
                {/* KTV */}
                <div
                  onClick={() =>
                    setChecked({
                      ...checked,
                      KTV: !checked.KTV
                    })
                  }
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div
                    className={`w-6 h-6 border-2 rounded flex items-center justify-center 
                  ${checked.KTV ? 'bg-purple-600 border-purple-600' : 'bg-white border-gray-400'}
                `}
                  >
                    {checked.KTV && <span className="text-white text-sm">✓</span>}
                  </div>

                  <span className="text-base font-medium select-none">KTV</span>
                </div>
              </div>

              <div className="h-[500px]">
                <div className="h-[430px] grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-3 overflow-y-auto mb-2">
                  {filteredModal.map((item) => (
                    <div key={item.id} className="border rounded-xl shadow-sm p-2">
                      <div className="place-self-center">
                        <p
                          className={`font-medium text-xs place-self-center ${
                            item.isAvailable ? 'text-green-900' : 'text-red-900'
                          }`}
                        >
                          <span className="text-2xl">•</span>
                          {item.isAvailable ? ' Available' : ' Occupied'}
                        </p>

                        <img
                          className="w-[92px] h-[60px] rounded-xl"
                          src={tableIcon}
                          alt="Table Icon"
                        />

                        <h1 className="text-black text-base font-semibold place-self-center">
                          {item.name}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 m-3">
                  <button className="border-1 bg-gray-300 rounded-md h-[44px]">Cancel</button>
                  <button className="border-1 bg-gray-300 rounded-md h-[44px]">
                    Apply Discount
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Menu
