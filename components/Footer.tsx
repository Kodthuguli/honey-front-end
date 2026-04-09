"use client";

import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3A1F16] text-[#E9DCCB] mt-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Vanamrith"
              className="h-12 w-auto object-contain"
            />
            <h2 className="text-xl font-serif tracking-wide">
              VANAMRITH
            </h2>
          </div>

          <p className="mt-4 text-sm text-[#D7C2A3] leading-relaxed">
            Pure • Natural • Honest  
            <br />
            Direct from native forests to your home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#E9DCCB]">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-[#D7C2A3]">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#E9DCCB]">
            Contact Us
          </h3>

          <p className="text-sm text-[#D7C2A3]">
            📞 +91 9XXXXXXXX
          </p>

          <p className="text-sm text-[#D7C2A3] mt-2">
            📧 support@vanamrith.com
          </p>

          <Link
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="
              inline-block mt-5
              bg-[#C4622D]
              text-white
              px-4 py-2
              rounded-md
              text-sm
              hover:bg-[#552619]
              transition
            "
          >
            Chat on WhatsApp
          </Link>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#E9DCCB]">
            Follow Us
          </h3>

          <div className="flex items-center gap-5 text-2xl">
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="text-[#D7C2A3] hover:text-white transition" />
            </Link>

            <Link href="#" aria-label="Facebook">
              <FaFacebook className="text-[#D7C2A3] hover:text-white transition" />
            </Link>

            <Link href="#" aria-label="WhatsApp">
              <FaWhatsapp className="text-[#D7C2A3] hover:text-white transition" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#5C4033] py-4 text-center text-sm text-[#C6A77D]">
        © {new Date().getFullYear()} VANAMRITH. All rights reserved.
      </div>

    </footer>
  );
}