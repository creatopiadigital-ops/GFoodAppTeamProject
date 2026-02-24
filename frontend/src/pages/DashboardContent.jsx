import bell_icon from '../assets/icons/bell_icon.svg'
import sales_icon from '../assets/icons/sales_icon.svg'

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts'

const DashboardContent = () => {
  const data = [
    {
      name: 'Page A',
      uv: 400,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 300,
      pv: 4567,
      amt: 2400
    },
    {
      name: 'Page C',
      uv: 320,
      pv: 1398,
      amt: 2400
    },
    {
      name: 'Page D',
      uv: 200,
      pv: 9800,
      amt: 2400
    },
    {
      name: 'Page E',
      uv: 278,
      pv: 3908,
      amt: 2400
    },
    {
      name: 'Page F',
      uv: 189,
      pv: 4800,
      amt: 2400
    }
  ]
  return (
    <div className="p-3 sm:p-4 md:p-5 lg:p-6 bg-[#F5F5F5] min-h-full">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-sm sm:text-base text-gray-500 mt-1">
          Welcome to your restaurant management dashboard
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-1 flex-col gap-4">
          {/* Left: Cards */}
          <div className="flex">
            <div className="flex-1 grid grid-cols-4 gap-4">
              {/* New Orders */}
              <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5">
                <div>
                  <p className="text-xs text-gray-500">New Orders</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">12</p>
                </div>

                {/* bell icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <img src={bell_icon} alt="New orders" className="h-5 w-5" />
                </div>
              </div>

              {/* Total Sales */}
              <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5">
                <div>
                  <p className="text-xs text-gray-500">Total Sales</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">₱300,200.00</p>
                </div>

                {/* sales icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <img src={sales_icon} alt="Total Sales" className="h-5 w-5" />
                </div>
              </div>

              {/* Total Order */}
              <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5">
                <div>
                  <p className="text-xs text-gray-500">Total Orders</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">12</p>
                </div>

                {/* order icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <img src={sales_icon} alt="Total Orders" className="h-5 w-5" />
                </div>
              </div>

              {/* Total Order */}
              <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5">
                <div>
                  <p className="text-xs text-gray-500">Total Orders</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">12</p>
                </div>

                {/* order icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <img src={sales_icon} alt="Total Orders" className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 items-start">
            {/* LEFT MAIN */}
            <div className=" col-span-2 gap-4">
              {/* SALES OVERVIEW  */}
              <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Sales Overview</p>
                    <p className="text-xs text-gray-500">Today performance</p>
                  </div>

                  <div className="flex gap-2">
                    <button className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium">
                      Today
                    </button>
                    <button className="rounded-lg px-3 py-1 text-xs text-gray-500">
                      This Week
                    </button>
                    <button className="rounded-lg px-3 py-1 text-xs text-gray-500">
                      This Month
                    </button>
                  </div>
                </div>

                <div>
                  <LineChart
                    style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
                    responsive
                    data={data}
                    //data=""
                  >
                    <CartesianGrid />
                    <Line dataKey="uv" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Legend />
                    {/* <RechartsDevtools /> */}
                  </LineChart>
                </div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 mt-4">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-gray-900">Recent Orders</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-span-1 gap-4">
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-gray-900">Tables</p>
                  <button className="text-sm font-medium text-purple-600 hover:underline">
                    See All
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                <p className="text-sm font-medium text-purple-700">T-3 : Samgyupsal</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-purple-700">₱380.00</p>
                  <span className="text-purple-500">›</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT: Incoming Orders */}
        <div className="h-[200px] w-[380px]  shrink-0">
          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold text-gray-900">Incoming Orders</p>
              <button className="text-sm font-medium text-purple-600 hover:underline">
                See All
              </button>
            </div>

            <div className="mt-3 space-y-2 rounded-lg bg-purple-50 p-3">
              <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                <p className="text-sm font-medium text-purple-700">T-3 : Samgyupsal</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-purple-700">₱380.00</p>
                  <span className="text-purple-500">›</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                <p className="text-sm font-medium text-purple-700">R-1 : KTV</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-purple-700">₱380.00</p>
                  <span className="text-purple-500">›</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                <p className="text-xs font-medium text-purple-700">Additional Orders</p>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                <p className="text-sm font-medium text-purple-700">T-3 : Samgyupsal</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-purple-700">₱380.00</p>
                  <span className="text-purple-500">›</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                <p className="text-sm font-medium text-purple-700">T-3 : Samgyupsal</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-purple-700">₱380.00</p>
                  <span className="text-purple-500">›</span>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                <p className="text-sm font-medium text-purple-700">T-3 : Samgyupsal</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-purple-700">₱380.00</p>
                  <span className="text-purple-500">›</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardContent
