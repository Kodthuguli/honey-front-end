"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const sellerNumber = "91XXXXXXXXXX";
  const waText = encodeURIComponent(
    `Hi, I'm interested in your products. Please share more details.`
  );
  const waLink = `https://wa.me/${sellerNumber}?text=${waText}`;

  return (
    <section
      aria-label="Hero"
      className="
        relative w-full
        min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh]
        bg-cover bg-center bg-no-repeat
        flex items-center
      "
      style={{
        backgroundImage: "url('/hero-honey.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl"
        >
          <h1 className="font-serif text-[#3A1F16] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Pure Forest Honey
          </h1>

          <p className="mt-4 text-lg text-[#5C4033]">
            From Nature to Your Home
          </p>

          <p className="mt-4 text-[#6F4E37] text-base sm:text-lg">
            Discover the purest honey, collected from the depths of the forest and packed with nature’s goodness.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products">
              <button className="px-6 py-3 bg-[#C4622D] hover:bg-[#552619] text-white rounded-md shadow transition">
                Shop Now
              </button>
            </Link>

            <a href={waLink} target="_blank" rel="noreferrer">
              <button className="px-6 py-3 border border-[#3A1F16] text-[#3A1F16] hover:bg-[#3A1F16] hover:text-white rounded-md transition">
                WhatsApp Order
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}