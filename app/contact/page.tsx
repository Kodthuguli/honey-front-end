"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !phone || !message) {
      setError("Please fill all required fields");
      return;
    }

    setError("");
    setLoading(true);

    // Later this will call backend API

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");

      // Hide success message after 4 sec
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-[#2c3e1f]">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mt-2 mb-12">
        Have a question or want to order? We’re here to help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* WhatsApp */}
          <div className="p-6 bg-[#fdfbf7] border rounded-xl shadow">
            <h3 className="text-xl font-semibold text-[#2c3e1f]">WhatsApp</h3>
            <p className="text-gray-600 mt-1">Order or ask anything</p>
            <a
              href="https://wa.me/919483151437"
              target="_blank"
              className="inline-block mt-3 bg-[#88b04b] text-white px-5 py-2 rounded-lg hover:bg-[#76963f] transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 bg-[#fdfbf7] border rounded-xl shadow">
            <h3 className="text-xl font-semibold text-[#2c3e1f]">Phone</h3>
            <p className="text-gray-700 mt-1 font-medium">+91 94831 51437</p>
          </div>

          {/* Email */}
          <div className="p-6 bg-[#fdfbf7] border rounded-xl shadow">
            <h3 className="text-xl font-semibold text-[#2c3e1f]">Email</h3>
            <p className="text-gray-700 mt-1 font-medium">
              support@yourbrand.com
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-6 bg-[#fdfbf7] border rounded-xl shadow">
          <h3 className="text-xl font-semibold text-[#2c3e1f] mb-4">
            Send us a message
          </h3>

          {!submitted ? (
            <>
              {error && (
                <p className="text-red-600 text-sm mb-2">{error}</p>
              )}

              <input
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg p-3 mb-4"
              />

              <input
                type="text"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg p-3 mb-4"
              />

              <input
                type="email"
                placeholder="Email (Optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg p-3 mb-4"
              />

              <textarea
                placeholder="Your Message *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-lg p-3 h-32"
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="mt-4 w-full bg-[#88b04b] text-white py-3 rounded-lg font-medium hover:bg-[#76963f] transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </>
          ) : (
            <div className="text-center text-green-600 font-medium">
              ✅ Thank you! We will contact you soon.
            </div>
          )}
        </div>
      </div>

      {/* MAP */}
      <div className="mt-16">
        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-600">
          Map coming soon
        </div>
      </div>
    </div>
  );
}
