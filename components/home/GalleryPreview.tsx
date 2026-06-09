/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { api } from "@/lib/api";

export default function GalleryPreview() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/gallery", {
        params: {
          page: 1,
          limit: 5,
        },
      })
      .then((res) => {
        const list = res.data.items
          ?.map((item: any) => item.images?.[0])
          .filter((img: string) => img)
          .slice(0, 5);

        setImages(list || []);
      })
      .catch(() => setImages([]))
      .finally(() => setLoading(false));
  }, []);

  // LOADING
  if (loading) {
    return (
      <section className="relative overflow-hidden pt-20 lg:pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mt-12">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="
                  rounded-[24px]
                  bg-[#F4E6D5]
                  animate-pulse
                  h-[220px]
                  lg:h-[320px]
                "
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (images.length === 0) return null;

  return (
    <section className="relative overflow-hidden pt-20 lg:pt-28">
      {/* DECORATIONS */}
      <div className="absolute left-0 top-[240px] hidden lg:block opacity-20">
        <img src="/flower-left.png" alt="" className="w-[120px]" />
      </div>

      <div className="absolute right-0 top-0 hidden lg:block opacity-20">
        <img src="/hex-right.png" alt="" className="w-[220px]" />
      </div>

      <div className="absolute right-0 bottom-[180px] hidden lg:block opacity-20">
        <img src="/leaf-right.png" alt="" className="w-[120px]" />
      </div>

      <div className="absolute left-[70px] top-[90px] hidden lg:block">
        <img src="/bee1.png" alt="" className="w-12" />
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
              Our Gallery
            </span>

            <div className="w-10 lg:w-16 h-[1px] bg-[#D89A20]" />
          </div>

          {/* TITLE */}
          <h2 className="font-serif leading-[0.95] tracking-[-1px]">
            <span
              className="
                block
                text-[#2B140A]
                text-[52px]
                sm:text-[68px]
                lg:text-[92px]
              "
            >
              Nature in
            </span>

            <span
              className="
                block
                text-[#D18A12]
                text-[60px]
                sm:text-[78px]
                lg:text-[100px]
                mt-1
              "
            >
              Every Drop
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
            A glimpse into the purity of our honey, straight from the forest and
            crafted with care.
          </p>
        </motion.div>

        {/* DESKTOP GALLERY */}
        <div className="hidden lg:grid grid-cols-[1.05fr_1fr_1fr] gap-4 mt-16">
          {/* LARGE LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              row-span-2
              overflow-hidden
              rounded-[28px]
              h-[620px]
            "
          >
            <img
              src={images[0]}
              alt="Gallery 1"
              className="
                w-full
                h-full
                object-cover
                hover:scale-105
                transition
                duration-700
              "
            />
          </motion.div>

          {/* TOP MIDDLE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="
              overflow-hidden
              rounded-[28px]
              h-[300px]
            "
          >
            <img
              src={images[1]}
              alt="Gallery 2"
              className="
                w-full
                h-full
                object-cover
                hover:scale-105
                transition
                duration-700
              "
            />
          </motion.div>

          {/* TOP RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="
              overflow-hidden
              rounded-[28px]
              h-[300px]
            "
          >
            <img
              src={images[2]}
              alt="Gallery 3"
              className="
                w-full
                h-full
                object-cover
                hover:scale-105
                transition
                duration-700
              "
            />
          </motion.div>

          {/* BOTTOM MIDDLE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="
              overflow-hidden
              rounded-[28px]
              h-[300px]
            "
          >
            <img
              src={images[3]}
              alt="Gallery 4"
              className="
                w-full
                h-full
                object-cover
                hover:scale-105
                transition
                duration-700
              "
            />
          </motion.div>

          {/* BOTTOM RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="
              overflow-hidden
              rounded-[28px]
              h-[300px]
            "
          >
            <img
              src={images[4] || images[0]}
              alt="Gallery 5"
              className="
                w-full
                h-full
                object-cover
                hover:scale-105
                transition
                duration-700
              "
            />
          </motion.div>
        </div>

        {/* MOBILE GALLERY */}
        <div className="lg:hidden mt-12">
          {/* BIG IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              overflow-hidden
              rounded-[24px]
              h-[340px]
            "
          >
            <img
              src={images[0]}
              alt="Gallery 1"
              className="
                w-full
                h-full
                object-cover
              "
            />
          </motion.div>

          {/* SMALL GRID */}
          <div className="grid grid-cols-2 gap-3 mt-3">
            {[images[1], images[2], images[3], images[4] || images[0]].map(
              (img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="
                    overflow-hidden
                    rounded-[20px]
                    h-[180px]
                  "
                >
                  <img
                    src={img}
                    alt={`Gallery ${i + 2}`}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10 lg:mt-14">
          <Link
            href="/gallery"
            className="
              h-[58px]
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
              text-[15px]
              lg:text-[22px]
              shadow-[0_12px_35px_rgba(209,138,18,0.25)]
            "
          >
            VIEW FULL GALLERY

            <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7" />
          </Link>
        </div>
      </div>
    </section>
  );
}