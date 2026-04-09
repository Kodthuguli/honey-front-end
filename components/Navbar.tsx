"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/blogs", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 z-50 w-full border-b border-[#D7C2A3] backdrop-blur-md"
        style={{
          backgroundColor: "#e2b38aee",
          backgroundImage: "url('/textures/paper-texture.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.png"
              alt="Vanamrith"
              width={64}
              height={64}
              className="h-12 sm:h-14 md:h-16 w-auto"
              priority
            />

            <span className="hidden sm:flex flex-col font-['Cinzel'] leading-tight items-center sm:pt-[14px]">
  <span className="text-[18px] md:text-[22px] tracking-[0.25em] text-[#4B2E2B]">
    VANAMRITH
  </span>

  <svg
    className="mt-1 w-full"
    height="14"
    viewBox="0 0 120 14"
    preserveAspectRatio="none"
    fill="none"
  >
    <polyline
      points="0,4 50,4 60,10 70,4 120,4"
      stroke="#C6A77D"
      strokeWidth="1"
    />
  </svg>
</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 font-medium text-[#3A1F16]">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;

              return (
                <Link key={link.href} href={link.href} className="relative group">
                  <span
                    className={`transition-colors ${
                      active ? "text-[#C4622D]" : "group-hover:text-[#C4622D]"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] bg-[#C4622D]
                      transition-all duration-300
                      ${active ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-[#E6D3B3]"
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 6h18" stroke="#3A1F16" strokeWidth="2" />
              <path d="M3 12h18" stroke="#3A1F16" strokeWidth="2" />
              <path d="M3 18h18" stroke="#3A1F16" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 left-0 h-full w-72 bg-[#F5EFE6] border-r border-[#E6D3B3] shadow-xl z-50"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6D3B3]">

                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="Vanamrith"
                    width={36}
                    height={36}
                  />
                  <span className="font-semibold text-[#3A1F16]">
                    Vanamrith
                  </span>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-xl text-[#3A1F16]"
                >
                  ✕
                </button>
              </div>

              {/* LINKS */}
              <nav className="flex flex-col px-6 py-6 space-y-5 text-lg font-medium text-[#3A1F16]">

                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`transition ${
                      pathname === link.href
                        ? "text-[#C4622D]"
                        : "hover:text-[#C4622D]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}