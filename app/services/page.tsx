"use client";

const services = [
  {
    title: "Tractor Trolley Specialist",
    desc: "We specialize in both repairing old trolleys and manufacturing new ones. From hydraulic systems to heavy-duty axle repairs, we ensure your trolley is built for the toughest jobs.",
    details: ["Hydraulic Jack Repair", "Axle & Hub Maintenance", "Reinforced Bed Fabrication", "Custom Side Panels"],
    icon: "🚜"
  },
  {
    title: "Lathe Machine Precision",
    desc: "Our master technician uses precision lathe machines for threading (Chhudiya) and creating custom metal parts that are hard to find in the market.",
    details: ["Internal & External Threading", "Bushing & Shaft Repair", "Custom Nut-Bolt Fabrication", "Precision Boring"],
    icon: "⚙️"
  },
  {
    title: "Gas Cutting & Heavy Fabrication",
    desc: "High-precision gas cutting for thick metal plates. We also fabricate heavy metal sheds and industrial structures designed for long-term durability.",
    details: ["CNC-like Manual Precision", "Heavy Plate Cutting", "Industrial Shed Design", "Structural Steel Welding"],
    icon: "🔥"
  },
  {
    title: "Legacy Machine Restoration",
    desc: "If no one else can fix your old machinery, we can. Our technician has decades of experience in 'Desi Jugaad' combined with technical mastery to revive dead machines.",
    details: ["Old Machine Overhauling", "Custom Part Adaptation", "Structural Integrity Fixes", "Mechanism Optimization"],
    icon: "🛠️"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-brand-dark min-h-screen pb-24">
      <div className="bg-brand-dark py-32 md:py-48 text-center relative overflow-hidden">
        {/* Glow background for services */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full glow-bg blur-[120px] opacity-20" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 mt-12 md:mt-20">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">Technical <span className="text-brand-orange">Mastery</span></h1>
          <p className="text-xl text-gray-400">Decades of experience in welding, fabrication, and precision engineering.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 gap-20">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="lg:w-1/2">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h2 className="text-4xl font-bold text-brand-charcoal dark:text-white mb-6">{service.title}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3 text-brand-charcoal dark:text-gray-300 font-bold">
                      <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 bg-gray-100 dark:bg-brand-charcoal h-[400px] w-full rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-white/10">
                <span className="text-gray-400 uppercase font-black tracking-widest text-2xl">Service Image Placeholder</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
