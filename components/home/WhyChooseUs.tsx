"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Droplets,
  Heart,
  Gift,
  Leaf,
  Flower2,
  Bug,
} from "lucide-react";

const featureCards = [
  {
    icon: <Leaf className="w-6 h-6 text-[#D79B2E]" />,
    title: "100% Pure & Natural",
    desc: "No additives, preservatives, or artificial processing — only raw forest honey.",
  },
  {
    icon: <Bug className="w-6 h-6 text-[#D79B2E]" />,
    title: "Ethically Harvested",
    desc: "Collected responsibly while protecting bees, forests and ecosystems.",
  },
  {
    icon: <Droplets className="w-6 h-6 text-[#D79B2E]" />,
    title: "Rich in Nutrients",
    desc: "Packed with antioxidants and natural minerals for wellness.",
  },
  {
    icon: <Flower2 className="w-6 h-6 text-[#D79B2E]" />,
    title: "Trusted Village Beekeepers",
    desc: "Supporting local communities and traditional harvesting methods.",
  },
];

const stripItems = [
  {
    icon: <ShieldCheck className="w-4 h-4 lg:w-7 lg:h-7 text-[#D79B2E]" />,
    title: "Trusted Quality",
    desc: "Every jar meets the highest standards.",
  },
  {
    icon: <Droplets className="w-4 h-4 lg:w-7 lg:h-7 text-[#D79B2E]" />,
    title: "Full of Nutrients",
    desc: "Rich in antioxidants & minerals.",
  },
  {
    icon: <Heart className="w-4 h-4 lg:w-7 lg:h-7 text-[#D79B2E]" />,
    title: "Good for You",
    desc: "Boosts immunity and wellness.",
  },
  {
    icon: <Gift className="w-4 h-4 lg:w-7 lg:h-7 text-[#D79B2E]" />,
    title: "Packed with Care",
    desc: "Hygienically packed for purity.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden pt-20 lg:pt-28">
      {/* Decorations */}
      <div className="absolute left-0 top-0 opacity-20 hidden lg:block">
        <img src="/hex-left.png" alt="" className="w-[120px]" />
      </div>

      <div className="absolute right-0 top-40 opacity-20 hidden xl:block">
        <img src="/flower-right.png" alt="" className="w-[90px]" />
      </div>

      <div className="absolute left-[80px] top-[70px] hidden lg:block">
        <img src="/bee1.png" alt="" className="w-10" />
      </div>

      <div className="absolute right-[120px] top-[220px] hidden lg:block">
        <img src="/bee2.png" alt="" className="w-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* MAIN GRID */}
        <div
          className="
            flex
            flex-col
            lg:grid
            lg:grid-cols-[0.92fr_1.08fr]
            gap-12
            xl:gap-16
            items-stretch
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              w-full
              max-w-[620px]
              text-center
              lg:text-left
              flex
              flex-col
              h-full
            "
          >
            {/* LABEL */}
            <div
              className="
                flex
                items-center
                justify-center
                lg:justify-start
                gap-4
                mb-6
              "
            >
              <div className="w-14 h-[1px] bg-[#D79B2E]" />

              <span
                className="
                  uppercase
                  tracking-[4px]
                  text-[#D79B2E]
                  text-[11px]
                  font-semibold
                "
              >
                Why Choose Us
              </span>

              <div className="w-14 h-[1px] bg-[#D79B2E]" />
            </div>

            {/* HEADING */}
            <h2 className="font-serif leading-[0.98] tracking-[-1px]">
              <span
                className="
                  block
                  text-[#2B140A]
                  text-[42px]
                  sm:text-[56px]
                  lg:text-[66px]
                "
              >
                Rooted in Nature,
              </span>

              <span
                className="
                  block
                  text-[#D18A12]
                  text-[46px]
                  sm:text-[62px]
                  lg:text-[74px]
                  mt-2
                "
              >
                Crafted with Purity
              </span>
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-7">
              <div className="w-24 h-[1px] bg-[#D9A441]" />

              <div className="w-2 h-2 rounded-full bg-[#D9A441]" />

              <div className="w-24 h-[1px] bg-[#D9A441]" />
            </div>

            {/* Description */}
            <p
              className="
                mt-7
                text-[#4F3B2E]
                text-[16px]
                lg:text-[18px]
                leading-9
                max-w-[560px]
                mx-auto
                lg:mx-0
              "
            >
              Every jar of Vanamrith honey is carefully harvested from
              untouched forests and ethically sourced from trusted local
              beekeepers who care deeply for nature and purity.
            </p>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              {featureCards.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-[28px]
                    border
                    border-[#E8DCCB]
                    bg-white/20
                    backdrop-blur-[2px]
                    px-5
                    py-6
                    sm:px-6
                    sm:py-7
                    text-center
                    min-h-[215px]
                    flex
                    flex-col
                    items-center
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-[64px]
                      h-[64px]
                      rounded-full
                      border
                      border-[#D9A441]
                      flex
                      items-center
                      justify-center
                      mb-5
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-[#2B140A]
                      font-semibold
                      text-[17px]
                      sm:text-[19px]
                      leading-[1.4]
                      max-w-[190px]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p
                    className="
                      mt-3
                      text-[#655244]
                      text-[13px]
                      sm:text-[14px]
                      leading-7
                      max-w-[230px]
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              relative
              w-full
              max-w-[760px]
              h-full
              flex
              items-end
            "
          >
            {/* IMAGE */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                w-full
                h-[480px]
                sm:h-[620px]
                lg:h-full
                lg:min-h-[720px]
              "
            >
              <img
                src="/why-choose-us.png"
                alt="Why Choose Us"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            {/* BADGE */}
            <div
              className="
                absolute
                left-[-16px]
                bottom-[60px]
                w-[105px]
                h-[105px]
                sm:w-[130px]
                sm:h-[130px]
                rounded-full
                border-[3px]
                border-[#F0D9AF]
                bg-[#FFF9EF]
                flex
                items-center
                justify-center
                rotate-[-12deg]
                shadow-[0_10px_25px_rgba(0,0,0,0.05)]
              "
            >
              <div className="text-center">
                <div
                  className="
                    text-[#D18A12]
                    font-bold
                    tracking-[4px]
                    text-[10px]
                    sm:text-[11px]
                  "
                >
                  NATURAL
                </div>

                <div
                  className="
                    mt-2
                    text-[#D18A12]
                    font-bold
                    tracking-[4px]
                    text-[10px]
                    sm:text-[11px]
                  "
                >
                  GOODNESS
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STRIP */}
       {/* STRIP */}
<div
  className="
    mt-12
    rounded-[34px]
    border
    border-[#E7DCCB]
    bg-white/20
    backdrop-blur-[2px]
    overflow-hidden
  "
>
  {/* MOBILE STRIP */}
  <div className="grid grid-cols-4 lg:hidden">
    {stripItems.map((item, index) => (
      <div
        key={index}
        className="
          relative
          flex
          flex-col
          items-center
          text-center
          px-2
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
              h-[48px]
              w-px
              bg-[#E5D9C8]
            "
          />
        )}

        {/* Icon */}
        <div
          className="
            w-[34px]
            h-[34px]
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
            text-[9px]
            leading-tight
          "
        >
          {item.title}
        </h3>

        {/* Desc */}
        <p
          className="
            mt-1
            text-[#655244]
            text-[8px]
            leading-3
          "
        >
          {item.desc}
        </p>
      </div>
    ))}
  </div>

  {/* DESKTOP STRIP */}
  <div className="hidden lg:grid lg:grid-cols-4">
    {stripItems.map((item, index) => (
      <div
        key={index}
        className="
          relative
          flex
          items-center
          gap-5
          px-8
          py-8
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
              h-[60px]
              w-px
              bg-[#E5D9C8]
            "
          />
        )}

        {/* Icon */}
        <div
          className="
            min-w-[58px]
            h-[58px]
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

        {/* Content */}
        <div>
          <h3
            className="
              text-[#2B140A]
              font-semibold
              text-[18px]
              leading-tight
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-1.5
              text-[#655244]
              text-[14px]
              leading-6
            "
          >
            {item.desc}
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