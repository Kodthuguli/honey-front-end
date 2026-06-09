"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const features = [
  {
    title: "100% Natural",
    icon: "/icons/leaf.svg",
  },
  {
    title: "Unprocessed",
    icon: "/icons/honey.svg",
  },
  {
    title: "Responsibly Sourced",
    icon: "/icons/mountain.svg",
  },
  {
    title: "Sustainable",
    icon: "/icons/heart.svg",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        pt-16 lg:pt-24
        bg-[#f8f2e9]
      "
    >

      {/* RIGHT LEAVES */}
      <img
        src="/footer-right-leaves.png"
        alt=""
        className="
          absolute right-0 top-8
          w-24 lg:w-40
          opacity-70
          pointer-events-none
        "
      />

      {/* HONEYCOMB LEFT */}
      <img
        src="/hex-pattern.png"
        alt=""
        className="
          absolute left-0 top-20
          w-28 lg:w-44
          opacity-40
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* TOP GRID */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.1fr]
            gap-x-10
            gap-y-12
          "
        >

          {/* BRAND */}
          <div className="col-span-2 lg:col-span-1">

            <img
              src="/logo.png"
              alt="Vanamrith"
              className="w-[200px] lg:w-[230px]"
            />

            <p
              className="
                mt-6
                text-[#2B140A]
                text-[17px]
                leading-[2]
                max-w-[320px]
              "
            >
              Vanamrith brings you 100% pure,
              raw and natural honey, sourced
              from wild forests with care and
              delivered with love.
            </p>

          </div>

          {/* SHOP */}
          <div>
            <h3
              className="
                text-[#2B140A]
                font-semibold
                tracking-[1.5px]
                text-[18px]
                uppercase
              "
            >
              Shop
            </h3>

            <div className="w-10 h-[2px] bg-[#D89B18] mt-4 mb-6" />

            <ul className="space-y-5 text-[#2B140A] text-[17px]">
              <li>
                <Link href="/products">All Products</Link>
              </li>

              <li>
                <Link href="/products">Raw Honey</Link>
              </li>

              <li>
                <Link href="/products">Wild Forest Honey</Link>
              </li>

              <li>
                <Link href="/products">Honey Comb</Link>
              </li>

              <li>
                <Link href="/products">Gift Packs</Link>
              </li>

              <li>
                <Link href="/products">Offers</Link>
              </li>
            </ul>
          </div>

          {/* OUR STORY */}
          <div>
            <h3
              className="
                text-[#2B140A]
                font-semibold
                tracking-[1.5px]
                text-[18px]
                uppercase
              "
            >
              Our Story
            </h3>

            <div className="w-10 h-[2px] bg-[#D89B18] mt-4 mb-6" />

            <ul className="space-y-5 text-[#2B140A] text-[17px]">
              <li>
                <Link href="/about">Our Story</Link>
              </li>

              <li>
                <Link href="/about">Why Vanamrith</Link>
              </li>

              <li>
                <Link href="/about">Our Beekeepers</Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>

              <li>
                <Link href="/recipes">Recipes</Link>
              </li>

              <li>
                <Link href="/faq">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* CUSTOMER CARE */}
          <div>
            <h3
              className="
                text-[#2B140A]
                font-semibold
                tracking-[1.5px]
                text-[18px]
                uppercase
              "
            >
              Customer Care
            </h3>

            <div className="w-10 h-[2px] bg-[#D89B18] mt-4 mb-6" />

            <ul className="space-y-5 text-[#2B140A] text-[17px]">
              <li>
                <Link href="/orders">My Orders</Link>
              </li>

              <li>
                <Link href="/shipping">Shipping & Delivery</Link>
              </li>

              <li>
                <Link href="/returns">Returns & Refunds</Link>
              </li>

              <li>
                <Link href="/track-order">Track Order</Link>
              </li>

              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>

              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* STAY CONNECTED */}
          <div className="relative">

            <h3
              className="
                text-[#2B140A]
                font-semibold
                tracking-[1.5px]
                text-[18px]
                uppercase
              "
            >
              Stay Connected
            </h3>

            <div className="w-10 h-[2px] bg-[#D89B18] mt-4 mb-6" />

            <div className="mt-8">

              <h4
                className="
                  text-[#2B140A]
                  font-semibold
                  tracking-[1px]
                  text-[18px]
                  uppercase
                "
              >
                Follow Us
              </h4>

              <div className="flex items-center gap-4 mt-6">

                {[
                  FaInstagram,
                  FaFacebookF,
                  FaYoutube,
                  FaWhatsapp,
                ].map((Icon, i) => (
                  <Link
                    href="#"
                    key={i}
                    className="
                      w-12 h-12
                      rounded-full
                      border border-[#D9C6AF]
                      flex items-center justify-center
                      text-[#2B140A]
                      hover:bg-[#D89B18]
                      hover:text-white
                      transition
                    "
                  >
                    <Icon size={20} />
                  </Link>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* BEE PATH */}
        <div className="relative h-28 hidden lg:block">

          <img
            src="/bee.png"
            alt=""
            className="
              absolute
              right-[300px]
              top-8
              w-14
            "
          />

          <img
            src="/bee-path.png"
            alt=""
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-5
              w-[340px]
              opacity-80
            "
          />
        </div>
      </div>

      {/* BOTTOM STRIP */}
<div className="relative mt-10">

  {/* TOP CURVE */}
  <div className="absolute top-[-58px] left-0 w-full overflow-hidden leading-none z-10">
    <svg
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      className="w-full h-[70px]"
    >
      <path
        d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,90.7C1120,96,1280,96,1360,96L1440,96L1440,140L1360,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z"
        fill="#1B0D08"
      />
    </svg>
  </div>

  {/* MAIN STRIP */}
  <div
    className="
      bg-gradient-to-r
      from-[#1B0D08]
      via-[#24130A]
      to-[#1B0D08]
      pt-12
      pb-7
    "
  >

    <div
      className="
        max-w-7xl mx-auto
        px-6 lg:px-8
        flex flex-col lg:flex-row
        items-center justify-between
        gap-6
      "
    >

      {/* LEFT */}
      <div className="flex items-center gap-4">

        <img
          src="/logo.png"
          alt=""
          className="w-10 h-10"
        />

        <div>
          <p
            className="
              text-white
              font-serif
              text-[17px]
              leading-none
            "
          >
            Thank you for choosing purity.
          </p>

          <p
            className="
              text-[#E0A126]
              italic
              font-serif
              text-[28px]
              mt-2
              leading-none
            "
          >
            We&apos;re grateful for your trust.
          </p>
        </div>
      </div>

      {/* CENTER */}
      <div
        className="
          text-white
          text-[15px]
          whitespace-nowrap
          lg:px-10
          lg:border-l
lg:border-l-[#4B3429]
        "
      >
        © {new Date().getFullYear()} Vanamrith.
        All Rights Reserved.
      </div>

      {/* PAYMENT */}
      {/* <div className="flex items-center gap-3 whitespace-nowrap">

        {[
          "/visa.png",
          "/mastercard.png",
          "/upi.png",
          "/razorpay.png",
        ].map((img, i) => (
          <div
            key={i}
            className="
              h-11 w-[88px]
              rounded-lg
              border border-[#3A261D]
              bg-[#241710]
              flex items-center justify-center
              shrink-0
            "
          >
            <img
              src={img}
              alt=""
              className="h-5 object-contain"
            />
          </div>
        ))}

      </div> */}

    </div>
  </div>
</div>
    </footer>
  );
}