"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "100% Natural",
    desc: "Pure honey, with no additives or preservatives.",
    icon: "/icons/leaf.png",
  },
  {
    title: "Ethically Sourced",
    desc: "Responsibly collected from wild forests by trusted beekeepers.",
    icon: "/icons/farmer.png",
  },
  {
    title: "Unprocessed",
    desc: "Raw, unheated and packed with natural nutrients.",
    icon: "/icons/honey-stick.png",
  },
  {
    title: "Sustainable",
    desc: "We care for nature as much as we care for you.",
    icon: "/icons/earth.png",
  },
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden pt-20 lg:pt-28">
      {/* DECORATIONS */}
      <div className="absolute left-0 top-0 hidden lg:block opacity-20">
        {/* <Image
src="/hex-left.png"
alt=""
width={220}
height={220}
/> */}
      </div>

      <div className="absolute left-0 top-[260px] hidden lg:block opacity-20">
       {/* <Image
src="/flower-left.png"
alt=""
width={120}
height={120}
/> */}
      </div>

      <div className="absolute right-0 top-0 hidden lg:block opacity-20">
        {/* <Image
src="/leaf-right.png"
alt=""
width={170}
height={170}
/> */}
      </div>

      <div className="absolute left-[220px] top-[180px] hidden lg:block">
      {/* <Image
src="/bee1.png"
alt=""
width={170}
height={170}
/> */}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* LABEL */}
          <div className="flex items-center justify-center gap-4 mb-5">
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
              Our Story
            </span>

            <div className="w-10 lg:w-16 h-[1px] bg-[#D89A20]" />
          </div>

          {/* TITLE */}
          <h2 className="font-serif leading-[0.95] tracking-[-1px]">
            <span
              className="
                text-[#2B140A]
                text-[54px]
                sm:text-[72px]
                lg:text-[92px]
              "
            >
              Our{" "}
            </span>

            <span
              className="
                text-[#D18A12]
                text-[60px]
                sm:text-[78px]
                lg:text-[100px]
              "
            >
              Story
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
              text-[20px]
              lg:text-[22px]
              leading-9
              max-w-[760px]
              mx-auto
            "
          >
            From the heart of nature, to the purity of your home.
          </p>
        </motion.div>

        {/* MOBILE DESIGN */}
        <div className="lg:hidden">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <div className="overflow-hidden rounded-[28px]">
              <div
className="
relative
w-full
h-[470px]
"
>

<Image

src="/our-story.png"

alt="Vanamrith natural honey story"

fill

sizes="100vw"

className="
object-cover
"

/>

</div>
            </div>
          </motion.div>

          {/* FEATURES CARD */}
          <div
            className="
              mt-6
              rounded-[30px]
              border
              border-[#EFE1CF]
              bg-white/40
              backdrop-blur-[3px]
              overflow-hidden
            "
          >
            {features.map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-5 p-6">
                  {/* ICON */}
                  <div
                    className="
                      w-[78px]
                      h-[78px]
                      rounded-full
                      bg-[#FAF2E6]
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Image

src={item.icon}

alt={item.title}

width={40}

height={40}

/>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <h3
                      className="
                        font-serif
                        text-[#2B140A]
                        text-[22px]
                        leading-tight
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[#4F3B2E]
                        text-[15px]
                        leading-8
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>

                {i !== features.length - 1 && (
                  <div className="mx-6 h-[1px] bg-[#EADCCB]" />
                )}
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-8">
            <Link
              href="/about"
              className="
                w-full
                h-[64px]
                rounded-2xl
                bg-[#D18A12]
                hover:bg-[#BC7907]
                transition-all
                duration-300
                text-white
                flex
                items-center
                justify-center
                gap-4
                font-semibold
                tracking-[1px]
                text-[16px]
                shadow-[0_12px_35px_rgba(209,138,18,0.25)]
              "
            >
              KNOW MORE ABOUT US

              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* DESKTOP DESIGN */}
        <div className="hidden lg:block">
          {/* CONTENT SECTION */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* TITLE */}
              <h3
                className="
                  font-serif
                  text-[68px]
                  leading-[1]
                  tracking-[-1px]
                "
              >
                <span className="text-[#2B140A]">
                  Rooted in{" "}
                </span>

                <span className="text-[#D18A12]">
                  Nature,
                </span>

                <br />

                <span className="text-[#2B140A]">
                  Driven by{" "}
                </span>

                <span className="text-[#D18A12]">
                  Purpose.
                </span>
              </h3>

              {/* LINE */}
              <div className="w-24 h-[1px] bg-[#D9A441] mt-10" />

              {/* TEXT */}
              <div
                className="
                  mt-10
                  space-y-8
                  text-[#3F2D20]
                  text-[20px]
                  leading-[2]
                "
              >
                <p>
                  VANAMRITH was born from a simple belief — that pure,
                  natural honey has the power to heal and nourish.
                </p>

                <p>
                  Sourced from wild forests and crafted with care,
                  our honey is a promise of purity, sustainability
                  and trust.
                </p>

                <p>
                  Every drop we deliver carries nature’s goodness and
                  our unwavering commitment to quality.
                </p>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* SHAPE */}
              <div
                className="
                  overflow-hidden
                  border-2
                  border-[#E7C17B]
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
                style={{
                  borderRadius:
                    "120px 40px 40px 120px / 120px 40px 40px 120px",
                }}
              >
                <div
className="
relative
w-full
h-[620px]
"
>

<Image

src="/our-story.png"

alt="Vanamrith pure honey journey"

fill

sizes="50vw"

className="
object-cover
"

/>

</div>
              </div>
            </motion.div>
          </div>

          {/* FEATURES STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              mt-[-30px]
              relative
              z-10
              rounded-[30px]
              border
              border-[#EADCCB]
              bg-white/60
              backdrop-blur-[6px]
              shadow-[0_15px_40px_rgba(0,0,0,0.04)]
              px-6
              py-8
            "
          >
            <div className="grid grid-cols-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex
                    items-start
                    gap-5
                    px-6
                    relative
                  "
                >
                  {/* DIVIDER */}
                  {i !== 3 && (
                    <div
                      className="
                        absolute
                        right-0
                        top-1/2
                        -translate-y-1/2
                        w-[1px]
                        h-[120px]
                        bg-[#E8D7C2]
                      "
                    />
                  )}

                  {/* ICON */}
                  <div
                    className="
                      w-[48px]
                      h-[48px]
                      rounded-full
                      bg-[#FAF2E6]
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Image

src={item.icon}

alt={item.title}

width={40}

height={40}

/>
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4
                      className="
                        font-serif
                        text-[#2B140A]
                        text-[22px]
                        leading-tight
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-3
                        text-[#4F3B2E]
                        text-[16px]
                        leading-8
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BUTTON */}
          <div className="flex justify-center mt-10">
            <Link
              href="/about"
              className="
                h-[68px]
                px-14
                rounded-xl
                bg-[#D18A12]
                hover:bg-[#BC7907]
                transition-all
                duration-300
                text-white
                flex
                items-center
                justify-center
                gap-4
                font-semibold
                tracking-[1px]
                text-[18px]
                shadow-[0_12px_35px_rgba(209,138,18,0.25)]
              "
            >
              KNOW MORE ABOUT US

              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}