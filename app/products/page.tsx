/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useState } from "react";
import BuyNowModal from "@/components/checkout/BuyNowModal";

export default function ProductsPage() {
  const products = [
    {
      id: "1",
      name: "Pure Forest Honey",
      price: 350,
      image: "/honey1.png",
      shortDesc: "Raw, unfiltered, chemical-free honey.",
    },
    {
      id: "2",
      name: "Natural Coconut Oil",
      price: 280,
      image: "/honey2.png",
      shortDesc: "Cold-pressed pure coconut oil.",
    },
    {
      id: "3",
      name: "Neem Herbal Oil",
      price: 150,
      image: "/honey1.png",
      shortDesc: "Handmade pure neem extract oil.",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const handleBuyNow = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">

      <h1 className="text-4xl font-bold text-center text-[#2c3e1f] mb-4">
        Our Products
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Discover our natural, chemical-free, farm-sourced products.
      </p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-4 border border-gray-100"
          >
            <img
              src={p.image}
              alt={p.name}
              className="rounded-lg object-cover w-full h-52"
            />

            <h3 className="text-xl font-semibold text-[#2c3e1f] mt-4">
              {p.name}
            </h3>

            <p className="text-gray-600 mt-1 text-sm">{p.shortDesc}</p>

            <p className="text-lg font-bold text-[#88b04b] mt-2">
              ₹{p.price}
            </p>

            <div className="mt-4 flex gap-3">

              <button
                onClick={() => handleBuyNow(p)}
                className="flex-1 bg-[#88b04b] text-white py-2 rounded-lg hover:bg-[#76963f] transition"
              >
                Buy Now
              </button>

              <Link href={`/products/${p.id}`} className="flex-1">
                <button className="w-full py-2 border border-[#88b04b] text-[#88b04b] rounded-lg hover:bg-[#eef6e6] transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <BuyNowModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
