"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="font-playfair text-2xl font-semibold tracking-wide">
          Honey<span className="text-yellow-600">Pure</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-yellow-700">Home</Link>
          <Link href="/about" className="hover:text-yellow-700">About</Link>
          <Link href="/products" className="hover:text-yellow-700">Products</Link>
          <Link href="/gallery" className="hover:text-yellow-700">Gallery</Link>
          <Link href="/faq" className="hover:text-yellow-700">FAQ</Link>
          <Link href="/contact" className="hover:text-yellow-700">Contact</Link>
          <Link href="/blogs" className="hover:text-yellow-700">Blog</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-white border-b flex flex-col gap-4 px-4 py-6 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/blogs" onClick={() => setOpen(false)}>Blog</Link>
        </nav>
      )}
    </header>
  );
}
