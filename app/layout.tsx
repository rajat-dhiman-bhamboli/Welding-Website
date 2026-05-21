import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welding Experts | Master Tractor Trolley Repair & Lathe Engineering",
  description: "Advanced industrial welding, precision lathe machine threading (chhudiya dalna), and heavy-duty tractor trolley manufacturing. 20+ years of technical mastery.",
  keywords: ["Welding Expert", "Tractor Trolley Repair", "Lathe Machine Threading", "Chhudiya Dalna", "Gas Cutting", "Metal Shed Fabrication", "Best Welder Punjab", "Industrial Fabrication"],
  authors: [{ name: "Welding Experts Team" }],
  openGraph: {
    title: "Welding Experts | The Technician's Touch",
    description: "If others can't fix it, we will. Expert repairs and custom metal products.",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white dark:bg-brand-dark font-sans">
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
