/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import BuyNowModal from "@/components/checkout/BuyNowModal";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const products = [
    {
      id: "1",
      name: "Pure Forest Honey",
      price: 350,
      image: "/honey1.png",
      description:
        "Raw, unfiltered honey sourced directly from forest regions. Rich in antioxidants and nutrients.",
      benefits: [
        "Boosts immunity",
        "Aids digestion",
        "Natural sweetener",
        "Rich in antioxidants",
      ],
    },
    {
      id: "2",
      name: "Natural Coconut Oil",
      price: 280,
      image: "/honey2.png",
      description:
        "Cold-pressed coconut oil ideal for cooking, skincare, and hair nourishment.",
      benefits: [
        "Supports heart health",
        "Strengthens hair",
        "Improves skin hydration",
      ],
    },
  ];

  const product = products.find((p) => p.id === id);
  const [qty, setQty] = useState(1);
  const [showModal, setShowModal] = useState(false);

  if (!product)
    return (
      <div className="text-center py-20 text-gray-600">
        Product not found.
      </div>
    );

  const total = product.price * qty;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl shadow-lg object-cover w-full h-96"
        />

        <div>
          <h1 className="text-4xl font-bold text-[#2c3e1f]">
            {product.name}
          </h1>

          <p className="text-lg text-gray-600 mt-3">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-[#88b04b] mt-6">
            ₹{product.price}
          </p>

          <div className="mt-6">
            <p className="font-medium mb-2">Quantity</p>
            <div className="flex items-center gap-3">
              <button
                className="px-3 py-1 bg-gray-200 rounded"
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                -
              </button>

              <span className="text-lg font-semibold">{qty}</span>

              <button
                className="px-3 py-1 bg-gray-200 rounded"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>
          </div>

          <p className="mt-4 text-xl font-semibold text-[#2c3e1f]">
            Total: ₹{total}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="block mt-6 w-full text-center bg-[#88b04b] text-white py-3 rounded-lg text-lg font-medium hover:bg-[#76963f] transition"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-[#2c3e1f]">
          Benefits
        </h2>
        <ul className="list-disc mt-4 ml-6 text-gray-700 space-y-2">
          {product.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      {/* ✅ Buy Now Modal */}
      {showModal && (
        <BuyNowModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          product={{ ...product, price: product.price }}
        />
      )}
    </div>
  );
}
