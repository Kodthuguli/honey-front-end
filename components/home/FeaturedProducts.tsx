"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { api } from "@/lib/api";

type Product = {
  _id: string;
  name: string;
  price: number;
  images?: string[];
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products", {
        params: { limit: 3 },
      });
      setProducts(res.data.items || []);
    } catch {
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#3A1F16]">
            Featured Products
          </h2>

          <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />
        </motion.div>

        {loading ? (
          <p className="text-center text-[#6F4E37] mt-10">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-[#6F4E37] mt-10">
            No products available
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {products.map((p, i) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="
                  bg-[#F4E6D5]
                  rounded-lg
                  shadow-sm
                  hover:shadow-md
                  transition
                  overflow-hidden
                "
              >
                <div className="h-60 w-full flex items-center justify-center bg-white">
                  <img
                    src={p.images?.[0] || "/placeholder.png"}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-[#3A1F16]">
                    {p.name}
                  </h3>

                  <p className="text-[#C4622D] font-semibold text-xl">
                    ₹{p.price}
                  </p>

                  <Link
                    href={`/products/${p._id}`}
                    className="
                      mt-4
                      flex items-center justify-center gap-2
                      bg-[#C4622D]
                      text-white
                      py-2.5
                      rounded-md
                      hover:bg-[#552619]
                      transition
                    "
                  >
                    <ShoppingBag size={18} />
                    Buy Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View All */}
        <div className="text-center mt-14">
          <Link
            href="/products"
            className="
              inline-block
              px-6 py-3
              border border-[#C4622D]
              text-[#C4622D]
              rounded-md
              hover:bg-[#C4622D]
              hover:text-white
              transition
            "
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}