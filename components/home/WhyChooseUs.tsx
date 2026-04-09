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
    <section className="relative py-20">

      {/* Subtle Texture Layer */}
      <div
        className="absolute inset-0 opacity-[0.40] pointer-events-none"
        style={{
          backgroundColor: "#e2b38a",
          backgroundImage: "url('/textures/natural-paper.png')",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#3A1F16]">
            Why Choose Us
          </h2>

          {/* Thin underline */}
          <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />

          <p className="mt-4 text-[#6F4E37] max-w-2xl mx-auto">
            We bring you nature’s purity with honesty and traditional care.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {FEATURES.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="
                  bg-[#F4E6D5]
                  rounded-lg
                  p-8
                  text-center
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F1D8B4] flex items-center justify-center mb-5">
                  <Icon size={28} className="text-[#C4622D]" />
                </div>

                <h3 className="text-lg font-semibold text-[#3A1F16]">
                  {f.title}
                </h3>

                <p className="mt-3 text-sm text-[#6F4E37]">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}