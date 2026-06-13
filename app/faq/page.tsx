/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Image from "next/image";
import { toast } from "sonner";

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

  useEffect(() => {
    fetchFaqs();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = async () => {
    if (!question.trim()) {
      return toast.error("Please enter your question");
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
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden">

      {/* LEFT FLOWERS */}
     {/* <Image

src="/patterns/leaves-left.svg"

alt=""

width={180}

height={180}

className="
hidden lg:block
absolute
left-0
top-[180px]
opacity-[0.12]
pointer-events-none
"

/> */}

      {/* RIGHT HONEYCOMB */}
      {/* <Image

src="/patterns/honeycomb.svg"

alt=""

width={180}

height={180}

className="
hidden lg:block
absolute
right-0
top-[120px]
opacity-[0.10]
pointer-events-none
"

/> */}

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 pt-10 md:pt-14">

          <div
            className="
              grid
              grid-cols-[52%_48%]
              lg:grid-cols-2
              gap-5
              lg:gap-12
              items-center
            "
          >

            {/* LEFT */}
            <div>

              <p
                className="
                  uppercase
                  tracking-[3px]
                  md:tracking-[4px]
                  text-[#D8891C]
                  text-[10px]
                  md:text-sm
                  font-semibold
                "
              >
                ✿ Pure Honey. Pure Trust.
              </p>

              <h1
                className="
                  mt-4 md:mt-6
                  font-serif
                  leading-[1]
                  text-[52px]
                  sm:text-[72px]
                  md:text-[95px]
                  lg:text-[110px]
                  text-[#2E1B12]
                "
              >
                Frequently
                <br />
                Asked Questions
              </h1>

              {/* Divider */}
              <div className="flex items-center gap-3 md:gap-4 mt-5 md:mt-6">
                <div className="w-10 md:w-20 h-[1px] bg-[#D7B98E]" />
                <div className="text-[#D8891C] text-xs md:text-base">
                  ✿
                </div>
                <div className="w-10 md:w-20 h-[1px] bg-[#D7B98E]" />
              </div>

              <p
                className="
                  mt-6 md:mt-8
                  text-[#5F4637]
                  text-[14px]
                  sm:text-[16px]
                  md:text-lg
                  leading-[2]
                  max-w-xl
                "
              >
                Everything you need to know about our honey,
                sourcing, purity, and delivery.
              </p>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

              {/* Bee */}
             {/* <Image

src="/bee.png"

alt=""

width={40}

height={40}

className="
absolute
top-2 md:top-8
left-2 md:left-10
w-5 md:w-10
animate-float
z-20
"

/> */}

              {/* Product */}
              <div
className="
relative
w-full
max-w-[250px]
sm:max-w-[360px]
md:max-w-[520px]
lg:max-w-[650px]
h-[300px]
md:h-[560px]
"
>


<Image

src="/about-hero.png"

alt="Vanamrith honey FAQ"

fill

priority

sizes="
(max-width:768px) 48vw,
50vw
"

className="
object-contain
"

/>


</div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ LIST */}
      <section className="relative pb-10 md:pb-16">

        <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-10">

          <div className="mt-6 md:mt-10 space-y-4">

            {loadingFaqs ? (
              <div className="text-center py-10 text-[#6F4E37]">
                Loading FAQs...
              </div>
            ) : faqs.length === 0 ? (
              <div className="text-center py-10 text-[#6F4E37]">
                No FAQs available right now.
              </div>
            ) : (
              faqs.map((faq, index) => (
                <div
                  key={faq._id}
                  className="
                    bg-[#FBF7F1]
                    border
                    border-[#E7D7BD]
                    rounded-[18px]
                    overflow-hidden
                    shadow-[0_4px_12px_rgba(0,0,0,0.03)]
                  "
                >

                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-5
                      px-5 md:px-8
                      py-5
                      text-left
                    "
                  >

                    <div
                      className="
                        flex
                        items-start
                        gap-3
                        text-[#2E1B12]
                        font-medium
                        text-[15px]
                        md:text-[18px]
                      "
                    >
                      <span>{index + 1}.</span>

                      <span>{faq.question}</span>
                    </div>

                    <span
                      className="
                        text-[#D8891C]
                        text-3xl
                        leading-none
                        shrink-0
                      "
                    >
                      {openIndex === index ? "−" : "+"}
                    </span>

                  </button>

                  {/* ANSWER */}
                  {openIndex === index && (
                    <div className="px-5 md:px-8 pb-6">

                      <div
                        className="
                          bg-[#F8F2E9]
                          rounded-[14px]
                          px-5 md:px-7
                          py-5
                          text-[#5F4637]
                          text-[14px]
                          md:text-[17px]
                          leading-[2]
                        "
                      >
                        {faq.answer || "Pending response..."}
                      </div>

                    </div>
                  )}

                </div>
              ))
            )}

          </div>

        </div>

      </section>

      {/* ASK QUESTION */}
      <section className="pb-14 md:pb-20">

        <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-10">

          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border border-[#E7D7BD]
              bg-gradient-to-br
              from-[#F8F2E7]
              to-[#F2E5D2]
              p-5
              md:p-10
            "
          >

            {/* Decorative Leaves */}
           {/* <Image

src="/patterns/leaves-right.svg"

alt=""

width={180}

height={180}

className="
hidden lg:block
absolute
top-0
right-0
opacity-[0.12]
"

/> */}

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-[230px_1fr]
                gap-8
                items-end
              "
            >

              {/* LEFT IMAGE */}
              <div className="flex items-end justify-center md:justify-start">

                <Image

src="/doubt.png"

alt="Ask Vanamrith question"

width={220}

height={220}

className="
w-[180px]
md:w-[220px]
object-contain
"

/>

              </div>

              {/* FORM */}
              <div>

                <h2
                  className="
                    font-serif
                    text-[36px]
                    md:text-[52px]
                    leading-none
                    text-[#2E1B12]
                  "
                >
                  Still have a question?
                </h2>

                <p
                  className="
                    mt-3
                    text-[#5F4637]
                    text-[16px]
                    md:text-[20px]
                  "
                >
                  Ask us anything — we’ll reply soon!
                </p>

                {!submitted ? (
                  <div className="mt-6 space-y-4">

                    <input
                      type="text"
                      placeholder="Your name (optional)"
                      value={askedBy}
                      onChange={(e) => setAskedBy(e.target.value)}
                      className="
                        w-full
                        h-[54px]
                        px-5
                        rounded-[10px]
                        border border-[#D9C6A8]
                        bg-[#FFFDF9]
                        text-[#3A1F16]
                        outline-none
                        focus:border-[#D8891C]
                      "
                    />

                    <textarea
                      placeholder="Type your question here..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="
                        w-full
                        h-[140px]
                        px-5
                        py-4
                        rounded-[10px]
                        border border-[#D9C6A8]
                        bg-[#FFFDF9]
                        text-[#3A1F16]
                        outline-none
                        resize-none
                        focus:border-[#D8891C]
                      "
                    />

                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className="
                        w-full
                        h-[54px]
                        rounded-[10px]
                        bg-gradient-to-r
                        from-[#C96E2A]
                        to-[#D9782E]
                        text-white
                        font-semibold
                        text-[16px]
                        hover:opacity-95
                        transition
                      "
                    >
                      {submitting
                        ? "Submitting..."
                        : "Submit Question"}
                    </button>

                  </div>
                ) : (
                  <div className="mt-8 text-[#C96E2A] font-medium">
                    ✅ Thank you! Your question has been submitted.
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}