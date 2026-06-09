"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { href: "/faq", label: "FAQ" },
    { label: "Shop", href: "/products" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          border-b border-[#EADFCF]
          bg-[#F7F1E7]/95
          backdrop-blur-md
        "
        style={{
          backgroundColor: "#F7F1E7",
          // backgroundImage: "url('/textures/paper-texture.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
          <div className="h-[78px] flex items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 lg:gap-4"
            >
              <img
                src="/logo.png"
                alt="Vanamrith"
                className="
                  w-[58px] h-[58px]
                  lg:w-[72px] lg:h-[72px]
                  object-contain
                "
              />

              <div className="leading-none">
                <h1
                  className="
                    text-[20px]
                    lg:text-[30px]
                    font-serif
                    tracking-[1px]
                    text-[#2B140A]
                    leading-none
                  "
                >
                  VANAMRITH
                </h1>

                <p
                  className="
                    mt-1
                    text-[9px]
                    lg:text-[12px]
                    tracking-[3px]
                    uppercase
                    text-[#D38A10]
                    font-medium
                  "
                >
                  Taste By Nature
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      relative
                      text-[18px]
                      font-medium
                      transition
                      ${
                        active
                          ? "text-[#D38A10]"
                          : "text-[#2B140A] hover:text-[#D38A10]"
                      }
                    `}
                  >
                    {item.label}

                    {active && (
                      <span
                        className="
                          absolute
                          left-0
                          -bottom-3
                          w-full
                          h-[2px]
                          bg-[#D38A10]
                          rounded-full
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-5 lg:gap-7">

              {/* DESKTOP ICONS */}
              {/* <div className="hidden lg:flex items-center gap-7">
                <button className="text-[#2B140A]">
                  <Search className="w-7 h-7 stroke-[1.7]" />
                </button>

                <button className="text-[#2B140A]">
                  <User className="w-7 h-7 stroke-[1.7]" />
                </button>

                <button className="relative text-[#2B140A]">
                  <ShoppingCart className="w-7 h-7 stroke-[1.7]" />

                  <span
                    className="
                      absolute
                      -top-2
                      -right-2
                      w-5 h-5
                      rounded-full
                      bg-[#D38A10]
                      text-white
                      text-[10px]
                      font-semibold
                      flex items-center justify-center
                    "
                  >
                    2
                  </span>
                </button>
              </div> */}

              {/* MOBILE ICONS */}
              <div className="flex lg:hidden items-center gap-4">

                {/* <button className="text-[#2B140A]">
                  <Search className="w-6 h-6 stroke-[1.7]" />
                </button>

                <button className="text-[#2B140A]">
                  <User className="w-6 h-6 stroke-[1.7]" />
                </button>

                <button className="relative text-[#2B140A]">
                  <ShoppingCart className="w-6 h-6 stroke-[1.7]" />

                  <span
                    className="
                      absolute
                      -top-2
                      -right-2
                      w-5 h-5
                      rounded-full
                      bg-[#D38A10]
                      text-white
                      text-[10px]
                      font-semibold
                      flex items-center justify-center
                    "
                  >
                    2
                  </span>
                </button> */}

                {/* HAMBURGER */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-[#2B140A]"
                >
                  <Menu className="w-8 h-8 stroke-[1.7]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`
          fixed inset-0 z-[60]
          bg-black/40
          transition-opacity duration-300
          ${
            mobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 z-[70]
          h-full w-[82%]
          max-w-[340px]
          bg-[#F7F1E7]
          border-l border-[#EADFCF]
          shadow-2xl
          transition-transform duration-300 ease-in-out
          ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
        style={{
          backgroundImage: "url('/textures/paper-texture.png')",
          backgroundRepeat: "repeat",
        }}
      >
        {/* TOP */}
        <div
          className="
            h-[78px]
            px-5
            border-b border-[#EADFCF]
            flex items-center justify-between
          "
        >
          <h2
            className="
              text-[22px]
              font-serif
              text-[#2B140A]
            "
          >
            Menu
          </h2>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#2B140A]"
          >
            <X className="w-7 h-7 stroke-[1.7]" />
          </button>
        </div>

        {/* NAV ITEMS */}
        <div className="px-6 py-8 flex flex-col">

          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  py-5
                  border-b border-[#EADFCF]
                  text-[20px]
                  font-medium
                  transition
                  ${
                    active
                      ? "text-[#D38A10]"
                      : "text-[#2B140A]"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}

          {/* CTA */}
          <button
            className="
              mt-10
              h-[56px]
              rounded-xl
              bg-[#D38A10]
              text-white
              text-[16px]
              font-semibold
              tracking-wide
            "
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </>
  );
}