/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BuyNowModal from "@/components/checkout/BuyNowModal";
import { api } from "@/lib/api";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [qty, setQty] = useState(1);

  const [showModal, setShowModal] = useState(false);

  const fetchProduct = async () => {
    try {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);

      if (res.data.variants?.length > 0) {
        setSelectedVariant(res.data.variants[0]);
      }
    } catch {
      console.error("Failed to load product");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-24 text-[#6F4E37]">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-24 text-[#6F4E37]">
        Product not found.
      </div>
    );
  }

  const price = selectedVariant ? selectedVariant.price : product.price;
  const total = price * qty;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* IMAGE */}
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="rounded-lg shadow-md object-cover w-full h-[420px]"
        />

        {/* DETAILS */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#3A1F16]">
            {product.name}
          </h1>

          <div className="mt-3 h-[1px] w-20 bg-[#C6A77D]" />

          <p className="text-[#6F4E37] mt-6 leading-relaxed">
            {product.description}
          </p>

          {/* PRICE */}
          <p className="text-3xl font-semibold text-[#C4622D] mt-8">
            ₹{price}
          </p>

          {/* Quantity */}
          <div className="mt-8">
            <p className="font-medium text-[#3A1F16] mb-3">Quantity</p>

            <div className="flex items-center gap-4">
              <button
                className="
                  px-4 py-2
                  bg-[#F4E6D5]
                  border border-[#C6A77D]
                  rounded-md
                  text-[#3A1F16]
                  hover:bg-[#E9DCCB]
                  transition
                "
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                −
              </button>

              <span className="text-lg font-semibold text-[#3A1F16]">
                {qty}
              </span>

              <button
                className="
                  px-4 py-2
                  bg-[#F4E6D5]
                  border border-[#C6A77D]
                  rounded-md
                  text-[#3A1F16]
                  hover:bg-[#E9DCCB]
                  transition
                "
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Total */}
          <p className="mt-6 text-xl font-semibold text-[#3A1F16]">
            Total: ₹{total}
          </p>

          {/* Buy Button */}
          <button
            onClick={() => setShowModal(true)}
            className="
              mt-8
              w-full
              bg-[#C4622D]
              text-white
              py-3
              rounded-md
              text-lg
              hover:bg-[#552619]
              transition
            "
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Benefits */}
      {product.benefits?.length > 0 && (
        <div className="mt-24">
          <h2 className="text-2xl font-serif text-[#3A1F16]">
            Benefits
          </h2>

          <div className="mt-3 h-[1px] w-20 bg-[#C6A77D]" />

          <ul className="list-disc mt-6 ml-6 text-[#6F4E37] space-y-3">
            {product.benefits.map((b: string, i: number) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Buy Now Modal */}
      {showModal && (
        <BuyNowModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          product={{
            ...product,
            price,
            qty,
            variant: selectedVariant?.label,
          }}
        />
      )}
    </div>
  );
}