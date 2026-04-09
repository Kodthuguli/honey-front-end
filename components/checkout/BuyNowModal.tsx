/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

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
    images?: string[];
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div
        className="
          bg-[#F4E6D5]
          rounded-xl
          shadow-xl
          w-full
          max-w-xl
          max-h-[90vh]
          overflow-y-auto
          p-8
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif text-[#3A1F16]">
            Complete Your Order
          </h2>
          <button
            className="text-[#6F4E37] text-xl hover:text-[#3A1F16]"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="h-[1px] w-full bg-[#C6A77D] mb-6" />

        {/* Product Summary */}
        <div className="flex gap-4 items-center border border-[#C6A77D] rounded-lg p-4 bg-[#E9DCCB]">
          <img
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.name}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-[#3A1F16]">
              {product.name}
            </h3>
            <p className="text-[#C4622D] font-semibold text-lg">
              ₹{product.price}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-8 space-y-5">

          <InputField label="Name" value={name} setValue={setName} />
          <InputField label="Phone Number" value={phone} setValue={setPhone} />
          <InputField label="Pincode" value={pincode} setValue={setPincode} />

          {/* Address */}
          <div>
            <label className="font-medium text-[#3A1F16]">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="
                w-full mt-2
                bg-[#E9DCCB]
                border border-[#C6A77D]
                rounded-md
                px-3 py-2
                text-[#3A1F16]
                focus:outline-none
                focus:ring-2 focus:ring-[#C4622D]
              "
              placeholder="House No, Area, City"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="font-medium text-[#3A1F16]">Quantity</label>
            <div className="flex items-center gap-4 mt-3">
              <button
                className="
                  px-4 py-2
                  bg-[#E9DCCB]
                  border border-[#C6A77D]
                  rounded-md
                  text-[#3A1F16]
                  hover:bg-[#DCC8A5]
                  transition
                "
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>

              <span className="text-lg font-semibold text-[#3A1F16]">
                {quantity}
              </span>

              <button
                className="
                  px-4 py-2
                  bg-[#E9DCCB]
                  border border-[#C6A77D]
                  rounded-md
                  text-[#3A1F16]
                  hover:bg-[#DCC8A5]
                  transition
                "
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="text-xl font-semibold text-[#3A1F16] text-right">
            Total: ₹{total}
          </div>
        </div>

        {/* Order Button */}
        <button
          onClick={handleOrder}
          className="
            w-full mt-8 py-3 text-lg
            bg-[#C4622D]
            text-white
            rounded-md
            hover:bg-[#552619]
            transition
          "
        >
          Order via WhatsApp
        </button>
      </div>
    </div>
  );
}

/* Reusable Input Field */
function InputField({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (val: string) => void;
}) {
  return (
    <div>
      <label className="font-medium text-[#3A1F16]">{label}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="
          w-full mt-2
          bg-[#E9DCCB]
          border border-[#C6A77D]
          rounded-md
          px-3 py-2
          text-[#3A1F16]
          focus:outline-none
          focus:ring-2 focus:ring-[#C4622D]
        "
      />
    </div>
  );
}