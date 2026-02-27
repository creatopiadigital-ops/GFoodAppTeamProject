import CartIcon from '../assets/icons/cart.svg'
import { useEffect, useState } from 'react'

// function formatPHP(n) {
//   const num = Number(n || 0)
//   return `₱${num.toFixed(2)}`
// }

/**
 * Props:
 * - item: { id, menuImage, menuTitle, menuCategory, menuPrice }
 * - qty: number
 * - onInc: (id) => void
 * - onDec: (id) => void
 */
export default function MenuItemCard({ item, qty = 0, onInc, onDec }) {
  const [expanded, setExpanded] = useState(false)

  // Auto-collapse if qty goes back to 0
  useEffect(() => {
    if (qty <= 0) setExpanded(false)
  }, [qty])

  const hasQty = qty > 0

  return (
    <div
      className="relative rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
      onMouseLeave={() => setExpanded(false)} // ✅ collapse on mouse leave
    >
      {/* ✅ Cart badge top-left when added */}
      {hasQty ? (
        <div className="absolute left-3 top-3 z-10">
          <span className="inline-flex h-12 w-12">
            <img src={CartIcon} alt="Cart" />
          </span>
        </div>
      ) : null}

      {/* Image (no stretch) */}
      <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
        <img
          src={item.menuImage}
          alt={item.menuTitle}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-3">
        <p className="text-base font-semibold text-gray-900 line-clamp-1">{item.menuTitle}</p>
        <p className="text-sm text-gray-500">{item.menuCategory}</p>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-base font-semibold text-purple-600">
            {item.menuPrice.toLocaleString('en-PH', {
              style: 'currency',
              currency: 'PHP'
            })}
          </p>

          {/* ✅ Right-side control area */}
          {!hasQty ? (
            // qty = 0 -> show PLUS circle
            <button
              onClick={() => onInc(item.id)}
              className="h-9 w-9 rounded-full border border-purple-600 text-purple-700 flex items-center justify-center hover:bg-purple-50"
              aria-label="Add item"
            >
              +
            </button>
          ) : expanded ? (
            // qty > 0 AND expanded -> show - qty +
            <div className="flex items-center gap-2 rounded-full border border-purple-600 px-2 py-1">
              <button
                onClick={() => onDec(item.id)}
                className="h-7 w-7 rounded-full text-purple-700 hover:bg-purple-50 flex items-center justify-center"
                aria-label="Decrease"
              >
                −
              </button>

              <span className="min-w-[18px] text-center text-sm font-semibold text-purple-700">
                {qty}
              </span>

              <button
                onClick={() => onInc(item.id)}
                className="h-7 w-7 rounded-full text-purple-700 hover:bg-purple-50 flex items-center justify-center"
                aria-label="Increase"
              >
                +
              </button>
            </div>
          ) : (
            // qty > 0 AND collapsed -> show qty bubble
            <button
              onClick={() => setExpanded(true)} // ✅ press to expand
              className="h-9 min-w-[36px] px-3 rounded-full border border-purple-600 text-purple-700 font-semibold hover:bg-purple-50"
              aria-label="Show quantity controls"
            >
              {qty}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
