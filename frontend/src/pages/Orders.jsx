import { useMemo, useState } from 'react'
import OrderCard from '../components/OrderCard'
import search_icon from '../assets/icons/search.svg'

const Orders = () => {
  const orders = [
    {
      id: 'ORD-139',
      service: 'Samgyupsal',
      table: 'T-2',
      status: 'Incoming',
      time: '12:01 PM',
      ago: '1 min ago'
    },
    {
      id: 'ORD-140',
      service: 'Food',
      table: 'T-5',
      status: 'Active',
      time: '12:05 PM',
      ago: 'Just now'
    }
  ]

  const [view, setView] = useState('all')
  const [search, setSearch] = useState('')

  const filteredOrders = useMemo(() => {
    const q = search.trim().toLowerCase()

    return orders.filter((o) => {
      const status = (o.status || '').trim().toLowerCase()

      if (view === 'incoming' && status !== 'incoming') return false
      if (view === 'active' && status !== 'active') return false

      if (!q) return true
      return (
        o.id.toLowerCase().includes(q) ||
        o.table.toLowerCase().includes(q) ||
        o.service.toLowerCase().includes(q)
      )
    })
  }, [orders, view, search])

  return (
    <div>
      <div className="flex flex-1 flex-col gap-4">
        <h2 className="text-2xl font-semibold text-gray-900">Orders</h2>
        <p className="text-gray-500">Manage and track all your orders</p>
      </div>

      <div className="mt-3 w-full min-w-0 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        {/* Search bar + Filter */}
        <div className="m-2 flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="flex w-full gap-3 lg:w-auto">
            <button
              onClick={() => setView('incoming')}
              className={
                view === 'incoming'
                  ? 'flex-1 rounded-xl border border-purple-600 bg-purple-50 px-6 py-2 text-sm font-semibold text-purple-700 lg:flex-none'
                  : 'flex-1 rounded-xl border border-gray-200 bg-white px-6 py-2 text-sm font-medium text-gray-700 lg:flex-none'
              }
            >
              Incoming Orders
            </button>

            <button
              onClick={() => setView('active')}
              className={
                view === 'active'
                  ? 'flex-1 rounded-xl border border-purple-600 bg-purple-50 px-6 py-2 text-sm font-semibold text-purple-700 lg:flex-none'
                  : 'flex-1 rounded-xl border border-gray-200 bg-white px-6 py-2 text-sm font-medium text-gray-700 lg:flex-none'
              }
            >
              Active Orders
            </button>
          </div>

          {/* Search */}
          <div className="w-full lg:ml-auto lg:w-[380px]">
            <div className="flex items-center gap-2 rounded-xl bg-white px-6 py-2 shadow-sm ring-1 ring-black/5">
              <img src={search_icon} alt="Search" className="h-4 w-4" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Search by order number or table"
              />
            </div>
          </div>
        </div>

        {/* Orders list */}
        <div>
          <h2 className="m-3 font-semibold text-gray-900">
            {view === 'incoming' ? 'Incoming Orders' : 'Active Orders'}
          </h2>

          {filteredOrders.length === 0 ? (
            <p className="m-3 text-sm text-gray-500">No orders found.</p>
          ) : (
            <div
              className="
              grid gap-6
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              2xl:grid-cols-5
            "
            >
              {filteredOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Orders
