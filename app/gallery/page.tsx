"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function GalleryPage() {
  // Static gallery list (from /public/gallery/)
  const staticGallery = [
    { src: "/g1.png", title: "Natural Honey Extraction" },
    { src: "/g2.png", title: "Raw Honey Bottle" },
    { src: "/g3.png", title: "Bee Farm - Nature" },
    { src: "/g1.png", title: "Honeycomb Fresh" },
    { src: "/g2.png", title: "Pure Honey Drip" },
    { src: "/g3.png", title: "Wild Honey Process" },
  ];

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = staticGallery.map((img) => ({
    src: img.src,
    description: img.title,
  }));

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-[#2c3e1f] mb-6">
        Our Gallery
      </h1>

      <p className="text-center text-gray-600 mb-12">
        A glimpse into our natural process, farm, and pure honey extraction.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {staticGallery.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
          >
            <img
              src={item.src}
              alt={item.title}
              className="rounded-lg shadow-md object-cover h-48 w-full hover:scale-105 transition duration-300"
            />
            <p className="mt-2 text-center text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
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
