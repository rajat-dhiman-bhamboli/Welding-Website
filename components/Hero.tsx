import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Glows - Fixed to Viewport Top */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,95,0,0.15)_0%,transparent_70%)]" />
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] glow-bg blur-[120px] rounded-full opacity-30" />
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] glow-bg blur-[120px] rounded-full opacity-20" />
        
        {/* Abstract Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      {/* Content - Pushed down to clear Navbar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32 md:mt-40">
        <div className="animate-float">
          <span className="inline-block py-2 px-6 rounded-full glass text-brand-orange text-xs font-black tracking-[0.3em] uppercase mb-8 border border-brand-orange/30 spark-glow">
            Est. 2000 | The Technician's Touch
          </span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8">
          WE WELD THE <br />
          <span className="text-gradient">IMPOSSIBLE.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-12">
          From heavy-duty tractor trolleys to precision lathe engineering. 
          When others say "it can't be fixed," we say <span className="text-white italic underline decoration-brand-orange decoration-4">"watch us."</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/services" 
            className="group relative px-10 py-5 bg-brand-orange text-white rounded-2xl font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,95,0,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Our Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          
          <Link 
            href="/shop" 
            className="px-10 py-5 glass text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all border-white/10"
          >
            Explore Shop
          </Link>
        </div>

        {/* Floating Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Years Experience", value: "24+" },
            { label: "Repairs Done", value: "12k+" },
            { label: "Products Sold", value: "500+" },
            { label: "Customer Trust", value: "100%" }
          ].map((stat, i) => (
            <div key={i} className="glass p-6 rounded-2xl border-white/5 group hover:border-brand-orange/50 transition-colors">
              <p className="text-3xl font-black text-white mb-1 group-hover:text-brand-orange transition-colors">{stat.value}</p>
              <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Spark Lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
    </section>
  );
}
