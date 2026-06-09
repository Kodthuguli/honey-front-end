"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  FlaskConical,
  Warehouse,
} from "lucide-react";

export default function Hero() {
  const sellerNumber = "91XXXXXXXXXX";

  const waText = encodeURIComponent(
    `Hi, I'm interested in your products. Please share more details.`
  );

  const waLink = `https://wa.me/${sellerNumber}?text=${waText}`;

  return (
    <section
      aria-label="Hero Section"
      className="relative overflow-hidden"
    >
      {/* HERO AREA */}
      <div
        className="
          relative
          min-h-[640px]
          lg:min-h-[980px]
          flex
          items-center
        "
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.png"
            alt="Honey Background"
            className="
              w-full
              h-full
              object-cover
              object-[68%_center]
              sm:object-center
              select-none
              pointer-events-none
            "
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start lg:items-center min-h-[640px] lg:min-h-[980px] pt-10 lg:pt-0">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                w-full
                max-w-[360px]
                sm:max-w-[520px]
                lg:max-w-[720px]
                pt-2
                pb-28
                lg:pt-10
                lg:pb-44
              "
            >
              {/* LABEL */}
              <div className="flex items-center gap-3 mb-4 lg:mb-7">
                <div className="w-8 sm:w-14 lg:w-20 h-[1px] bg-[#D89A20]" />

                <span
                  className="
                    uppercase
                    tracking-[2px]
                    lg:tracking-[4px]
                    text-[#D89A20]
                    text-[9px]
                    sm:text-xs
                    lg:text-base
                    font-semibold
                  "
                >
                  100% Pure & Natural
                </span>
              </div>

              {/* HEADING */}
              <h1
                className="
                  font-serif
                  leading-[0.92]
                  tracking-[-1px]
                  lg:tracking-[-2px]
                "
              >
                <span
                  className="
                    block
                    text-[#2B140A]
                    text-[38px]
                    sm:text-[62px]
                    md:text-[96px]
                    lg:text-[124px]
                  "
                >
                  Pure Forest
                </span>

                <span
                  className="
                    block
                    text-[#D18A12]
                    text-[50px]
                    sm:text-[74px]
                    md:text-[110px]
                    lg:text-[150px]
                    mt-1
                  "
                >
                  Honey
                </span>
              </h1>

              {/* SUB TITLE */}
              <h2
                className="
                  mt-2
                  lg:mt-6
                  font-serif
                  text-[#2B140A]
                  text-[16px]
                  sm:text-[28px]
                  md:text-4xl
                  lg:text-[58px]
                  leading-tight
                "
              >
                From Nature to Your Home
              </h2>

              {/* DIVIDER */}
              <div className="flex items-center gap-3 lg:gap-5 mt-4 lg:mt-8">
                <div className="w-12 sm:w-20 lg:w-32 h-[1px] bg-[#D9A441]" />

                <div className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />

                <div className="w-12 sm:w-20 lg:w-32 h-[1px] bg-[#D9A441]" />
              </div>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-4
                  lg:mt-8
                  max-w-[220px]
                  sm:max-w-[620px]
                  text-[#4A3428]
                  text-[11px]
                  sm:text-lg
                  lg:text-[28px]
                  leading-5
                  sm:leading-8
                  lg:leading-[52px]
                "
              >
                Raw, unprocessed honey collected from the untouched forests and
                packed with nature’s goodness.
              </p>

              {/* BUTTONS */}
              <div className="mt-5 lg:mt-10 flex flex-col sm:flex-row gap-2 sm:gap-5">
                {/* SHOP BUTTON */}
                <Link href="/products">
                  <button
                    className="
                      group
                      h-[38px]
                      sm:h-[58px]
                      lg:h-[66px]
                      px-4
                      sm:px-8
                      lg:px-10
                      bg-[#D18A12]
                      hover:bg-[#BA7706]
                      text-white
                      rounded-lg
                      lg:rounded-xl
                      text-[10px]
                      sm:text-sm
                      lg:text-base
                      font-semibold
                      tracking-wide
                      transition-all
                      duration-300
                      shadow-[0_12px_35px_rgba(209,138,18,0.25)]
                      flex
                      items-center
                      justify-center
                      gap-2
                      lg:gap-3
                      w-fit
                    "
                  >
                    SHOP NOW

                    <ArrowRight
                      className="
                        w-3.5
                        h-3.5
                        lg:w-5
                        lg:h-5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </Link>

                {/* WHATSAPP BUTTON */}
                <a href={waLink} target="_blank" rel="noreferrer">
                  <button
                    className="
                      h-[38px]
                      sm:h-[58px]
                      lg:h-[66px]
                      px-4
                      sm:px-8
                      lg:px-10
                      border
                      border-[#D9A441]
                      text-[#C27C08]
                      hover:bg-[#C27C08]
                      hover:text-white
                      rounded-lg
                      lg:rounded-xl
                      text-[10px]
                      sm:text-sm
                      lg:text-base
                      font-semibold
                      tracking-wide
                      transition-all
                      duration-300
                      bg-white/40
                      backdrop-blur-sm
                      w-fit
                    "
                  >
                    WHATSAPP ORDER
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FEATURE STRIP */}
      <div
        className="
          relative
          z-20
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
          -mt-16
          lg:-mt-10
        "
      >
        <div
          className="
            bg-[#FBF7F0]
            border
            border-[#E9DDCC]
            rounded-[24px]
            shadow-[0_8px_24px_rgba(0,0,0,0.04)]
            overflow-hidden
          "
        >
          {/* MOBILE */}
          <div className="grid grid-cols-4 lg:hidden">
            {[
              {
                title: "100% Pure",
                subtitle: "No additives",
                icon: <Leaf className="w-3 h-3 text-[#D79B2E]" />,
              },
              {
                title: "Chemical Free",
                subtitle: "No processing",
                icon: (
                  <FlaskConical className="w-3 h-3 text-[#D79B2E]" />
                ),
              },
              {
                title: "Direct From Farm",
                subtitle: "Sourced responsibly",
                icon: (
                  <Warehouse className="w-3 h-3 text-[#D79B2E]" />
                ),
              },
              {
                title: "Native Taste",
                subtitle: "Authentic & natural",
                icon: <Leaf className="w-3 h-3 text-[#D79B2E]" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  text-center
                  px-1.5
                  py-4
                "
              >
                {/* Divider */}
                {index !== 3 && (
                  <div
                    className="
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      h-[42px]
                      w-px
                      bg-[#E5D9C8]
                    "
                  />
                )}

                {/* Icon */}
                <div
                  className="
                    w-[30px]
                    h-[30px]
                    rounded-full
                    border
                    border-[#D9A441]
                    flex
                    items-center
                    justify-center
                    mb-2
                  "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                    text-[#2B140A]
                    font-semibold
                    text-[8px]
                    leading-tight
                  "
                >
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="
                    mt-1
                    text-[#655244]
                    text-[7px]
                    leading-3
                  "
                >
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:grid lg:grid-cols-4">
            {[
              {
                title: "100% Pure",
                subtitle: "No additives",
                icon: <Leaf className="w-5 h-5 text-[#D79B2E]" />,
              },
              {
                title: "Chemical Free",
                subtitle: "No processing",
                icon: (
                  <FlaskConical className="w-5 h-5 text-[#D79B2E]" />
                ),
              },
              {
                title: "Direct From Farm",
                subtitle: "Sourced responsibly",
                icon: (
                  <Warehouse className="w-5 h-5 text-[#D79B2E]" />
                ),
              },
              {
                title: "Native Taste",
                subtitle: "Authentic & natural",
                icon: <Leaf className="w-5 h-5 text-[#D79B2E]" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  flex
                  items-center
                  gap-4
                  px-5
                  lg:px-6
                  py-5
                "
              >
                {/* Divider */}
                {index !== 3 && (
                  <div
                    className="
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      h-10
                      w-px
                      bg-[#E5D9C8]
                    "
                  />
                )}

                {/* Icon */}
                <div
                  className="
                    min-w-[48px]
                    h-12
                    rounded-full
                    border
                    border-[#D9A441]
                    flex
                    items-center
                    justify-center
                  "
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="
                      text-[#2B140A]
                      font-semibold
                      text-[16px]
                      leading-none
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[#6A5648]
                      text-[14px]
                      mt-1.5
                    "
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}