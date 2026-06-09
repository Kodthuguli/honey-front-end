"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ananya Sharma",
    text: "VANAMRITH honey is truly the purest I have ever tasted. You can feel the difference in every drop!",
  },
  {
    name: "Rahul Verma",
    text: "We love how natural and unprocessed it is. Perfect for our family’s everyday wellness.",
  },
  {
    name: "Priya Nair",
    text: "From taste to quality, everything about VANAMRITH honey is exceptional. Highly recommended!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const visibleDesktop = 3;
  const visibleMobile = 1;

  const desktopSlides = Math.ceil(
    testimonials.length / visibleDesktop
  );

  const mobileSlides = Math.ceil(
    testimonials.length / visibleMobile
  );

  useEffect(() => {
    const isDesktopScrollable =
      typeof window !== "undefined" &&
      window.innerWidth >= 1024 &&
      testimonials.length > 3;

    const isMobileScrollable =
      typeof window !== "undefined" &&
      window.innerWidth < 1024 &&
      testimonials.length > 1;

    if (!isDesktopScrollable && !isMobileScrollable) return;

    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (window.innerWidth >= 1024) {
          return prev === desktopSlides - 1 ? 0 : prev + 1;
        }

        return prev === mobileSlides - 1 ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [desktopSlides, mobileSlides]);

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* SIDE DECOR */}
      <div className="absolute left-0 top-[220px] hidden lg:block opacity-20">
        <img src="/flower-left.png" alt="" className="w-[130px]" />
      </div>

      <div className="absolute right-0 bottom-[180px] hidden lg:block opacity-20">
        <img src="/hex-right.png" alt="" className="w-[170px]" />
      </div>

      {/* MOBILE DECOR */}
      <div className="absolute left-0 top-[240px] lg:hidden opacity-20">
        <img src="/flower-left.png" alt="" className="w-[80px]" />
      </div>

      <div className="absolute right-0 top-[120px] lg:hidden">
        <img
          src="/honeycomb-top.png"
          alt=""
          className="w-[110px] opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* LABEL */}
          <div className="flex items-center justify-center gap-3 lg:gap-4 mb-5">
            <div className="w-10 lg:w-16 h-[1px] bg-[#D89A20]" />

            <span
              className="
                uppercase
                tracking-[3px]
                text-[#D89A20]
                text-[11px]
                lg:text-[15px]
                font-semibold
              "
            >
              What Our Customers Say
            </span>

            <div className="w-10 lg:w-16 h-[1px] bg-[#D89A20]" />
          </div>

          {/* TITLE */}
          <h2 className="font-serif leading-[0.95] tracking-[-1px]">
            <span
              className="
                block
                lg:inline
                text-[#2B140A]
                text-[52px]
                sm:text-[68px]
                lg:text-[92px]
              "
            >
              Pure Words,{" "}
            </span>

            <span
              className="
                block
                lg:inline
                text-[#D18A12]
                text-[58px]
                sm:text-[74px]
                lg:text-[100px]
              "
            >
              Real Stories
            </span>
          </h2>

          {/* DIVIDER */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="w-14 lg:w-24 h-[1px] bg-[#D9A441]" />

            <div className="w-2 h-2 rounded-full bg-[#D9A441]" />

            <div className="w-14 lg:w-24 h-[1px] bg-[#D9A441]" />
          </div>

          {/* SUBTEXT */}
          <p
            className="
              mt-6
              text-[#4F3B2E]
              text-[18px]
              lg:text-[22px]
              leading-8
              lg:leading-9
              max-w-[760px]
              mx-auto
            "
          >
            Trusted by thousands of families who believe in nature,
            purity and the power of honey.
          </p>
        </motion.div>

        {/* MOBILE */}
        <div className="lg:hidden mt-12 overflow-hidden">
          <motion.div
            animate={{
              x: `-${current * 100}%`,
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="flex"
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="min-w-full px-[2px]"
              >
                <div
                  className="
                    relative
                    rounded-[28px]
                    border
                    border-[#F0DFCB]
                    bg-white/50
                    backdrop-blur-[4px]
                    px-7
                    py-8
                    overflow-hidden
                    min-h-[300px]
                  "
                >
                  {/* QUOTE */}
                  <div
                    className="
                      text-[#E29A10]
                      text-[82px]
                      font-serif
                      leading-none
                      h-[55px]
                    "
                  >
                    “
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      mt-2
                      text-[#2F2118]
                      text-[18px]
                      leading-[2]
                    "
                  >
                    {item.text}
                  </p>

                  {/* NAME */}
                  <div className="mt-6">
                    <h4
                      className="
                        text-[#2B140A]
                        font-semibold
                        text-[18px]
                      "
                    >
                      — {item.name}
                    </h4>
                  </div>

                  {/* DECOR */}
                  <div className="flex items-center gap-3 mt-8">
                    <div className="w-10 h-[1px] bg-[#D9A441]" />

                    <div className="w-2 h-2 rounded-full bg-[#D9A441]" />

                    <div className="w-10 h-[1px] bg-[#D9A441]" />
                  </div>

                  {/* FLOWER */}
                  <div className="absolute right-0 bottom-0 opacity-20">
                    <img
                      src="/flower-corner.png"
                      alt=""
                      className="w-[100px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* DOTS */}
          {mobileSlides > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              {Array.from({ length: mobileSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`
                    w-4 h-4 rounded-full transition
                    ${
                      current === i
                        ? "bg-[#D18A12]"
                        : "bg-[#EBD8B7]"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block mt-16 overflow-hidden">
          <motion.div
            animate={{
              x: `-${current * 100}%`,
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="flex"
          >
            {Array.from({
              length: desktopSlides,
            }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full"
              >
                <div className="grid grid-cols-3 gap-8">
                  {testimonials
                    .slice(
                      slideIndex * visibleDesktop,
                      slideIndex * visibleDesktop +
                        visibleDesktop
                    )
                    .map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          y: 25,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: i * 0.1,
                          duration: 0.6,
                        }}
                        viewport={{ once: true }}
                        className="
                          relative
                          rounded-[28px]
                          border
                          border-[#F0DFCB]
                          bg-white/35
                          backdrop-blur-[4px]
                          px-9
                          py-9
                          min-h-[420px]
                          overflow-hidden
                        "
                      >
                        {/* QUOTE */}
                        <div
                          className="
                            text-[#E29A10]
                            text-[92px]
                            font-serif
                            leading-none
                            h-[70px]
                          "
                        >
                          “
                        </div>

                        {/* LINE */}
                        <div className="w-12 h-[1px] bg-[#D9A441] mt-2" />

                        {/* TEXT */}
                        <p
                          className="
                            mt-8
                            text-[#2F2118]
                            text-[20px]
                            leading-[2]
                          "
                        >
                          {item.text}
                        </p>

                        {/* NAME */}
                        <div className="mt-8">
                          <h4
                            className="
                              text-[#2B140A]
                              font-semibold
                              text-[20px]
                            "
                          >
                            — {item.name}
                          </h4>
                        </div>

                        {/* BOTTOM DECOR */}
                        <div className="flex items-center gap-3 absolute left-9 bottom-9">
                          <div className="w-10 h-[1px] bg-[#D9A441]" />

                          <div className="w-2 h-2 rounded-full bg-[#D9A441]" />

                          <div className="w-10 h-[1px] bg-[#D9A441]" />
                        </div>

                        {/* FLOWER */}
                        <div className="absolute right-0 bottom-0 opacity-20">
                          <img
                            src="/flower-corner.png"
                            alt=""
                            className="w-[140px]"
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* DOTS */}
          {desktopSlides > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              {Array.from({
                length: desktopSlides,
              }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`
                    w-4 h-4 rounded-full transition
                    ${
                      current === i
                        ? "bg-[#D18A12]"
                        : "bg-[#EBD8B7]"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}