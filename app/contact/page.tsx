/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock3, Send, Headphones, ShieldCheck, Heart } from "lucide-react";

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
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await api.post("/contact", { name, phone, email, message });
      setSubmitted(true);
      setName(""); setPhone(""); setEmail(""); setMessage("");
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactData = [
    {
      icon: <MapPin size={22} />,
      title: "Address",
      desc: (
        <>
          Vanamrith, Kodthuguli, Pailar Post,<br />
          Amaramudnooru village, Sullia Taluk,<br />
          Karnataka – 574248, India
        </>
      ),
    },
    {
      icon: <Mail size={22} />,
      title: "Email",
      desc: (
        <>
          support@vanamrith.com<br />
          vanamrithinfo@gmail.com
        </>
      ),
    },
    {
      icon: <Phone size={22} />,
      title: "Phone",
      desc: (
        <>
          +91 8296054891<br />
          Mon – Sat : 9:00 AM – 6:00 PM
        </>
      ),
    },
    {
      icon: <Clock3 size={22} />,
      title: "Business Hours",
      desc: (
        <>
          Monday – Saturday<br />
          9:00 AM – 6:00 PM IST
        </>
      ),
    },
  ];

  const inputClass = `
    w-full h-[54px] rounded-[12px]
    border border-[#E2D0BA] bg-[#FFFDF9]
    px-4 text-[14px] text-[#24130D]
    placeholder:text-[#B89A7A]
    outline-none focus:border-[#D06F1D]
    transition-colors duration-200
  `;

  return (
    <div className="text-[#24130D] font-sans antialiased overflow-hidden">

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="relative pb-0 border-b border-[#EDD9BE] overflow-hidden min-h-[55vh] md:min-h-[42vh] flex flex-col">

        {/* full-bleed background */}
        <Image
          src="/faq-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-[center_30%]"
        />
       
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-5 md:px-8 lg:px-10 pt-8 md:pt-10 pb-10 md:pb-14 text-center">

          {/* eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#D8891C]" />
            <span className="text-[#D06F1D] uppercase tracking-[4px] text-[10px] md:text-[11px] font-semibold">Get In Touch</span>
            <div className="w-10 h-px bg-[#D8891C]" />
          </div>

          {/* headline */}
          <h1 className="font-serif leading-[1.0] tracking-[-1px] text-[52px] sm:text-[72px] md:text-[96px] lg:text-[112px]">
            Contact <span className="text-[#D06F1D]">Us</span>
          </h1>

          {/* ornament */}
          <div className="flex items-center justify-center gap-3 mt-4 mb-5">
            <div className="w-16 h-px bg-[#E0A15C]" />
            <span className="text-[#D06F1D] text-lg">✿</span>
            <div className="w-16 h-px bg-[#E0A15C]" />
          </div>

          <p className="text-[#4E3A30] text-[15px] md:text-[17px] leading-[1.85] max-w-[500px] mx-auto">
            Whether you have a question about our honey, our process, or need any assistance — our team is here to help.
          </p>



        </div>
      </section>

      {/* ══════════════════════════════════
          GET IN TOUCH LABEL
      ══════════════════════════════════ */}
      <div className="text-center py-10 md:py-14">
        <h2 className="font-serif text-[28px] md:text-[36px]">Get In Touch</h2>
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="w-12 h-px bg-[#E0A15C]" />
          <span className="text-[#D06F1D]">✿</span>
          <div className="w-12 h-px bg-[#E0A15C]" />
        </div>
        <p className="mt-3 text-[#6F4E37] text-[14px] md:text-[15px]">
          Fill out the form or use the contact details below.<br className="hidden sm:block" /> We'll get back to you as soon as possible.
        </p>
      </div>

      {/* ══════════════════════════════════
          FORM + CONTACT INFO
      ══════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-10 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 md:gap-8 items-start">

          {/* ── FORM ── */}
          <div className="bg-[#FFFDF9] border border-[#E2D0BA] rounded-[24px] p-6 md:p-8 lg:p-10">

            <h3 className="font-serif text-[26px] md:text-[32px] mb-1">Send Us a Message</h3>
            <p className="text-[#6F4E37] text-[14px] mb-7">We'll get back to you within 24 hours.</p>

            {error && (
              <p className="mb-5 text-[#D06F1D] text-[13px] bg-[#FFF3E0] border border-[#F5C97A] rounded-[10px] px-4 py-3">
                {error}
              </p>
            )}

            {!submitted ? (
              <>
                {/* row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#6F4E37] mb-2">
                      <span className="text-[#D06F1D]">✦</span> Your Name <span className="text-[#D06F1D]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#6F4E37] mb-2">
                      <span className="text-[#D06F1D]">✦</span> Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* row 2 */}
                <div className="mb-4">
                  <label className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#6F4E37] mb-2">
                    <span className="text-[#D06F1D]">✦</span> Phone Number <span className="text-[#D06F1D]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    maxLength={10}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    className={inputClass}
                  />
                </div>

                {/* message */}
                <div className="mb-7">
                  <label className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#6F4E37] mb-2">
                    <span className="text-[#D06F1D]">✦</span> Message <span className="text-[#D06F1D]">*</span>
                  </label>
                  <textarea
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClass} h-[160px] md:h-[190px] py-4 resize-none`}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="
                    w-full sm:w-auto min-w-[220px]
                    h-[54px] px-8
                    rounded-[12px]
                    bg-[#2C1400] hover:bg-[#D06F1D]
                    text-white font-semibold text-[15px]
                    flex items-center justify-center gap-2.5
                    transition-colors duration-200
                    disabled:opacity-50
                  "
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <Send size={16} />}
                </button>
              </>
            ) : (
              <div className="py-10 text-center">
                <div className="text-[40px] mb-3">✅</div>
                <p className="text-[#D06F1D] text-[17px] font-semibold">Thank you!</p>
                <p className="text-[#6F4E37] text-[14px] mt-1">We'll get back to you soon.</p>
              </div>
            )}
          </div>

          {/* ── CONTACT INFO ── */}
          <div className="flex flex-col gap-5">

            {/* info card */}
            <div className="bg-[#FFFDF9] border border-[#E2D0BA] rounded-[24px] overflow-hidden">
              <div className="px-6 py-5 border-b border-[#E2D0BA]">
                <h3 className="font-serif text-[20px] md:text-[22px]">Contact Information</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-8 h-px bg-[#E0A15C]" />
                  <span className="text-[#D06F1D] text-sm">✿</span>
                  <div className="w-8 h-px bg-[#E0A15C]" />
                </div>
              </div>

              {contactData.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-6 py-5 ${i !== contactData.length - 1 ? "border-b border-[#E2D0BA]" : ""}`}
                >
                  <div className="w-10 h-10 rounded-full border border-[#E2D0BA] bg-[#FFF8EE] flex items-center justify-center text-[#D06F1D] shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-[13px] text-[#24130D] mb-0.5">{item.title}</p>
                    <div className="text-[#4E3A30] text-[13px] leading-[1.75]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* trust note */}
            <div className="bg-[#FFF8EE] border border-[#E2D0BA] rounded-[18px] px-6 py-5">
              <p className="text-[#D06F1D] font-semibold text-[13px] uppercase tracking-widest mb-2">We Value Your Trust</p>
              <p className="text-[#4E3A30] text-[13px] leading-[1.8]">
                Your thoughts help us improve and bring you the purest honey possible. We respond to all inquiries within 24 hours.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BOTTOM TRUST STRIP
      ══════════════════════════════════ */}
      <section className="border-t border-[#EDD9BE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Headphones size={26} />, title: "Responsive Support", desc: "We're here to assist you promptly." },
              { icon: <ShieldCheck size={26} />, title: "Pure Commitment", desc: "Committed to quality in every response." },
              { icon: <Heart size={26} />, title: "Thank You", desc: "Thank you for being a part of our journey." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full border border-[#E2D0BA] bg-[#FFF8EE] flex items-center justify-center text-[#D06F1D]">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-[14px] uppercase tracking-widest text-[#24130D]">{item.title}</p>
                  <p className="text-[#6F4E37] text-[13px] mt-1 leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TAGLINE FOOTER STRIP
      ══════════════════════════════════ */}
      <div className="border-t border-[#EDD9BE] py-6 text-center">
        <p className="font-serif text-[#D06F1D] text-[14px] md:text-[16px] uppercase tracking-[4px]">
          Pure by Nature, Connected by Care
        </p>
      </div>

    </div>
  );
}