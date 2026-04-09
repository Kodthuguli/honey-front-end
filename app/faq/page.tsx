/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function FAQPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  useEffect(() => {
    fetchFaqs();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = async () => {
    if (!question.trim()) {
      return alert("Please enter your question");
    }

    try {
      setSubmitting(true);

      await api.post("/faqs/ask", {
        question,
        askedBy,
      });

      setSubmitted(true);
      setQuestion("");
      setAskedBy("");
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">

      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#3A1F16]">
          Frequently Asked Questions
        </h1>

        <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />

        <p className="mt-4 text-[#6F4E37] max-w-2xl mx-auto">
          Everything you need to know about our natural products.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="mt-14 space-y-5">
        {loadingFaqs ? (
          <p className="text-center text-[#6F4E37]">Loading FAQs...</p>
        ) : faqs.length === 0 ? (
          <p className="text-center text-[#6F4E37]">
            No FAQs available right now.
          </p>
        ) : (
          faqs.map((faq, index) => (
            <div
              key={faq._id}
              className="bg-[#F4E6D5] border border-[#C6A77D] rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full text-left px-6 py-4
                  font-medium text-[#3A1F16]
                  flex justify-between items-center
                "
              >
                {faq.question}
                <span className="text-[#C4622D] text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-[#6F4E37] leading-relaxed">
                  {faq.answer || "Pending response..."}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* ASK QUESTION */}
      <div className="mt-20 p-8 bg-[#F4E6D5] border border-[#C6A77D] rounded-xl shadow-sm">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-[#3A1F16]">
            Still have a question?
          </h2>

          <div className="mt-3 mx-auto h-[1px] w-20 bg-[#C6A77D]" />

          <p className="mt-4 text-[#6F4E37]">
            Ask us anything — we’ll reply soon!
          </p>
        </div>

        {!submitted ? (
          <div className="mt-8 space-y-5">

            <input
              type="text"
              placeholder="Your name (optional)"
              value={askedBy}
              onChange={(e) => setAskedBy(e.target.value)}
              className="
                w-full
                bg-[#E9DCCB]
                border border-[#C6A77D]
                rounded-md
                px-4 py-3
                text-[#3A1F16]
                focus:outline-none
                focus:ring-2 focus:ring-[#C4622D]
              "
            />

            <textarea
              placeholder="Type your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="
                w-full
                bg-[#E9DCCB]
                border border-[#C6A77D]
                rounded-md
                px-4 py-3
                text-[#3A1F16]
                h-28
                focus:outline-none
                focus:ring-2 focus:ring-[#C4622D]
              "
            />

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="
                w-full
                bg-[#C4622D]
                text-white
                py-3
                rounded-md
                font-medium
                hover:bg-[#552619]
                transition
              "
            >
              {submitting ? "Submitting..." : "Submit Question"}
            </button>

          </div>
        ) : (
          <div className="text-center text-[#C4622D] font-medium mt-8">
            ✅ Thank you! Your question has been submitted.
          </div>
        )}
      </div>

    </div>
  );
}