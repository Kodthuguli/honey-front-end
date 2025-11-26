import "./globals.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Honey Brand",
  description: "Pure natural honey & organic products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter bg-[#FAFAF5] text-[#2A2A2A]">
        <Navbar />
        
        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
