"use client";

import { motion } from "framer-motion";
import { Leaf, Flower2, Droplets, TreePine } from "lucide-react";

const FEATURES = [
  {
    title: "100% Pure Honey",
    desc: "Harvested naturally without additives.",
    icon: Droplets,
  },
  {
    title: "Chemical-Free",
    desc: "No preservatives, no processing, no mixing.",
    icon: Flower2,
  },
  {
    title: "Direct From Farm",
    desc: "Sourced directly from our native beekeepers.",
    icon: TreePine,
  },
  {
    title: "Native Taste",
    desc: "Authentic flavour from local forest flowers.",
    icon: Leaf,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#2c3e24]"
        >
          Why Choose Us
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 mt-2 max-w-2xl mx-auto"
        >
          We bring you nature’s purity with honesty and traditional care.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-[#e9e5dc] hover:shadow-md transition"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#f4e9c8] rounded-full flex items-center justify-center mb-4">
                    <Icon size={28} className="text-[#c58a12]" />
                  </div>

                  <h3 className="text-lg font-semibold text-[#2c3e24]">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
