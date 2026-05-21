"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [products, setProducts] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"products" | "inquiries">("products");
  const [newProduct, setNewProduct] = useState({
    name: "", price: "", description: "", image: "", category: "Armor"
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchInquiries();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    if (data.success) setProducts(data.data);
  };

  const fetchInquiries = async () => {
    const res = await fetch("/api/inquiry/all");
    const data = await res.json();
    if (data.success) setInquiries(data.data);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      try {
        const formData = new FormData();
        formData.append('file', reader.result as string);

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        if (data.success) {
          setNewProduct({ ...newProduct, image: data.url });
        }
      } catch (err) {
        alert("Upload failed!");
      } finally {
        setUploading(false);
      }
    };
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.image) return alert("Please upload an image first!");

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    if (res.ok) {
      setNewProduct({ name: "", price: "", description: "", image: "", category: "Armor" });
      fetchProducts();
      alert("Product added to inventory!");
    }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  return (
    <div className="bg-brand-dark min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-brand-orange font-black tracking-[0.3em] uppercase text-sm mb-4">Command Center</h1>
            <p className="text-5xl md:text-7xl font-black text-white tracking-tighter">ADMIN <br /><span className="text-gray-700">PANEL.</span></p>
          </div>
          <div className="flex gap-4 glass p-2 rounded-2xl">
            <button 
              onClick={() => setActiveTab("products")}
              className={`px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${activeTab === "products" ? "bg-brand-orange text-white" : "text-gray-500 hover:text-white"}`}
            >
              Inventory
            </button>
            <button 
              onClick={() => setActiveTab("inquiries")}
              className={`px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${activeTab === "inquiries" ? "bg-brand-orange text-white" : "text-gray-500 hover:text-white"}`}
            >
              Inquiries
            </button>
          </div>
        </div>

        {activeTab === "products" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Add Product Form */}
            <div className="lg:col-span-1">
              <div className="glass p-8 rounded-[2.5rem] border-white/5 sticky top-40">
                <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Forge New Product</h2>
                <form onSubmit={handleAddProduct} className="space-y-6">
                  <input 
                    type="text" placeholder="Product Name" required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-brand-orange outline-none"
                    value={newProduct.name}
                    onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                  />
                  <input 
                    type="number" placeholder="Price (₹)" required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-brand-orange outline-none"
                    value={newProduct.price}
                    onChange={e => setNewProduct({...newProduct, price: e.target.value})}
                  />
                  <select 
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-brand-orange outline-none appearance-none"
                    value={newProduct.category}
                    onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                  >
                    <option className="bg-brand-dark">Armor</option>
                    <option className="bg-brand-dark">Structure</option>
                    <option className="bg-brand-dark">Custom</option>
                  </select>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Product Image</label>
                    <div className="relative group cursor-pointer">
                      <input 
                        type="file" accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        onChange={handleImageUpload}
                      />
                      <div className="w-full p-8 border-2 border-dashed border-white/10 rounded-2xl text-center group-hover:border-brand-orange/50 transition-all bg-white/5">
                        {newProduct.image ? (
                          <img src={newProduct.image} className="w-24 h-24 object-cover mx-auto rounded-xl shadow-2xl" alt="Preview" />
                        ) : (
                          <div className="text-gray-500">
                            <p className="text-sm font-bold">{uploading ? "Uploading..." : "Click to Upload Photo"}</p>
                            <p className="text-[10px] uppercase tracking-widest mt-1">PNG, JPG up to 10MB</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <textarea 
                    placeholder="Technical Description" required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-brand-orange outline-none"
                    value={newProduct.description}
                    onChange={e => setNewProduct({...newProduct, description: e.target.value})}
                  />
                  <button 
                    disabled={uploading}
                    className="w-full py-5 bg-brand-orange text-white font-black rounded-2xl shadow-xl shadow-brand-orange/20 uppercase tracking-widest text-xs disabled:opacity-50"
                  >
                    {uploading ? "Waiting for Image..." : "Authorize & Add"}
                  </button>
                </form>
              </div>
            </div>

            {/* Product List */}
            <div className="lg:col-span-2 space-y-6">
              {products.map(product => (
                <div key={product._id} className="glass p-6 rounded-3xl border-white/5 flex items-center gap-6 group hover:border-brand-orange/30 transition-all">
                  <img src={product.image} className="w-24 h-24 object-cover rounded-2xl" alt="" />
                  <div className="flex-grow">
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter">{product.name}</h3>
                    <p className="text-brand-orange font-bold">₹{product.price}</p>
                    <p className="text-gray-500 text-xs mt-1 uppercase font-black tracking-widest">{product.category}</p>
                  </div>
                  <button 
                    onClick={() => deleteProduct(product._id)}
                    className="p-4 bg-red-500/10 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Inquiries List */
          <div className="space-y-8">
            {inquiries.length === 0 ? (
              <p className="text-center text-gray-500 py-20 font-black uppercase tracking-widest">No Transmissions Received</p>
            ) : (
              inquiries.map(inquiry => (
                <div key={inquiry._id} className="glass p-10 rounded-[3rem] border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8">
                    <span className="px-6 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-[10px] font-black uppercase tracking-widest">
                      {new Date(inquiry.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-2">From</h3>
                    <p className="text-2xl font-black text-white">{inquiry.name} <span className="text-gray-600 ml-4 text-lg font-medium tracking-normal lowercase italic">({inquiry.email})</span></p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-2">Subject</h3>
                    <p className="text-xl font-bold text-brand-orange uppercase italic">{inquiry.subject}</p>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-2">Specifications</h3>
                    <p className="text-gray-300 text-lg leading-relaxed font-medium bg-white/5 p-6 rounded-2xl border border-white/5 italic">
                      "{inquiry.message}"
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
