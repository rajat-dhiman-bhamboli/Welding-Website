"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 dark:bg-brand-dark px-4">
        <div className="text-6xl mb-6">🛒</div>
        <h2 className="text-3xl font-bold text-brand-charcoal dark:text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/shop" className="px-8 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-brand-dark min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-brand-charcoal dark:text-white mb-12">Shopping Cart ({totalItems})</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white dark:bg-brand-charcoal p-6 rounded-xl flex items-center gap-6 shadow-sm border border-gray-100 dark:border-white/5">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-brand-charcoal dark:text-white">{item.name}</h3>
                  <p className="text-brand-orange font-bold mt-1">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 bg-gray-50 dark:bg-brand-dark hover:bg-gray-100 dark:hover:bg-white/10 text-brand-charcoal dark:text-white"
                    >-</button>
                    <span className="px-4 py-1 font-bold text-brand-charcoal dark:text-white">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-50 dark:bg-brand-dark hover:bg-gray-100 dark:hover:bg-white/10 text-brand-charcoal dark:text-white"
                    >+</button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-brand-charcoal p-8 rounded-xl shadow-lg border border-gray-100 dark:border-white/5 sticky top-24">
              <h3 className="text-2xl font-bold text-brand-charcoal dark:text-white mb-6">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="text-green-500 font-bold">FREE</span>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex justify-between text-2xl font-black text-brand-charcoal dark:text-white">
                  <span>Total</span>
                  <span className="text-brand-orange">₹{totalPrice}</span>
                </div>
              </div>
              <button className="w-full py-4 bg-brand-orange text-white font-black rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-brand-orange/20">
                Proceed to Checkout
              </button>
              <p className="mt-4 text-center text-xs text-gray-400">
                Secure checkout powered by WeldingExperts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
