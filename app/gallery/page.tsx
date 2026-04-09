/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { api } from "@/lib/api";
import { Filter, X } from "lucide-react";

export default function GalleryPage() {
  const [gallery, setGallery] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [categories, setCategories] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const SkeletonGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="w-full h-52 bg-[#F4E6D5] animate-pulse rounded-lg"
        />
      ))}
    </div>
  );

  const fetchGallery = async (reset = false) => {
    setLoading(true);
    try {
      const res = await api.get("/gallery", {
        params: {
          page: reset ? 1 : page,
          limit,
          category,
        },
      });

      if (reset) {
        setGallery(res.data.items);
      } else {
        setGallery((prev) => [...prev, ...res.data.items]);
      }

      setTotalPages(res.data.totalPages);
    } catch {
      console.error("Failed to load gallery");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data.map((c: any) => c.name));
    } catch {
      console.error("Failed to load categories");
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchGallery(true);
  }, []);

  useEffect(() => {
    setPage(1);
    fetchGallery(true);
  }, [category]);

  useEffect(() => {
    if (page > 1) fetchGallery();
  }, [page]);

  const slides = gallery
    .filter((img) => img.images?.[0])
    .map((img) => ({
      src: img.images[0],
      description: img.title || "",
    }));

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#3A1F16]">
          Our Gallery
        </h1>

        <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />

        <p className="mt-4 text-[#6F4E37] max-w-2xl mx-auto">
          A glimpse into our natural process, farm, and pure honey extraction.
        </p>
      </div>


      {/* MOBILE FILTER BUTTON */}
      <div className="lg:hidden flex justify-center mt-10">
        <button
          onClick={() => setFilterOpen(true)}
          className="flex items-center gap-2 bg-[#F4E6D5] border border-[#C6A77D] px-6 py-3 rounded-md"
        >
          <Filter size={18} />
          Filter
        </button>
      </div>


      {/* PAGE LAYOUT */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* DESKTOP FILTER SIDEBAR */}
        <aside className="hidden lg:block bg-[#F4E6D5] p-6 rounded-xl shadow-sm space-y-6">

          <h3 className="font-semibold text-[#3A1F16]">
            Categories
          </h3>

          <div className="space-y-3">

            <button
              onClick={() => setCategory("all")}
              className={`block w-full text-left ${
                category === "all" ? "text-[#C4622D]" : ""
              }`}
            >
              All
            </button>

            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setCategory(cat)}
                className={`block w-full text-left ${
                  category === cat ? "text-[#C4622D]" : ""
                }`}
              >
                {cat}
              </button>
            ))}

          </div>

        </aside>


        {/* GALLERY GRID */}
        <div className="lg:col-span-3">

          {loading && page === 1 ? (
            <SkeletonGrid />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

              {gallery.map((item) => {
                const imgSrc = item.images?.[0];
                const slideIndex = slides.findIndex((s) => s.src === imgSrc);

                return (
                  <div
                    key={item._id}
                    className="cursor-pointer group"
                    onClick={() => {
                      if (slideIndex !== -1) {
                        setCurrentIndex(slideIndex);
                        setOpen(true);
                      }
                    }}
                  >
                    <img
                      loading="lazy"
                      src={imgSrc}
                      alt={item.title}
                      className="
                        rounded-lg shadow-sm
                        object-cover h-52 w-full
                        group-hover:shadow-md
                        group-hover:scale-[1.02]
                        transition duration-500
                      "
                    />

                    <p className="mt-3 text-center text-[#6F4E37]">
                      {item.title}
                    </p>
                  </div>
                );
              })}

            </div>
          )}


          {/* LOAD MORE */}
          {!loading && page < totalPages && (
            <div className="text-center mt-16">
              <button
                onClick={() => setPage(page + 1)}
                className="px-6 py-3 bg-[#C4622D] text-white rounded-md hover:bg-[#552619]"
              >
                Load More
              </button>
            </div>
          )}

        </div>
      </div>


      {/* MOBILE FILTER DRAWER */}
      {filterOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-end z-50">

          <div className="w-full bg-white rounded-t-2xl p-6 animate-slideUp max-h-[70vh] overflow-y-auto">

            <div className="flex justify-between mb-6">
              <h3 className="font-semibold text-lg">Filter Gallery</h3>

              <button onClick={() => setFilterOpen(false)}>
                <X />
              </button>
            </div>

            <div className="space-y-3">

              <button
                onClick={() => {
                  setCategory("all");
                  setFilterOpen(false);
                }}
                className="block w-full text-left"
              >
                All
              </button>

              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCategory(cat);
                    setFilterOpen(false);
                  }}
                  className="block w-full text-left"
                >
                  {cat}
                </button>
              ))}

            </div>

          </div>

        </div>
      )}


      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
        plugins={[Zoom, Captions, Thumbnails]}
      />

    </div>
  );
}