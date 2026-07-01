"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { ShoppingBag, BookOpen, Headphones, Mail, Truck, ShieldCheck, Leaf, Heart } from "lucide-react";

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/vanamrith?igsh=dDRsZ3Q2NnE4emxs" },
  { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61590468216226" },
  { icon: FaYoutube,   href: "https://www.youtube.com/@vanamrith" },
  { icon: FaWhatsapp,  href: "https://wa.me/918296054891" },
];


const trustStrip = [
  { icon: <Truck size={22} />,       title: "Fast & Safe Delivery", sub: "Pan India Shipping" },
  { icon: <ShieldCheck size={22} />, title: "Secure Payment",       sub: "100% Protected" },
  { icon: <Leaf size={22} />,        title: "Natural & Pure",       sub: "No Additives" },
  { icon: <Heart size={22} />,       title: "Made with Care",       sub: "From Forest to You" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white" style={{ backgroundColor: "#1B0D08" }}>

      {/* ── BG IMAGE ── */}
      <Image
        src="/footer-bg.png"
        alt=""
        fill
        className="object-cover object-center opacity-100 pointer-events-none select-none"
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-14 pt-16 md:pt-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-[1.8fr_1fr_1fr_1fr_1.4fr] gap-10 md:gap-8 border-b border-[#C87512]/20">

          {/* ── BRAND ── */}
          <div className="col-span-2 md:col-span-3 xl:col-span-1">
            <Image src="/logo.png" alt="Vanamrith" width={200} height={100} className="w-[160px] md:w-[100px] h-auto" />

            <p className="mt-5 text-white/55 text-[13px] leading-[1.9] max-w-[260px]">
              Pure forest honey, raw & unprocessed. Sourced from untouched forests and crafted by nature, perfected by care.
            </p>

            <div className="w-8 h-px bg-[#C87512] mt-6 mb-6" />

          </div>

          {/* ── SHOP ── */}
          <div>
            <FooterTitle icon={<ShoppingBag size={14} />} title="Shop" />
            <ul className="space-y-3">
              {[
                { label: "All Products",    href: "/products" },
                { label: "Raw Honey",       href: "/products" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 text-[13px] hover:text-[#C87512] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── OUR STORY ── */}
          <div>
            <FooterTitle icon={<BookOpen size={14} />} title="Our Story" />
            <ul className="space-y-3">
              {[
                { label: "About Us",       href: "/about" },
                { label: "Why Vanamrith",  href: "/about" },
                { label: "Blog",           href: "/blog" },
                { label: "FAQs",           href: "/faq" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 text-[13px] hover:text-[#C87512] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── HELP & SUPPORT ── */}
          <div>
            <FooterTitle icon={<Headphones size={14} />} title="Help & Support" />
            <ul className="space-y-3">
              {[
                { label: "Shipping & Delivery",   href: "/shipping-delivery" },
                { label: "Returns & Refunds",     href: "/returns-refunds" },
                { label: "Track Your Order",      href: "/track-order" },
                { label: "Terms & Conditions",    href: "/terms-conditions" },
                { label: "Privacy Policy",        href: "/privacy-policy" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 text-[13px] hover:text-[#C87512] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── STAY CONNECTED ── */}
          <div>
            <FooterTitle icon={<Mail size={14} />} title="Stay Connected" />
            {/* <p className="text-white/50 text-[13px] leading-[1.8] mb-5 max-w-[220px]">
              Subscribe to get special offers, health tips, and updates.
            </p> */}

            {/* email bar */}
            {/* <div className="flex rounded-[10px] overflow-hidden border border-[#C87512]/30 bg-white/5 mb-7">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-4 py-3 text-[12px] text-white placeholder:text-white/30 outline-none min-w-0"
              />
              <button className="px-3 bg-[#C87512] hover:bg-[#A85F0D] transition-colors flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div> */}

            {/* follow us label */}
            <p className="text-white/70 text-[11px] font-semibold uppercase tracking-[3px] mb-3">Follow Us</p>
            <div className="w-8 h-px bg-[#C87512]/50 mb-4" />

            {/* social icons */}
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-[#C87512]/30 bg-white/5 flex items-center justify-center text-white/55 hover:border-[#C87512] hover:text-[#C87512] hover:bg-[#C87512]/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* ── TRUST STRIP ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#C87512]/15 rounded-[18px] overflow-hidden my-10">
          {trustStrip.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-5 md:px-7 py-5 md:py-6
                ${i !== trustStrip.length - 1 ? "border-b md:border-b-0 md:border-r border-[#C87512]/15" : ""}
                ${i === 1 ? "border-b md:border-b-0" : ""}
              `}
            >
              <div className="text-[#C87512] shrink-0">{item.icon}</div>
              <div>
                <p className="text-[#C87512] text-[11px] md:text-[12px] font-bold uppercase tracking-wider leading-tight">{item.title}</p>
                <p className="text-white/40 text-[11px] mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="py-5 border-t border-[#C87512]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/35">

          <p>© {new Date().getFullYear()} Vanamrith. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Crafted with <Heart size={11} className="text-[#C87512] fill-[#C87512]" /> by nature
          </p>

          {/* We Accept + payment icons */}
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
            <span className="text-white/40 text-[11px]">We Accept</span>
            <div className="flex items-center gap-2">
              {["/visa.png", "/mastercard.png", "/upi.png", "/razorpay.png"].map((src) => (
                <div key={src} className="bg-white rounded-[5px] w-[48px] h-[26px] flex items-center justify-center">
                  <Image src={src} alt="payment" width={36} height={18} className="object-contain" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

function FooterTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#C87512]">{icon}</span>
        <h3 className="uppercase tracking-[3px] font-bold text-[11px] text-[#C87512]">{title}</h3>
      </div>
      {/* ornament */}
      <div className="flex items-center gap-1.5 mb-5">
        <div className="w-5 h-px bg-[#C87512]/50" />
        <span className="text-[#C87512]/60 text-[8px]">✦</span>
        <div className="w-5 h-px bg-[#C87512]/50" />
      </div>
    </div>
  );
}