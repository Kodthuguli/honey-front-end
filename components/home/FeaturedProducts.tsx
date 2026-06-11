"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
        params: { limit: 4 },
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
    <section className="relative overflow-hidden pt-20 lg:pt-28">
      {/* DECORATIONS */}
      <div className="absolute left-0 top-[140px] hidden lg:block opacity-20">
        {/* <Image

src="/flower-left.png"

alt=""

width={120}

height={120}

/> */}
      </div>

      <div className="absolute right-0 top-0 hidden lg:block opacity-20">
        {/* <Image
          src="/hex-right.png"
          alt=""
          width={220}
          height={220}
        /> */}
      </div>

      <div className="absolute left-[40px] top-[90px] hidden lg:block">
        {/* <Image src="/bee1.png" alt="" width={48} height={48} /> */}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* LABEL */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 lg:w-16 h-[1px] bg-[#D89A20]" />

            <span
              className="
                uppercase
                tracking-[3px]
                text-[#D89A20]
                text-[11px]
                lg:text-[15px]
                font-semibold
              "
            >
              Our Best Picks
            </span>

            <div className="w-10 lg:w-16 h-[1px] bg-[#D89A20]" />
          </div>

          {/* TITLE */}
          <h2 className="font-serif leading-[0.95] tracking-[-1px]">
            <span
              className="
                text-[#2B140A]
                text-[48px]
                sm:text-[64px]
                lg:text-[92px]
              "
            >
              Featured{" "}
            </span>

            <span
              className="
                text-[#D18A12]
                text-[52px]
                sm:text-[68px]
                lg:text-[100px]
              "
            >
              Products
            </span>
          </h2>

          {/* DIVIDER */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="w-14 lg:w-24 h-[1px] bg-[#D9A441]" />

            <div className="w-2 h-2 rounded-full bg-[#D9A441]" />

            <div className="w-14 lg:w-24 h-[1px] bg-[#D9A441]" />
          </div>

          {/* SUBTEXT */}
          <p
            className="
              mt-6
              text-[#4F3B2E]
              text-[18px]
              lg:text-[22px]
              leading-9
              max-w-[760px]
              mx-auto
            "
          >
            Handpicked natural honey varieties, straight from the forest to
            your home.
          </p>
        </motion.div>

        {/* PRODUCTS */}
        {loading ? (
          <p className="text-center text-[#6F4E37] mt-14">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-[#6F4E37] mt-14">
            No products available
          </p>
        ) : (
          <>
            {/* DESKTOP */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-5 mt-16">
              {products.map((p, i) => (
                <motion.div
                  key={p._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="
                    rounded-[28px]
                    border
                    border-[#EADCCB]
                    bg-white/25
                    backdrop-blur-[2px]
                    overflow-hidden
                    shadow-[0_10px_30px_rgba(0,0,0,0.03)]
                  "
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden rounded-[22px] m-2">
                    <div
className="
relative
aspect-[0.92]
overflow-hidden
rounded-[22px]
"
>


<Image

src={
p.images?.[0] ||
"/placeholder.png"
}

alt={
p.name
}

fill

sizes="
(max-width:1024px) 100vw,
25vw
"

className="
object-cover
hover:scale-105
transition
duration-700
"

/>


</div>
                  </div>

                  {/* CONTENT */}
                  <div className="px-5 pb-5 pt-1">
                    {/* NAME */}
                    <h3
                      className="
                        font-serif
                        text-[#2B140A]
                        text-[22px]
                        leading-tight
                      "
                    >
                      {p.name}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-3
                        text-[#5D4A3E]
                        text-[15px]
                        leading-7
                        min-h-[56px]
                      "
                    >
                      Rich, natural and packed with authentic forest goodness.
                    </p>

                    {/* PRICE */}
                    <div className="flex items-end justify-between mt-5">
                      <span
                        className="
                          text-[#2B140A]
                          font-semibold
                          text-[22px]
                        "
                      >
                        ₹{p.price}
                      </span>

                      <span
                        className="
                          text-[#B6760A]
                          text-[16px]
                        "
                      >
                        500g
                      </span>
                    </div>

                    {/* BUTTON */}
                    <Link
                      href={`/products/${p._id}`}
                      className="
                        mt-5
                        h-[54px]
                        rounded-xl
                        bg-[#D18A12]
                        hover:bg-[#BC7907]
                        transition-all
                        duration-300
                        text-white
                        flex
                        items-center
                        justify-center
                        gap-3
                        font-semibold
                        tracking-wide
                      "
                    >
                      <ShoppingBag size={18} />

                      BUY NOW
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="lg:hidden flex flex-col gap-5 mt-12">
              {products.map((p, i) => (
                <motion.div
                  key={p._id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="
                    rounded-[24px]
                    border
                    border-[#EADCCB]
                    bg-white/25
                    backdrop-blur-[2px]
                    overflow-hidden
                    flex
                  "
                >
                  {/* LEFT IMAGE */}
                  <div className="w-[48%] relative">
                    {/* TAG */}
                    <div
                      className="
                        absolute
                        left-3
                        top-3
                        z-10
                        bg-[#FFF8EC]
                        border
                        border-[#E8D1AA]
                        rounded-full
                        px-3
                        py-1
                        flex
                        items-center
                        gap-1.5
                      "
                    >
                      <div className="w-2 h-2 rounded-full bg-[#D89A20]" />

                      <span
                        className="
                          text-[#D18A12]
                          text-[10px]
                          font-semibold
                          tracking-wide
                        "
                      >
                        100% PURE
                      </span>
                    </div>

                    <div
className="
relative
h-full
min-h-[260px]
"
>


<Image

src={
p.images?.[0] ||
"/placeholder.png"
}

alt={
p.name
}

fill

sizes="50vw"

className="
object-cover
"

/>


</div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="w-[52%] p-4 flex flex-col">
                    {/* NAME */}
                    <h3
                      className="
                        font-serif
                        text-[#2B140A]
                        text-[22px]
                        leading-tight
                      "
                    >
                      {p.name}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-3
                        text-[#4F3B2E]
                        text-[14px]
                        leading-7
                      "
                    >
                      Rich, dark and packed with antioxidants.
                    </p>

                    {/* DIVIDER */}
                    <div className="flex items-center gap-3 mt-5">
                      <div className="w-14 h-[1px] bg-[#D9A441]" />

                      <div className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />

                      <div className="w-14 h-[1px] bg-[#D9A441]" />
                    </div>

                    {/* PRICE */}
                    <div className="flex items-end justify-between mt-5">
                      <span
                        className="
                          text-[#2B140A]
                          font-semibold
                          text-[20px]
                        "
                      >
                        ₹{p.price}
                      </span>

                      <span
                        className="
                          text-[#D18A12]
                          text-[16px]
                        "
                      >
                        500g
                      </span>
                    </div>

                    {/* BUTTON */}
                    <Link
                      href={`/products/${p._id}`}
                      className="
                        mt-5
                        h-[48px]
                        rounded-xl
                        bg-[#D18A12]
                        hover:bg-[#BC7907]
                        transition-all
                        duration-300
                        text-white
                        flex
                        items-center
                        justify-center
                        gap-2
                        font-semibold
                        tracking-wide
                        text-[15px]
                      "
                    >
                      <ShoppingBag size={16} />

                      BUY NOW
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* VIEW ALL */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <Link
            href="/products"
            className="
              h-[56px]
              lg:h-[70px]
              px-8
              lg:px-14
              rounded-xl
              bg-[#D18A12]
              hover:bg-[#BC7907]
              transition-all
              duration-300
              text-white
              flex
              items-center
              justify-center
              gap-3
              font-semibold
              tracking-[1px]
              text-[14px]
              lg:text-[22px]
              shadow-[0_12px_35px_rgba(209,138,18,0.25)]
            "
          >
            VIEW ALL PRODUCTS

            <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7" />
          </Link>
        </div>
      </div>
    </section>
  );
}