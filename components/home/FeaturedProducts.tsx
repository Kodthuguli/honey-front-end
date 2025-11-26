"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const demoProducts = [
  {
    id: "1",
    name: "Pure Forest Honey",
    price: 450,
    image: "/honey1.png",
  },
  {
    id: "2",
    name: "Wild Rock Bee Honey",
    price: 650,
    image: "/honey1.png",
  },
  {
    id: "3",
    name: "Neem Flower Honey",
    price: 500,
    image: "/honey2.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#2c3e24]"
        >
          Featured Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 mt-2 max-w-xl mx-auto"
        >
          Handpicked natural products curated for purity and taste.
        </motion.p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {demoProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="border rounded-xl shadow-md bg-white overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[#2c3e24]">
                  {p.name}
                </h3>
                <p className="text-[#c58a12] font-bold text-xl">₹{p.price}</p>

                <button
                  className="mt-4 flex items-center justify-center gap-2 bg-[#c58a12] text-white py-2 rounded-md hover:bg-[#a8730f] transition"
                >
                  <ShoppingBag size={18} />
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Products Button */}
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-block px-6 py-3 border border-[#c58a12] text-[#c58a12] font-medium rounded-md hover:bg-[#c58a1210] transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
