"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      if (data.success) {
        // Automatic WhatsApp Alert
        const adminPhone = "919992645473"; // Replace with Papa's number
        const whatsappMsg = `*New Inquiry Received!*%0A*Name:* ${formState.name}%0A*Topic:* ${formState.subject}%0A*Message:* ${formState.message}`;
        window.open(`https://wa.me/${adminPhone}?text=${whatsappMsg}`, '_blank');
        
        alert("Inquiry received and WhatsApp notification triggered!");
        setFormState({ name: "", email: "", subject: "Tractor Trolley Overhaul", message: "" });
      }
    } catch (err) {
      alert("Failed to send inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen py-32 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] glow-bg blur-[150px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] glow-bg blur-[150px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h1 className="text-brand-orange font-black tracking-[0.4em] uppercase text-sm mb-6">Strategic Communication</h1>
          <p className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.8]">LET'S BUILD <br /><span className="text-gray-700">TOGETHER.</span></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Advanced Form */}
          <div className="glass p-12 rounded-[3rem] border-white/5 shadow-2xl">
            <h2 className="text-3xl font-black text-white mb-10 uppercase tracking-tighter">Direct Transmission</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Codename / Name</label>
                  <input 
                    type="text" required
                    className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-orange outline-none text-white font-bold transition-all"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Frequency / Email</label>
                  <input 
                    type="email" required
                    className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-orange outline-none text-white font-bold transition-all"
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Inquiry Objective</label>
                <select 
                  className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-orange outline-none text-white font-bold transition-all appearance-none"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                >
                  <option className="bg-brand-dark">Tractor Trolley Overhaul</option>
                  <option className="bg-brand-dark">Precision Lathe Engineering</option>
                  <option className="bg-brand-dark">Custom Armor Fabrication</option>
                  <option className="bg-brand-dark">Strategic Consultation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Detailed Specifications</label>
                <textarea 
                  rows={4} required
                  className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-orange outline-none text-white font-bold transition-all"
                  placeholder="Describe your requirement..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button className="w-full py-6 bg-brand-orange text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-brand-orange/30 uppercase tracking-[0.2em] text-sm">
                Initiate Contact
              </button>
            </form>
          </div>

          {/* Location & Signal */}
          <div className="flex flex-col gap-12">
            <div className="glass p-10 rounded-[3rem] border-white/5 flex items-center gap-8 group hover:border-brand-orange/50 transition-colors">
              <div className="w-20 h-20 bg-brand-orange rounded-2xl flex items-center justify-center spark-glow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">Voice Signal</p>
                <p className="text-3xl font-black text-white">+91 98765 43210</p>
              </div>
            </div>

            <div className="glass p-10 rounded-[3rem] border-white/5 flex items-center gap-8 group hover:border-brand-orange/50 transition-colors">
              <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
                <svg className="w-10 h-10 text-brand-orange group-hover:text-brand-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">Workshop Coordinates</p>
                <p className="text-2xl font-black text-white">Main Industrial Zone, Sector 7</p>
              </div>
            </div>

            <div className="flex-grow rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border-4 border-white/5 h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.72591604555!2d76.68831177626926!3d30.712028686018315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee6134265537%3A0x89299406f8510f2d!2sIndustrial%20Area%20Phase%201%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
