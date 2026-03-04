import { useState } from 'react'
import { formatDate } from '../utils/dateFormat'
import money_icon from '../assets/icons/money-02.svg'
import wallet_icon from '../assets/icons/wallet-01.svg'

export default function BillOut({ order, onBack }) {
  if (!order) return null

  // ✅ MUST BE TOP-LEVEL (hooks)
  const [customerName, setCustomerName] = useState('')
  const [customerId, setCustomerId] = useState('')
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [discountType, setDiscountType] = useState(null)
  const [cashReceived, setCashReceived] = useState('')
  const [showComplete, setShowComplete] = useState(false)

  const peso = (n) =>
    `₱${Number(n || 0).toLocaleString('en-PH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`

  // ✅ totals
  const subtotal = (order.items || []).reduce((acc, it) => acc + (it.qty || 0) * (it.price || 0), 0)
  const vat = subtotal * 0.12

  let discount = 0
  if (discountType === 'pwd') discount = subtotal * 0.12
  // if (discountType === 'override') discount = subtotal * 0.10

  const total = subtotal + vat - discount

  // ✅ change (never negative)
  const change = Math.max(Number(cashReceived || 0) - total, 0)

  // ✅ handlers
  const handleCalculatorInput = (value) => {
    setCashReceived((prev) => `${prev}${value}`)
  }

  const handleQuickAmount = (amount) => {
    setCashReceived(String(amount))
  }

  const handleExactAmount = () => {
    setCashReceived(String(Math.ceil(total))) // or String(total) if you want exact cents
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'customerName') setCustomerName(value)
    if (name === 'customerId') setCustomerId(value)
  }

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method)
  }

  const handleDiscount = (type) => {
    setDiscountType((prev) => (prev === type ? null : type))
  }

  const handlePay = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.')
      return
    }
    setShowComplete(true)
  }

  return (
    <div className="w-full">
      {/* Top row: Back button */}
      <div className="mb-4">
        <button
          onClick={onBack}
          className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
        >
          Back To Orders
        </button>
      </div>

      {/* Wrapper */}
      <div className="grid gap-6 grid-cols-1 xl:grid-cols-[360px_1fr]">
        {/* LEFT: Order Summary */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-center text-2xl font-semibold text-gray-900">Order Summary</h2>

          <div className="mt-6 space-y-3 text-sm text-gray-700">
            <div className="flex items-center justify-between">
              <span>Order Number</span>
              <span className="font-semibold text-gray-900">{order.id}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Date &amp; Time</span>
              <span className="text-gray-600">
                {formatDate(order.createdAt, { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </div>

          <div className="my-5 border-t border-dashed" />

          <div className="flex items-center justify-between text-sm font-semibold text-gray-900">
            <span>Items</span>
            <span>Amount</span>
          </div>

          <div className="mt-3 space-y-4">
            {(order.items || []).map((item, idx) => {
              const lineTotal = (item.qty || 0) * (item.price || 0)
              return (
                <div key={idx} className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-400">x{item.qty}</p>
                  </div>
                  <p className="text-sm text-gray-900">{peso(lineTotal)}</p>
                </div>
              )
            })}
          </div>

          <div className="my-5 border-t border-dashed" />

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{peso(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>VAT 12%</span>
              <span>{peso(vat)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Discount</span>
              <span>{peso(discount)}</span>
            </div>
          </div>

          <div className="mt-5 border-t pt-5">
            <div className="flex items-end justify-between">
              <span className="text-2xl font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-semibold text-gray-900">{peso(total)}</span>
            </div>

            {/* ✅ use cashReceived + change */}
            <div className="mt-4 space-y-1 text-sm text-gray-900">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Cash</span>
                <span className="font-semibold">{peso(cashReceived || 0)}</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span>Change</span>
                <span>{peso(change)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment + Calculator in SAME div */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-3xl font-semibold text-gray-900">Payment</h2>
          <p className="mt-1 text-sm text-gray-500">
            Select payment method and complete transaction
          </p>

          {/* inner grid */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_520px]">
            {/* Payment Form */}
            <div>
              <p className="text-sm font-semibold text-gray-900">Payment Method</p>

              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <button
                  onClick={() => handlePaymentMethodSelect('cash')}
                  className={`flex items-center gap-3 rounded-xl border p-4 transition
                    ${
                      paymentMethod === 'cash'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                >
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <img src={money_icon} alt="cash" className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Cash</p>
                </button>

                <button
                  onClick={() => handlePaymentMethodSelect('ewallet')}
                  className={`flex items-center gap-3 rounded-xl border p-4 transition
                    ${
                      paymentMethod === 'ewallet'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                >
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <img src={wallet_icon} alt="wallet" className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">E-wallet</p>
                </button>
              </div>

              {/* Discounts */}
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-900">Discounts</p>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <button
                    onClick={() => handleDiscount('pwd')}
                    className={`rounded-xl border p-4 text-left transition
                      ${
                        discountType === 'pwd'
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 bg-white hover:bg-gray-50'
                      }`}
                  >
                    <p className="text-sm font-semibold text-gray-900">PWD / Senior Citizen</p>
                    <p className="mt-1 text-xs text-gray-500">12% discount</p>
                  </button>

                  <button
                    onClick={() => handleDiscount('override')}
                    className={`rounded-xl border p-4 text-left transition
                      ${
                        discountType === 'override'
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 bg-white hover:bg-gray-50'
                      }`}
                  >
                    <p className="text-sm font-semibold text-gray-900">Override Discount</p>
                    <p className="mt-1 text-xs text-gray-500">Custom discount</p>
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-900">
                    Fullname <span className="text-purple-600">*</span>
                  </label>
                  <input
                    name="customerName"
                    value={customerName}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:bg-white outline-none"
                    placeholder="Place fullname here"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-900">
                    ID Number <span className="text-purple-600">*</span>
                  </label>
                  <input
                    name="customerId"
                    value={customerId}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:bg-white outline-none"
                    placeholder="Place ID number here"
                  />
                </div>
              </div>
            </div>

            {/* Calculator */}
            <div className="lg:border-l lg:pl-6 pt-2">
              <div className="rounded-2xl border border-gray-200 p-5">
                <p className="text-xs font-medium text-gray-500">Amount</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">
                  {peso(cashReceived || 0)}
                </p>
              </div>

              <div className="my-5">
                <p className="text-sm font-bold text-gray-900">Quick Amount</p>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleQuickAmount(20)}
                    className="rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold hover:bg-gray-200"
                  >
                    ₱20
                  </button>
                  <button
                    onClick={() => handleQuickAmount(50)}
                    className="rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold hover:bg-gray-200"
                  >
                    ₱50
                  </button>
                  <button
                    onClick={() => handleQuickAmount(100)}
                    className="rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold hover:bg-gray-200"
                  >
                    ₱100
                  </button>
                  <button
                    onClick={() => handleQuickAmount(500)}
                    className="rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold hover:bg-gray-200"
                  >
                    ₱500
                  </button>
                  <button
                    onClick={() => handleQuickAmount(1000)}
                    className="rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold hover:bg-gray-200"
                  >
                    ₱1000
                  </button>
                  <button
                    onClick={handleExactAmount}
                    className="rounded-xl border border-purple-600 bg-white px-3 py-2 text-sm font-semibold text-purple-700 hover:bg-purple-50"
                  >
                    Exact Amount
                  </button>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '00'].map((k) => (
                  <button
                    key={k}
                    onClick={() => handleCalculatorInput(k)}
                    className="h-14 rounded-xl border border-gray-200 bg-white text-base font-semibold hover:bg-gray-50"
                  >
                    {k}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handlePay}
                className="mt-6 w-full rounded-xl bg-purple-600 py-3 text-sm font-semibold text-white hover:bg-purple-700"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Modal INSIDE the return wrapper */}
      {showComplete && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center">
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowComplete(false)}
            aria-label="Close"
          />

          <div className="relative w-[92%] max-w-[360px] rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/10">
            <div className="flex flex-col items-center text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-white">
                  ✓
                </div>
              </div>

              <h3 className="mt-4 text-base font-semibold text-gray-900">Order Completed</h3>

              <button
                onClick={() => {
                  setShowComplete(false)
                  onBack()
                }}
                className="mt-5 w-full rounded-xl bg-purple-600 py-3 text-sm font-semibold text-white hover:bg-purple-700"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
