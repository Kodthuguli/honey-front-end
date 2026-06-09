import "./globals.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Vanamrith",
  description: "Pure natural honey & organic products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-inter text-[#3A1F16]"
        style={{
          backgroundImage: "url('/bg-texture.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundColor: "#F5EDD8",
        }}
      >
        <Navbar />
        <main className="pt-[64px] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}