/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

export default function GalleryPreview() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/gallery", {
        params: {
          page: 1,
          limit: 4,
        },
      })
      .then((res) => {
        const list = res.data.items
          ?.map((item: any) => item.images?.[0])
          .filter((img: string) => img)
          .slice(0, 4);

        setImages(list || []);
      })
      .catch(() => setImages([]))
      .finally(() => setLoading(false));
  }, []);

  // Loading State
  if (loading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-44 w-full bg-[#F4E6D5] rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (images.length === 0) return null;

  return (
    <section className="py-20" style={{
          backgroundColor: "#ab8867",
          backgroundImage: "url('/textures/natural-paper.png')",
          backgroundRepeat: "repeat",
        }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#3A1F16]">
            Gallery
          </h2>

          <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />

          <p className="mt-4 text-[#6F4E37] max-w-2xl mx-auto">
            A glimpse of our natural process and purity.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="h-44 w-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <Link href="/gallery">
            <button
              className="
                px-6 py-3
                bg-[#C4622D]
                text-white
                rounded-md
                hover:bg-[#552619]
                transition
                shadow-sm
              "
            >
              View Full Gallery
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}