"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const sellerNumber = "91XXXXXXXXXX"; // <- replace with your WhatsApp number (e.g. 919876543210)
  const waText = encodeURIComponent(
    `Hi, I'm interested in your products. Please share more details.`
  );
  const waLink = `https://wa.me/${sellerNumber}?text=${waText}`;

  return (
    <section
      aria-label="Hero"
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/hero-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        {/* Tagline */}
        <h1
          className="text-white font-semibold drop-shadow-lg leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3.75rem)" }}
        >
          <span className="block">Pure · Natural · Authentic</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-white/90 max-w-2xl mx-auto text-md md:text-lg">
          Hand-harvested forest honey — chemical free, full of natural goodness.
          Direct from our apiaries to your table.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          {/* Solid Honey Button */}
          <Link href="/products" className="inline-block">
            <button
              aria-label="Explore Products"
              className="px-6 py-3 rounded-full font-medium shadow-sm"
              style={{
                backgroundColor: "#D4A017", // Honey gold
                color: "#0B0B00",
                boxShadow: "0 6px 18px rgba(212,160,23,0.18)",
              }}
            >
              Explore Products
            </button>
          </Link>

          {/* Outline WhatsApp Button */}
          <a href={waLink} target="_blank" rel="noreferrer" className="inline-block">
            <button
              aria-label="Order on WhatsApp"
              className="px-6 py-3 rounded-full font-medium border-2"
              style={{
                borderColor: "rgba(255,255,255,0.9)",
                color: "#FFFFFF",
                backgroundColor: "transparent",
              }}
            >
              WhatsApp Order
            </button>
          </a>
        </div>
      </motion.div>

      {/* subtle decorative element bottom-left (honey accent) */}
      <div
        aria-hidden
        className="absolute left-6 bottom-6 w-28 h-28 rounded-full blur-2xl opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(212,160,23,0.9) 0%, rgba(212,160,23,0.55) 20%, rgba(212,160,23,0.15) 50%, transparent 70%)",
        }}
      />
    </section>
  );
}
