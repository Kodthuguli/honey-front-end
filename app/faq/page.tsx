/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Image from "next/image";
import { toast } from "sonner";
import { ShieldCheck, Leaf, Heart } from "lucide-react";

// Small icons per FAQ index — cycles through 4 variants
const faqIcons = ["🐝", "👶", "🍯", "🌿", "🔬", "📦", "✨", "💧"];

export default function FAQPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [question, setQuestion] = useState("");
  const [askedBy, setAskedBy] = useState("");
  const [loadingFaqs, setLoadingFaqs] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fetchFaqs = async () => {
    try {
      setLoadingFaqs(true);
      const res = await api.get("/faqs");
      setFaqs(Array.isArray(res.data) ? res.data : []);
    } catch {
      setFaqs([]);
    } finally {
      setLoadingFaqs(false);
    }
  };

  useEffect(() => { fetchFaqs(); }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = async () => {
    if (!question.trim()) return toast.error("Please enter your question");
    try {
      setSubmitting(true);
      await api.post("/faqs/ask", { question, askedBy });
      setSubmitted(true);
      setQuestion("");
      setAskedBy("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="text-[#2E1B12] font-sans antialiased overflow-hidden">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-[#EDD9BE]">

        {/* full-bleed background */}
        <Image
          src="/faq-hero.png"
          alt=""
          fill priority
          className="object-cover object-center"
        />
        {/* strong left overlay so text pops; right stays visible for product */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#FBF5E4]/98 via-[#FBF5E4]/80 to-[#FBF5E4]/10" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FBF5EC] to-transparent" /> */}

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 pt-10 md:pt-14">
          <div className="grid grid-cols-[54%_46%] md:grid-cols-2 gap-4 md:gap-10 items-end">

            {/* LEFT — text */}
            <div className="pb-10 md:pb-16">

              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="text-[#D8891C]">✿</span>
                <p className="uppercase tracking-[4px] text-[#D8891C] text-[10px] md:text-[12px] font-semibold">
                  Pure Honey. Pure Trust.
                </p>
              </div>

              {/* giant FAQ */}
              <h1 className="font-serif leading-[0.86] tracking-[-2px] text-[#2E1B12]
                text-[96px] sm:text-[140px] md:text-[180px] lg:text-[220px]">
                FAQ
              </h1>

              <div className="mt-3 md:mt-5">
                <p className="uppercase tracking-[3px] text-[#2E1B12] text-[11px] md:text-[13px] font-semibold">
                  Find Answers to Your
                </p>
                <p className="uppercase tracking-[2px] text-[#D8891C] text-[15px] md:text-[22px] font-bold font-serif mt-1">
                  Questions
                </p>
              </div>

              <div className="flex items-center gap-3 mt-4 md:mt-5">
                <div className="w-10 md:w-14 h-px bg-[#D7B98E]" />
                <span className="text-[#D8891C] text-sm">✿</span>
                <div className="w-10 md:w-14 h-px bg-[#D7B98E]" />
              </div>

              <p className="mt-4 text-[#5F4637] text-[12px] sm:text-[13px] md:text-[15px] leading-[1.85] max-w-[340px]">
                Everything you want to know about Vanamrith Honey, our process, and how we bring nature's purity to you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ SECTION LABEL
      ══════════════════════════════════════ */}
      <div className="text-center py-8 md:py-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 md:w-20 h-px bg-[#D7B98E]" />
          <h2 className="font-serif text-[20px] md:text-[26px] uppercase tracking-[3px]">
            Frequently Asked Questions
          </h2>
          <div className="w-12 md:w-20 h-px bg-[#D7B98E]" />
        </div>
        <span className="text-[#D8891C] text-lg">✿</span>
        <p className="mt-3 text-[#6F4E37] text-[13px] md:text-[15px] leading-[1.8]">
          Find clear answers to the most common questions about our honey,<br className="hidden sm:block" />
          our process, and everything in between.
        </p>
      </div>

      {/* ══════════════════════════════════════
          FAQ ACCORDION
      ══════════════════════════════════════ */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-[860px] mx-auto px-5 md:px-8">

          {loadingFaqs ? (
            <div className="text-center py-6 text-[#6F4E37] text-[15px]">Loading FAQs…</div>
          ) : faqs.length === 0 ? (
            <div className="text-center py-6 text-[#6F4E37] text-[15px]">No FAQs available right now.</div>
          ) : (
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq._id}
                    className={`rounded-[16px] border transition-all duration-200 overflow-hidden
                      ${isOpen
                        ? "border-[#D8891C] shadow-[0_4px_20px_rgba(216,137,28,0.12)]"
                        : "border-[#E7D7BD] shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                      } bg-[#FFFDF9]`}
                  >
                    {/* question row */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center gap-4 px-4 md:px-6 py-4 md:py-5 text-left"
                    >
                      {/* icon circle */}
                      <div className={`shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full border flex items-center justify-center text-[18px] transition-colors
                        ${isOpen ? "border-[#D8891C] bg-[#FFF3DC]" : "border-[#E7D7BD] bg-[#FBF7F1]"}`}>
                        {faqIcons[index % faqIcons.length]}
                      </div>

                      {/* question text */}
                      <span className="flex-1 text-[#2E1B12] font-medium text-[14px] md:text-[17px] leading-[1.5]">
                        {index + 1}. {faq.question}
                      </span>

                      {/* toggle */}
                      <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-[20px] font-light transition-colors
                        ${isOpen ? "border-[#D8891C] bg-[#D8891C] text-white" : "border-[#E7D7BD] bg-transparent text-[#D8891C]"}`}>
                        {isOpen ? "−" : "+"}
                      </div>
                    </button>

                    {/* answer */}
                    {isOpen && (
                      <div className="px-4 md:px-6 pb-5">
                        <div className="ml-[56px] md:ml-[60px] bg-[#F8F2E9] rounded-[12px] px-5 py-4 text-[#5F4637] text-[13px] md:text-[16px] leading-[1.9]">
                          {faq.answer || "Pending response…"}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM — ASK A QUESTION
      ══════════════════════════════════════ */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-10">
          <div className="relative rounded-[24px] md:rounded-[32px] border border-[#E7D7BD] bg-gradient-to-br from-[#F8F2E7] to-[#F0E0C8] overflow-hidden">

            {/* honey image right */}
            <div className="absolute right-0 bottom-0 w-[180px] md:w-[260px] h-full pointer-events-none select-none">
              <Image src="/doubt.png" alt="" fill className="object-contain object-right-bottom" />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start px-7 md:px-12 py-10 md:py-12">

              {/* LEFT — form */}
              <div className="max-w-[520px]">
                <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1] text-[#2E1B12] uppercase">
                  Still Have <span className="text-[#D8891C]">Questions?</span>
                </h2>
                <div className="flex items-center gap-2 mt-3 mb-2">
                  <div className="w-8 h-px bg-[#D7B98E]" />
                  <span className="text-[#D8891C] text-sm">✿</span>
                </div>
                <p className="text-[#5F4637] text-[13px] md:text-[15px] leading-[1.8] mb-6">
                  Ask us anything — we'll reply soon!
                </p>

                {!submitted ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your name (optional)"
                      value={askedBy}
                      onChange={(e) => setAskedBy(e.target.value)}
                      className="w-full h-[50px] px-4 rounded-[10px] border border-[#D9C6A8] bg-[#FFFDF9] text-[#3A1F16] text-[14px] outline-none focus:border-[#D8891C] transition-colors"
                    />
                    <textarea
                      placeholder="Type your question here..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="w-full h-[120px] md:h-[140px] px-4 py-3 rounded-[10px] border border-[#D9C6A8] bg-[#FFFDF9] text-[#3A1F16] text-[14px] outline-none resize-none focus:border-[#D8891C] transition-colors"
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="w-full h-[50px] rounded-[10px] bg-[#2C1400] hover:bg-[#D8891C] text-white font-semibold text-[14px] uppercase tracking-widest transition-colors duration-200 disabled:opacity-50"
                    >
                      {submitting ? "Submitting…" : "Submit Question"}
                    </button>
                  </div>
                ) : (
                  <div className="py-6 text-center">
                    <div className="text-[36px] mb-2">✅</div>
                    <p className="text-[#D8891C] font-semibold text-[15px]">Thank you!</p>
                    <p className="text-[#6F4E37] text-[13px] mt-1">Your question has been submitted.</p>
                  </div>
                )}
              </div>

              {/* RIGHT — 3 trust points */}
              <div className="flex flex-col gap-5 md:pr-[200px] lg:pr-[240px]">
                {[
                  { icon: <ShieldCheck size={20} />, title: "Trusted Quality", sub: "Purity you can rely on" },
                  { icon: <Leaf size={20} />,        title: "Pure & Natural",   sub: "Always unprocessed" },
                  { icon: <Heart size={20} />,       title: "Made With Care",   sub: "From our forest to your home" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#E7D7BD] bg-[#FFFDF9] flex items-center justify-center text-[#D8891C] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-[13px] md:text-[14px] text-[#2E1B12]">{item.title}</p>
                      <p className="text-[#6F4E37] text-[11px] md:text-[12px]">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}