"use client";

import { useState } from "react";
import axios from "axios";

export default function FAQPage() {
  const faqs = [
    {
      question: "Is your honey 100% pure?",
      answer:
        "Yes! Our honey is raw, unfiltered, chemical-free, and sourced directly from natural habitats.",
    },
    {
      question: "Do you add sugar or preservatives?",
      answer:
        "No. We do not add sugar, preservatives, or any artificial ingredients.",
    },
    {
      question: "Can children consume this honey?",
      answer:
        "Yes, but avoid giving honey to infants below 1 year as a safety guideline.",
    },
    {
      question: "Do your products expire?",
      answer:
        "Honey has a naturally long shelf life. Store in a cool, dry place away from sunlight.",
    },
    {
      question: "Is delivery available?",
      answer:
        "Yes, we deliver across India via courier/parcel services.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [question, setQuestion] = useState("");
  const [askedBy, setAskedBy] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = async () => {
    if (!question.trim()) return alert("Please enter your question");

    try {
      setLoading(true);

      await axios.post("http://localhost:3001/api/v1/faqs/ask", {
        question,
        askedBy,
      });

      setSubmitted(true);
      setQuestion("");
      setAskedBy("");
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-[#2c3e1f]">
        Frequently Asked Questions
      </h1>

      <p className="text-center text-gray-600 mt-2 mb-10">
        Everything you need to know about our natural products.
      </p>

      {/* FAQ LIST */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg bg-[#fdfbf7] shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-5 py-4 font-medium text-[#2c3e1f] flex justify-between"
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ASK QUESTION FORM */}
      <div className="mt-16 p-6 bg-[#fdfbf7] border rounded-xl shadow">
        <h2 className="text-2xl font-bold text-[#2c3e1f] text-center">
          Still have a question?
        </h2>
        <p className="text-center text-gray-600 mt-1 mb-6">
          Ask us anything — we’ll reply soon!
        </p>

        {!submitted ? (
          <>
            <input
              type="text"
              placeholder="Your name (optional)"
              value={askedBy}
              onChange={(e) => setAskedBy(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
            />

            <textarea
              placeholder="Type your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full border rounded-lg p-3 h-28"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-4 w-full bg-[#88b04b] text-white py-3 rounded-lg font-medium hover:bg-[#76963f] transition"
            >
              {loading ? "Submitting..." : "Submit Question"}
            </button>
          </>
        ) : (
          <div className="text-center text-green-600 font-medium">
            ✅ Thank you! Your question has been submitted.
          </div>
        )}
      </div>
    </div>
  );
}
