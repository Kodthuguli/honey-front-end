"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function BuyNowModal({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: number;
    image: string;
  };
}) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");

  const total = product.price * quantity;

  const handleOrder = () => {
    if (!name || !phone || !pincode || !address) {
      alert("Please fill all fields");
      return;
    }

    const message = `
Order Request:
Product: ${product.name}
Quantity: ${quantity}
Total: ₹${total}

Customer Details:
Name: ${name}
Phone: ${phone}
Pincode: ${pincode}
Address: ${address}
    `;

    const encodedMessage = encodeURIComponent(message.trim());

    window.open(
      `https://wa.me/919483151437?text=${encodedMessage}`,
      "_blank"
    );

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div
        className="
          bg-white rounded-2xl shadow-xl w-full
          max-w-xl           /* ✅ Smaller modal */
          max-h-[90vh]       /* ✅ Never exceed screen height */
          overflow-y-auto    /* ✅ Scroll if content is too long */
          p-6
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-[#2c3e1f]">
            Complete Your Order
          </h2>
          <button className="text-gray-500 text-xl" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Product Summary */}
        <div className="flex gap-4 items-center border rounded-xl p-4 bg-[#f9f8f4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-[#2c3e1f]">
              {product.name}
            </h3>
            <p className="text-[#88b04b] font-bold text-lg">₹{product.price}</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="mt-6 space-y-4">

          {/* Name */}
          <div>
            <label className="font-medium text-gray-700">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 border rounded-lg p-2"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="font-medium text-gray-700">Phone Number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 border rounded-lg p-2"
              placeholder="10-digit mobile number"
              maxLength={10}
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="font-medium text-gray-700">Pincode</label>
            <input
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="w-full mt-1 border rounded-lg p-2"
              placeholder="Enter pincode"
              maxLength={6}
            />
          </div>

          {/* Address */}
          <div>
            <label className="font-medium text-gray-700">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-1 border rounded-lg p-2"
              rows={3}
              placeholder="House No, Area, City"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="font-medium text-gray-700">Quantity</label>
            <div className="flex items-center gap-3 mt-2">
              <button
                className="px-3 py-2 border rounded-lg"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                className="px-3 py-2 border rounded-lg"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="text-xl font-bold text-[#2c3e1f] text-right mt-2">
            Total: ₹{total}
          </div>
        </div>

        {/* Order Button */}
        <Button
          onClick={handleOrder}
          className="w-full mt-6 py-3 text-lg bg-[#25D366] hover:bg-[#1ebe5c]"
        >
          Order via WhatsApp
        </Button>
      </div>
    </div>
  );
}
