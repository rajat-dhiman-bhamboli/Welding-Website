import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  const bentoServices = [
    {
      title: "Tractor Trolley Expert",
      desc: "Old to New. Structural reinforcement for heavy loads.",
      icon: "🚜",
      size: "col-span-2 row-span-2",
      color: "from-brand-orange/20 to-brand-orange/5"
    },
    {
      title: "Lathe Precision",
      desc: "Chhudiya & Custom Parts.",
      icon: "⚙️",
      size: "col-span-2 row-span-1",
      color: "from-blue-500/10 to-transparent"
    },
    {
      title: "Gas Cutting",
      desc: "Industrial Accuracy.",
      icon: "🔥",
      size: "col-span-1 row-span-1",
      color: "from-red-500/10 to-transparent"
    },
    {
      title: "Metal Sheds",
      desc: "Unbreakable Structures.",
      icon: "🏗️",
      size: "col-span-1 row-span-1",
      color: "from-emerald-500/10 to-transparent"
    }
  ];

  return (
    <div className="flex flex-col bg-brand-dark">
      <Hero />

      {/* Services Bento Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-brand-orange font-black tracking-[0.2em] uppercase text-sm mb-4">Service Capabilities</h2>
              <p className="text-5xl md:text-7xl font-black text-white tracking-tighter">ENGINEERED <br /><span className="text-gray-700">TO LAST.</span></p>
            </div>
            <Link href="/services" className="px-8 py-4 glass text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase text-sm tracking-widest">
              See All Expertise
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
            {bentoServices.map((service, idx) => (
              <div 
                key={idx} 
                className={`${service.size} glass rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-brand-orange/50 transition-all duration-500 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex justify-between items-start">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 font-medium">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Technician Section - High Contrast */}
      <section className="py-32 bg-white rounded-t-[4rem] text-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px]" />
                <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
                  <img 
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
                    alt="Master Technician" 
                    className="w-full h-[600px] object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-brand-orange font-black tracking-widest uppercase text-xs">Unmatched Expertise</span>
              <h3 className="text-5xl md:text-7xl font-black leading-[1.1] mt-4 mb-8">WHERE PRECISION <br /> MEETS <span className="italic text-gray-300">PASSION.</span></h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                Our technician doesn't just weld metal; he solves problems that baffle modern engineers. With 20+ years of hand-on experience, we specialize in "Desi Innovation" and "Precision Restoration."
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  "Specialist in Tractor-Trolley Structural Physics",
                  "Master of Precision Lathe Threading (Chhudiya)",
                  "Expert in Heavy-Duty Hydraulic Systems",
                  "Legacy Machinery Restoration Expert"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center font-black group-hover:bg-brand-orange transition-colors">0{i+1}</div>
                    <p className="text-lg font-bold">{text}</p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-flex items-center gap-4 px-10 py-5 bg-brand-dark text-white rounded-2xl font-black text-lg hover:bg-brand-orange transition-all shadow-2xl">
                Consult the Expert
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Modern Carousel Style Grid */}
      <section className="py-32 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-brand-orange font-black tracking-widest uppercase text-sm mb-4">Precision Manufacturing</h2>
              <p className="text-5xl md:text-7xl font-black text-white tracking-tighter">BUILT TO <br /><span className="text-gradient">OUTLAST.</span></p>
            </div>
            <Link href="/shop" className="group flex items-center gap-4 text-white font-black text-lg">
              Visit the Shop
              <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-brand-orange group-hover:bg-brand-orange transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Premium Product Card 1 */}
            <div className="group relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-4 transition-all hover:border-brand-orange/50">
              <div className="relative rounded-[2.5rem] overflow-hidden h-[500px]">
                <img src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Bike Box" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90" />
                <div className="absolute top-8 left-8">
                  <span className="px-6 py-2 glass rounded-full text-white font-black text-xs uppercase tracking-widest">Premium Accessory</span>
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">THE TITAN SIDE BOX</h4>
                <p className="text-gray-400 mb-8 font-medium text-lg leading-relaxed">
                  Indestructible steel fabrication for heavy-duty storage. Custom built for your bike's chassis with aerodynamic precision.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-brand-orange">₹2,499</span>
                  <Link href="/shop" className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center hover:bg-brand-orange transition-colors group/btn">
                    <svg className="w-8 h-8 text-brand-dark group-hover/btn:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Premium Product Card 2 */}
            <div className="group relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-4 transition-all hover:border-brand-orange/50 mt-12 md:mt-24">
              <div className="relative rounded-[2.5rem] overflow-hidden h-[500px]">
                <img src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Desi Bed" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90" />
                <div className="absolute top-8 left-8">
                  <span className="px-6 py-2 glass rounded-full text-white font-black text-xs uppercase tracking-widest">Masterpiece Furniture</span>
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">IRON-CORE DESI BED</h4>
                <p className="text-gray-400 mb-8 font-medium text-lg leading-relaxed">
                  The legendary Manja, reimagined with structural steel. Unbreakable, comfortable, and designed to last generations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-brand-orange">₹4,999</span>
                  <Link href="/shop" className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center hover:bg-brand-orange transition-colors group/btn">
                    <svg className="w-8 h-8 text-brand-dark group-hover/btn:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote Section */}
      <section className="py-40 bg-brand-orange relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center">
          <span className="text-[20rem] font-black text-white select-none italic">EXPERTISE</span>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <svg className="w-20 h-20 text-white/50 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.899 14.914 16 16.014 16L19.014 16C19.564 16 20.014 15.55 20.014 15L20.014 12C20.014 11.45 19.564 11 19.014 11L15.014 11C13.914 11 13.014 10.1 13.014 9L13.014 6C13.014 4.899 13.914 4 15.014 4L18.014 4C19.114 4 20.014 4.899 20.014 6L20.014 7L21.014 7C22.114 7 23.014 7.9 23.014 9L23.014 15C23.014 17.209 21.223 19 19.014 19L18.014 19C17.464 19 17.014 19.45 17.014 20L17.014 21L14.017 21ZM3.014 21L3.014 18C3.014 16.899 3.911 16 5.011 16L8.011 16C8.561 16 9.011 15.55 9.011 15L9.011 12C9.011 11.45 8.561 11 8.011 11L4.011 11C2.911 11 2.011 10.1 2.011 9L2.011 6C2.011 4.899 2.911 4 4.011 4L7.011 4C8.111 4 9.011 4.899 9.011 6L9.011 7L10.011 7C11.111 7 12.011 7.9 12.011 9L12.011 15C12.011 17.209 10.22 19 8.011 19L7.011 19C6.461 19 6.011 19.45 6.011 20L6.011 21L3.014 21Z" />
          </svg>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter leading-tight uppercase">
            "TECHNOLOGY CHANGES, <br /> BUT PURE CRAFTSMANSHIP <br /> IS ETERNAL."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-white/50" />
            <p className="text-white font-black tracking-widest uppercase text-sm">THE MASTER TECHNICIAN</p>
            <div className="w-12 h-px bg-white/50" />
          </div>
        </div>
      </section>
    </div>
  );
}
