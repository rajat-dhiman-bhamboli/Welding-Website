import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-brand-charcoal pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tighter text-brand-orange uppercase">
              Welding<span className="text-white">Experts</span>
            </span>
            <p className="mt-4 text-gray-400 max-w-md">
              Professional welding and fabrication services since 2000. Specializing in heavy-duty tractor trolley repairs, lathe machine precision, and custom metal products.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Work Gallery</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-brand-orange">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Main Workshop Road</li>
              <li>Industrial Area, 123456</li>
              <li>Phone: +91 98765 43210</li>
              <li>Email: info@weldingexperts.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-brand-charcoal text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} WeldingExperts. All rights reserved.</p>
          <p className="mt-1 italic">Quality work that lasts a lifetime.</p>
        </div>
      </div>
    </footer>
  );
}
