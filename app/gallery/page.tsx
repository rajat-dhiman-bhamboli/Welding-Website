"use client";

const projects = [
  {
    title: "Tractor Trolley Overhaul",
    category: "Repair",
    before: "https://images.unsplash.com/photo-1594488687129-7b9bc6bb2fdc?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1594488687129-7b9bc6bb2fdc?q=80&w=2070&auto=format&fit=crop",
    desc: "Complete structural restoration of a 15-year-old tractor trolley."
  },
  {
    title: "Lathe Threading Work",
    category: "Precision",
    before: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    desc: "Precision threading for heavy industrial bolts."
  },
  {
    title: "Custom Steel Shed",
    category: "Fabrication",
    before: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop",
    desc: "Design and fabrication of a 50x100ft industrial metal shed."
  }
];

export default function GalleryPage() {
  return (
    <div className="bg-white dark:bg-brand-dark min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-brand-charcoal dark:text-white mb-4">Our Work Gallery</h1>
          <p className="text-brand-orange font-bold uppercase tracking-widest italic">Proof of Excellence</p>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col md:flex-row gap-8 items-end mb-6">
                <h2 className="text-3xl font-bold text-brand-charcoal dark:text-white">{project.title}</h2>
                <span className="bg-brand-orange/10 text-brand-orange px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">{project.category}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px]">
                <div className="relative overflow-hidden rounded-2xl border-4 border-gray-100 dark:border-white/5">
                  <img src={project.before} alt="Before" className="w-full h-full object-cover grayscale" />
                  <div className="absolute top-4 left-4 bg-brand-charcoal text-white px-4 py-1 rounded-lg font-black text-xs uppercase tracking-widest">Before</div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border-4 border-brand-orange/30">
                  <img src={project.after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-brand-orange text-white px-4 py-1 rounded-lg font-black text-xs uppercase tracking-widest">After</div>
                </div>
              </div>
              <p className="mt-6 text-gray-500 dark:text-gray-400 text-lg">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
