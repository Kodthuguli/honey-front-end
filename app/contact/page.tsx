/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {

    if (!name || !phone || !message) {
      setError("Please fill all required fields");
      return;
    }

    // ✅ Indian mobile validation
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await api.post("/contact", {
        name,
        phone,
        email,
        message,
      });

      setSubmitted(true);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");

      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">

      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#3A1F16]">
          Contact Us
        </h1>

        <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />

        <p className="mt-4 text-[#6F4E37]">
          Have a question or want to order? We’re here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <div className="p-8 bg-[#F4E6D5] border border-[#C6A77D] rounded-xl shadow-sm">
            <h3 className="text-xl font-serif text-[#3A1F16]">WhatsApp</h3>

            <p className="text-[#6F4E37] mt-2">
              Order or ask anything instantly.
            </p>

            <a
              href="https://wa.me/919483151437"
              target="_blank"
              className="inline-block mt-4 bg-[#C4622D] text-white px-6 py-2 rounded-md hover:bg-[#552619] transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="p-8 bg-[#F4E6D5] border border-[#C6A77D] rounded-xl shadow-sm">
            <h3 className="text-xl font-serif text-[#3A1F16]">Phone</h3>

            <p className="text-[#6F4E37] mt-2 font-medium">
              +91 94831 51437
            </p>
          </div>

          <div className="p-8 bg-[#F4E6D5] border border-[#C6A77D] rounded-xl shadow-sm">
            <h3 className="text-xl font-serif text-[#3A1F16]">Email</h3>

            <p className="text-[#6F4E37] mt-2 font-medium">
              support@vanamrith.com
            </p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8 bg-[#F4E6D5] border border-[#C6A77D] rounded-xl shadow-sm">

          <h3 className="text-xl font-serif text-[#3A1F16] mb-6">
            Send us a message
          </h3>

          {!submitted ? (
            <>
              {error && (
                <p className="text-[#C4622D] text-sm mb-4">{error}</p>
              )}

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#E9DCCB] border border-[#C6A77D] rounded-md px-4 py-3 mb-4 text-[#3A1F16] focus:outline-none focus:ring-2 focus:ring-[#C4622D]"
              />

              {/* PHONE */}
              <input
                type="tel"
                placeholder="Phone Number *"
                value={phone}
                maxLength={10}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setPhone(value);
                }}
                className="w-full bg-[#E9DCCB] border border-[#C6A77D] rounded-md px-4 py-3 mb-4 text-[#3A1F16] focus:outline-none focus:ring-2 focus:ring-[#C4622D]"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email (Optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#E9DCCB] border border-[#C6A77D] rounded-md px-4 py-3 mb-4 text-[#3A1F16] focus:outline-none focus:ring-2 focus:ring-[#C4622D]"
              />

              {/* MESSAGE */}
              <textarea
                placeholder="Your Message *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#E9DCCB] border border-[#C6A77D] rounded-md px-4 py-3 h-32 text-[#3A1F16] focus:outline-none focus:ring-2 focus:ring-[#C4622D]"
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="mt-6 w-full bg-[#C4622D] text-white py-3 rounded-md font-medium hover:bg-[#552619] transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </>
          ) : (
            <div className="text-center text-[#C4622D] font-medium">
              ✅ Thank you! We will contact you soon.
            </div>
          )}

        </div>

      </div>

      {/* Map */}
      <div className="mt-20">
        <div className="w-full h-64 bg-[#F4E6D5] border border-[#C6A77D] rounded-xl flex items-center justify-center text-[#6F4E37]">
          Map coming soon
        </div>
      </div>

    </div>
  );
}