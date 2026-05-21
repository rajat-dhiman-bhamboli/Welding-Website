"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

interface ProductType {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function ShopPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (data.success) {
          setProducts(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen py-32 mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h1 className="text-brand-orange font-black tracking-[0.3em] uppercase text-sm mb-4">Precision Inventory</h1>
            <p className="text-5xl md:text-8xl font-black text-white tracking-tighter">BUILT TO <br /><span className="text-gray-700">ENDURE.</span></p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 glass rounded-xl text-white font-bold hover:bg-white/10 transition-all">All Items</button>
            <button className="px-6 py-3 bg-white/5 rounded-xl text-gray-400 font-bold hover:text-white transition-all">Popular</button>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass h-[400px] rounded-[2.5rem] bg-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product._id} className="group glass rounded-[2.5rem] overflow-hidden border-white/5 hover:border-brand-orange/50 transition-all duration-500 flex flex-col p-4">
                <div className="relative h-64 rounded-[2rem] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 glass rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-brand-orange transition-colors">{product.name}</h3>
                  <p className="text-gray-400 font-medium text-sm mb-8 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Price</span>
                      <span className="text-2xl font-black text-white tracking-tighter">₹{product.price}</span>
                    </div>
                    <button 
                      onClick={() => addToCart({ id: product._id, name: product.name, price: product.price, image: product.image })}
                      className="w-14 h-14 bg-brand-orange text-white rounded-2xl flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all shadow-lg shadow-brand-orange/20"
                      title="Add to Inventory"
                    >
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
