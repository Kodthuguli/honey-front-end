"use client";

import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fdfbf7] border-t border-yellow-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#2c3e1f]">Kodthuguli Honey</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Pure • Natural • Honest  
            <br />
            Direct from native farms to your home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#2c3e1f] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#2c3e1f] mb-3">Contact Us</h3>
          <p className="text-gray-700 text-sm">📞 +91 9XXXXXXXX</p>
          <p className="text-gray-700 text-sm">📧 support@kodthugulihoney.com</p>

          <Link
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition"
          >
            Chat on WhatsApp
          </Link>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-[#2c3e1f] mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-[#2c3e1f] text-2xl">
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="hover:text-yellow-600 transition" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="hover:text-yellow-600 transition" />
            </Link>
            <Link href="#" aria-label="WhatsApp">
              <FaWhatsapp className="hover:text-yellow-600 transition" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f5f2e8] py-3 text-center text-sm text-gray-600 border-t">
        © {new Date().getFullYear()} Kodthuguli Honey. All rights reserved.
      </div>
    </footer>
  );
}
