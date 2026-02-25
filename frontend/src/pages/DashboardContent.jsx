import bell_icon from '../assets/icons/bell_icon.svg'
import sales_icon from '../assets/icons/sales_icon.svg'
import order_icon from '../assets/icons/order_icon.svg'
import activetable_icon from '../assets/icons/activetable_icon.svg'
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
            <div className="flex-1 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4">
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
                  <p className="mt-1 text-2xl font-semibold text-gray-900">1,150</p>
                </div>

                {/* order icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <img src={order_icon} alt="Total Orders" className="h-5 w-5" />
                </div>
              </div>

              {/* Activive Table  */}
              <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5">
                <div>
                  <p className="text-xs text-gray-500">Active Tables</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">10</p>
                </div>

                {/* order icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <img src={activetable_icon} alt="Active Tables" className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 items-start">
            {/* LEFT MAIN */}
            <div className=" lg:col-span-2 gap-4">
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

                {/* Table */}
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full min-w-[640px] md:min-w-[720px]">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th className="px-3 py-2 text-[11px] font-semibold text-gray-500">
                          Order ID
                        </th>
                        <th className="px-3 py-2 text-[11px] font-semibold text-gray-500">
                          Service
                        </th>
                        <th className="px-3 py-2 text-[11px] font-semibold text-gray-500">Table</th>
                        <th className="px-3 py-2 text-[11px] font-semibold text-gray-500">
                          Amount
                        </th>
                        <th className="px-3 py-2 text-[11px] font-semibold text-gray-500">Time</th>
                        <th className="px-3 py-2 text-[11px] font-semibold text-gray-500">
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-3 py-3 text-xs font-medium text-gray-900">#12345</td>
                        <td className="px-3 py-3 text-xs text-gray-700">Samgyupsal</td>
                        <td className="px-3 py-3 text-xs text-gray-700">S-1</td>
                        <td className="px-3 py-3 text-xs text-gray-700">₱380.00</td>
                        <td className="px-3 py-3 text-xs text-gray-700">12:01 PM</td>
                        <td className="px-3 py-3">
                          <span className="inline-flex rounded-full bg-green-50 px-2 py-1 text-[11px] font-semibold text-green-700 ring-1 ring-green-200">
                            Completed
                          </span>
                        </td>
                      </tr>

                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-3 py-3 text-xs font-medium text-gray-900">#12346</td>
                        <td className="px-3 py-3 text-xs text-gray-700">KTV</td>
                        <td className="px-3 py-3 text-xs text-gray-700">R-1</td>
                        <td className="px-3 py-3 text-xs text-gray-700">₱380.00</td>
                        <td className="px-3 py-3 text-xs text-gray-700">12:05 PM</td>
                        <td className="px-3 py-3">
                          <span className="inline-flex rounded-full bg-orange-50 px-2 py-1 text-[11px] font-semibold text-orange-700 ring-1 ring-orange-200">
                            In Progress
                          </span>
                        </td>
                      </tr>

                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-3 py-3 text-xs font-medium text-gray-900">#12347</td>
                        <td className="px-3 py-3 text-xs text-gray-700">KTV</td>
                        <td className="px-3 py-3 text-xs text-gray-700">R-1</td>
                        <td className="px-3 py-3 text-xs text-gray-700">₱380.00</td>
                        <td className="px-3 py-3 text-xs text-gray-700">12:10 PM</td>
                        <td className="px-3 py-3">
                          <span className="inline-flex rounded-full bg-orange-50 px-2 py-1 text-[11px] font-semibold text-orange-700 ring-1 ring-orange-200">
                            In Progress
                          </span>
                        </td>
                      </tr>

                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-3 py-3 text-xs font-medium text-gray-900">#12348</td>
                        <td className="px-3 py-3 text-xs text-gray-700">KTV</td>
                        <td className="px-3 py-3 text-xs text-gray-700">R-1</td>
                        <td className="px-3 py-3 text-xs text-gray-700">₱380.00</td>
                        <td className="px-3 py-3 text-xs text-gray-700">12:15 PM</td>
                        <td className="px-3 py-3">
                          <span className="inline-flex rounded-full bg-orange-50 px-2 py-1 text-[11px] font-semibold text-orange-700 ring-1 ring-orange-200">
                            In Progress
                          </span>
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50">
                        <td className="px-3 py-3 text-xs font-medium text-gray-900">#12349</td>
                        <td className="px-3 py-3 text-xs text-gray-700">KTV</td>
                        <td className="px-3 py-3 text-xs text-gray-700">R-1</td>
                        <td className="px-3 py-3 text-xs text-gray-700">₱380.00</td>
                        <td className="px-3 py-3 text-xs text-gray-700">12:20 PM</td>
                        <td className="px-3 py-3">
                          <span className="inline-flex rounded-full bg-orange-50 px-2 py-1 text-[11px] font-semibold text-orange-700 ring-1 ring-orange-200">
                            In Progress
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-1 gap-4">
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-gray-900">Tables</p>
                  <button className="text-sm font-medium text-purple-600 hover:underline">
                    See All
                  </button>
                </div>

                {/* Occupied Tables/Rooms */}
                <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                  <h6 className="text-xs font-semibold text-gray-900">Occupied Tables/Rooms</h6>
                </div>

                {/* Food Tables */}
                <div>
                  <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                    <h6 className="text-xs font-normal text-gray-900">Food Tables</h6>
                  </div>
                  <div className="mx-3 flex flex-wrap gap-2">
                    {['T-1', 'T-6', 'T-8', 'T-9', 'T-10'].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-orange-500 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Samgyup Tables */}
                <div>
                  <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                    <h6 className="text-xs font-normal text-gray-900">Samgyup Tables</h6>
                  </div>
                  <div className="mx-3 flex flex-wrap gap-2">
                    {['T-1', 'T-6', 'T-8', 'T-9', 'T-10'].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-orange-500 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* KTV Rooms  */}
                <div>
                  <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                    <h6 className="text-xs font-normal text-gray-900">KTV Rooms</h6>
                  </div>
                  <div className="mx-3 flex flex-wrap gap-2">
                    {['T-1', 'T-6', 'T-8', 'T-9', 'T-10'].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-orange-500 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Available Tables/Rooms  */}
                <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                  <h6 className=" mt-2 text-xs font-semibold text-gray-900">
                    Available Tables/Rooms
                  </h6>
                </div>

                {/* Food Tables */}
                <div>
                  <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                    <h6 className="text-xs font-normal text-gray-900">Food Tables</h6>
                  </div>
                  <div className="mx-3 flex flex-wrap gap-2">
                    {['T-1', 'T-6', 'T-8', 'T-9', 'T-10'].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-green-500 bg-green-50 px-3 py-1 text-xs font-semibold text-green-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Samgyup Tables */}
                <div>
                  <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                    <h6 className="text-xs font-normal text-gray-900">Samgyup Tables</h6>
                  </div>
                  <div className="mx-3 flex flex-wrap gap-2">
                    {['T-1', 'T-6', 'T-8', 'T-9', 'T-10'].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-green-500 bg-green-50 px-3 py-1 text-xs font-semibold text-green-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* KTV Rooms  */}
                <div>
                  <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
                    <h6 className="text-xs font-normal text-gray-900">KTV Rooms</h6>
                  </div>
                  <div className="mx-3 flex flex-wrap gap-2">
                    {['T-1', 'T-6', 'T-8', 'T-9', 'T-10'].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-green-500 bg-green-50 px-3 py-1 text-xs font-semibold text-green-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT: Incoming Orders */}
        <div className="w-full lg:w-[380px] shrink-0">
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
