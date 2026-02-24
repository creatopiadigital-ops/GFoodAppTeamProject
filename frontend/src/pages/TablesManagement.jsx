import atable_icon from '../assets/icons/atable.svg'
import otable_icon from '../assets/icons/otable.svg'
import ttable_icon from '../assets/icons/ttable.svg'
import search_icon from '../assets/icons/search.svg'

const TablesManagement = () => {
  const tables = [
    { id: 1, name: 'Table 1', type: 'Food', seats: 4, isAvailable: true },
    { id: 2, name: 'Table 2', type: 'Food', seats: 4, isAvailable: true },
    { id: 3, name: 'Table 3', type: 'Food', seats: 6, isAvailable: false },
    { id: 4, name: 'Table 4', type: 'Food', seats: 4, isAvailable: false },
    { id: 1, name: 'Table 1', type: 'Samgyup', seats: 4, isAvailable: true },
    { id: 2, name: 'Table 2', type: 'Samgyup', seats: 6, isAvailable: false },
    { id: 3, name: 'Table 3', type: 'Samgyup', seats: 4, isAvailable: true },
    { id: 4, name: 'Table 4', type: 'Samgyup', seats: 4, isAvailable: false },
    { id: 1, name: 'Table 1', type: 'KTV', seats: 6, isAvailable: false },
    { id: 2, name: 'Table 2', type: 'KTV', seats: 4, isAvailable: true },
    { id: 3, name: 'Table 3', type: 'KTV', seats: 4, isAvailable: true },
    { id: 4, name: 'Table 4', type: 'KTV', seats: 6, isAvailable: false }
  ]

  return (
    <div className="flex flex-col h-full bg-[#F5F5F5]">
      <main className="flex-1 flex flex-col min-h-0 ">
        {/* Header */}
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <h1 className="text-3xl font-semibold text-black mb-1 xs:mb-2">Tables</h1>
              <p className="text-lg font-normal text-gray-600">Manage and track all tables</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start justify-between rounded-xl bg-white px-6 py-6 shadow-sm ring-1 ring-black/5">
              <div>
                <p className="text-xs text-gray-500">Total Tables</p>
                <p className="mt-2 text-2xl font-semibold text-gray-900">12</p>
              </div>
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100">
                <img src={ttable_icon} alt="Total Tables" className="h-12 w-12" />
              </div>
            </div>
            <div className="flex items-start justify-between rounded-xl bg-white px-6 py-6 shadow-sm ring-1 ring-black/5">
              <div>
                <p className="text-xs text-gray-500">Available Tables</p>
                <p className="mt-2 text-2xl font-semibold text-gray-900">12</p>
              </div>
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100">
                <img src={atable_icon} alt="Availavle Tables" className="h-12 w-12" />
              </div>
            </div>
            <div className="flex items-start justify-between rounded-xl bg-white px-6 py-6 shadow-sm ring-1 ring-black/5">
              <div>
                <p className="text-xs text-gray-500">Occupied Tables</p>
                <p className="mt-2 text-2xl font-semibold text-gray-900">12</p>
              </div>
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100">
                <img src={otable_icon} alt="Occupied Tables" className="h-12 w-12" />
              </div>
            </div>

            {/* BOTTOM CONTAINER */}
            <div className="w-full min-w-0 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 lg:col-span-3">
              {/* Top controls row */}
              <div className="flex items-center justify-between gap-4">
                {/* Search */}
                <div className="w-full sm:w-[420px]">
                  <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
                    <img src={search_icon} alt="Search" className="h-3.6 w-3.6" />
                    <input
                      className="w-full bg-transparent text-sm outline-none"
                      placeholder="Search by order number or table"
                    />
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-3">
                  <button className="rounded-xl border border-gray-200 bg-white px-6 py-2 text-sm font-medium text-gray-700">
                    All Tables
                  </button>
                  <button className="rounded-xl border border-purple-600 bg-purple-50 px-6 py-2 text-sm font-semibold text-purple-700">
                    Available
                  </button>
                </div>
              </div>

              {/* ✅ Completed Orders moved to bottom (below controls) */}
              <h3 className="mt-6 text-base font-semibold text-gray-900">Completed Orders</h3>

              {/* ✅ Fixed-size card grid */}
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tables?.map((t) => (
                  <div
                    key={t.id}
                    className="w-full rounded-xl border border-green-500/80 bg-white px-5 py-4"
                  >
                    <div className="flex items-start justify-between">
                      <p className="text-base font-semibold text-gray-900">{t.name}</p>

                      <span
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                          t.isAvailable ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {t.isAvailable ? 'Available' : 'Occupied'}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-gray-500">{t.type}</p>

                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                      <span>👤</span>
                      <span>{t.seats} seats</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// function OrderCard({ table }) {
//   return (
//     <div className="h-[98px] w-[388.5px] rounded-xl border border-green-500/80 bg-white p-3">
//       <div className="flex items-start justify-between">
//         <p className="text-lg font-semibold text-gray-900">{table.name}</p>

//         <span className="rounded-full border border-green-400 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
//           Available
//         </span>
//       </div>

//       <p className="mt-1 text-gray-500">{t.type}</p>
//       <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
//         <span>👤</span>
//         <span>{table.seats} seats</span>
//       </div>
//     </div>
//   )
// }

export default TablesManagement
