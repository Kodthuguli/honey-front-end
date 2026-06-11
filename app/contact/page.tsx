/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import Image from "next/image";

import {
  MapPin,
  Mail,
  Phone,
  Clock3,
  Send,
} from "lucide-react";

export default function ContactPage() {

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async () => {

    if (!name || !phone || !message || !subject) {

      setError("Please fill all required fields");

      return;
    }

    // ✅ Indian mobile validation
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {

      setError("Please enter a valid 10-digit mobile number");

      return;
    }

    setError("");

    setLoading(true);

    try {

      await api.post("/contact", {
        name,
        phone,
        email,
        subject,
        message,
      });

      setSubmitted(true);

      setName("");

      setPhone("");

      setEmail("");

      setSubject("");

      setMessage("");

      setTimeout(() => setSubmitted(false), 4000);

    } catch {

      setError("Something went wrong. Please try again.");

    } finally {

      setLoading(false);

    }
  };

  const contactData = [

    {
      icon: <MapPin size={30} />,
      title: "Visit Us",
      desc: (
        <>
          Vanamrith Naturals Pvt. Ltd.
          <br />
          123 Green Valley Road, Coorg,
          <br />
          Karnataka – 571201, India
        </>
      ),
    },

    {
      icon: <Mail size={30} />,
      title: "Email Us",
      desc: (
        <>
          hello@vanamrith.com
          <br />
          support@vanamrith.com
        </>
      ),
    },

    {
      icon: <Phone size={30} />,
      title: "Call Us",
      desc: (
        <>
          +91 98765 43210
          <br />
          ( Mon – Sat : 9:00 AM – 6:00 PM )
        </>
      ),
    },

    {
      icon: <Clock3 size={30} />,
      title: "Business Hours",
      desc: (
        <>
          Monday – Saturday
          <br />
          9:00 AM – 6:00 PM
        </>
      ),
    },

  ];


  return (

    <div className="bg-[#FBF7F2] min-h-screen overflow-hidden">

      {/* HERO */}
      <section
        className="
          relative
          border-b border-[#F0E2D1]
        "
      >

        <div
          className="
            max-w-[1280px]
            mx-auto
            px-4 md:px-6 lg:px-8
            pt-10 md:pt-14
            pb-0
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              items-center
            "
          >

            {/* LEFT */}
            <div className="pb-8 lg:pb-14">

              <p
                className="
                  text-[#D06F1D]
                  uppercase
                  tracking-[0.15em]
                  font-semibold
                  text-sm
                "
              >
                Get In Touch
              </p>

              <div className="flex items-center gap-4 mt-3">

                <div
                  className="
                    w-[110px]
                    h-[1px]
                    bg-[#E0A15C]
                  "
                />

                {/* <Image

src="/bee.png"

alt="bee"

width={40}

height={40}

className="w-10"

/> */}

              </div>


              <h1
                className="
                  mt-5
                  text-[52px]
                  md:text-[72px]
                  leading-[1.02]
                  font-serif
                  text-[#24130D]
                  max-w-[520px]
                "
              >
                We’d Love to
                <br />
                Hear from You
              </h1>


              <div
                className="
                  mt-6
                  w-[80px]
                  h-[3px]
                  bg-[#D06F1D]
                "
              />


              <p
                className="
                  mt-6
                  text-[#4E3A30]
                  text-[18px]
                  leading-9
                  max-w-[520px]
                "
              >
                Have a question about our honey,
                need help with an order, or want
                to collaborate with us? We’re here
                for you!
              </p>

            </div>


            {/* RIGHT IMAGE */}
            <div
              className="
                relative
                flex justify-center lg:justify-end
              "
            >

              <div
className="
relative
w-full
max-w-[760px]
h-[360px]
md:h-[560px]
"
>


<Image

src="/contact-honey.png"

alt="Contact Vanamrith honey"

fill

priority

sizes="
(max-width:768px) 100vw,
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


      {/* MAIN */}
      <section
        className="
          max-w-[1280px]
          mx-auto
          px-4 md:px-6 lg:px-8
          py-10 md:py-14
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[360px_1fr]
            gap-6 md:gap-8
            items-start
          "
        >

          {/* LEFT INFO */}
          <div className="space-y-5">

            {/* CARD */}
            <div
              className="
                bg-[#FFFDF9]
                border border-[#E8D9C7]
                rounded-[22px]
                overflow-hidden
              "
            >

              {contactData.map((item, index) => (

                <div
                  key={index}
                  className={`
                    flex items-start gap-5
                    px-5 md:px-6
                    py-6
                    ${
                      index !== contactData.length - 1
                        ? "border-b border-[#E8D9C7]"
                        : ""
                    }
                  `}
                >

                  {/* ICON */}
                  <div
                    className="
                      w-[72px]
                      h-[72px]
                      rounded-full
                      border border-[#E8D9C7]
                      flex items-center justify-center
                      text-[#D06F1D]
                      shrink-0
                      bg-[#FFFDFC]
                    "
                  >
                    {item.icon}
                  </div>


                  {/* TEXT */}
                  <div>

                    <h3
                      className="
                        text-[18px]
                        font-semibold
                        text-[#24130D]
                      "
                    >
                      {item.title}
                    </h3>

                    <div
                      className="
                        mt-2
                        text-[#4E3A30]
                        leading-8
                        text-[16px]
                      "
                    >
                      {item.desc}
                    </div>

                  </div>

                </div>

              ))}

            </div>


            {/* BOTTOM NOTE */}
            <div
              className="
                relative
                bg-[#FFFDF9]
                border border-[#E8D9C7]
                rounded-[18px]
                px-5 py-5
                flex items-center gap-4
                overflow-hidden
              "
            >

             {/* <Image

src="/bee-small.png"

alt=""

width={48}

height={48}

className="
w-12
shrink-0
"

/> */}

              <p
                className="
                  text-[#4E3A30]
                  text-[15px]
                  leading-7
                  max-w-[250px]
                "
              >
                We value your trust and strive
                to respond to all inquiries within
                24 hours.
              </p>

              <div
                className="
                  absolute
                  right-0
                  bottom-0
                  opacity-40
                "
              >

                {/* <Image

src="/hex-pattern.png"

alt=""

width={120}

height={120}

/> */}

              </div>

            </div>

          </div>


          {/* FORM */}
          <div
            className="
              bg-[#FFFDF9]
              border border-[#E8D9C7]
              rounded-[22px]
              p-6 md:p-8 lg:p-10
            "
          >

            <h2
              className="
                text-[34px]
                md:text-[42px]
                font-semibold
                text-[#24130D]
              "
            >
              Send Us a Message
            </h2>

            <p
              className="
                mt-3
                text-[#6F4E37]
                text-[16px]
              "
            >
              Fill out the form below and we’ll
              get back to you soon.
            </p>


            {!submitted ? (

              <>

                {error && (

                  <p
                    className="
                      mt-5
                      text-[#D06F1D]
                      text-sm
                    "
                  >
                    {error}
                  </p>

                )}


                {/* FORM GRID */}
                <div
                  className="
                    mt-8
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-4 md:gap-5
                  "
                >

                  {/* NAME */}
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    className="
                      h-[62px]
                      rounded-[14px]
                      border border-[#E8D9C7]
                      bg-[#FFFDFC]
                      px-5
                      text-[#24130D]
                      outline-none
                      focus:border-[#D06F1D]
                    "
                  />


                  {/* EMAIL */}
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className="
                      h-[62px]
                      rounded-[14px]
                      border border-[#E8D9C7]
                      bg-[#FFFDFC]
                      px-5
                      text-[#24130D]
                      outline-none
                      focus:border-[#D06F1D]
                    "
                  />


                  {/* PHONE */}
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    maxLength={10}
                    onChange={(e) => {

                      const value =
                        e.target.value.replace(
                          /\D/g,
                          ""
                        );

                      setPhone(value);
                    }}
                    className="
                      h-[62px]
                      rounded-[14px]
                      border border-[#E8D9C7]
                      bg-[#FFFDFC]
                      px-5
                      text-[#24130D]
                      outline-none
                      focus:border-[#D06F1D]
                    "
                  />


                  {/* SUBJECT */}
                  <input
                    type="text"
                    placeholder="Subject *"
                    value={subject}
                    onChange={(e) =>
                      setSubject(e.target.value)
                    }
                    className="
                      h-[62px]
                      rounded-[14px]
                      border border-[#E8D9C7]
                      bg-[#FFFDFC]
                      px-5
                      text-[#24130D]
                      outline-none
                      focus:border-[#D06F1D]
                    "
                  />

                </div>


                {/* MESSAGE */}
                <textarea
                  placeholder="Message *"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  className="
                    mt-5
                    w-full
                    h-[180px]
                    md:h-[210px]
                    rounded-[14px]
                    border border-[#E8D9C7]
                    bg-[#FFFDFC]
                    px-5 py-5
                    text-[#24130D]
                    outline-none
                    resize-none
                    focus:border-[#D06F1D]
                  "
                />


                {/* BUTTON */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="
                    mt-7
                    w-full md:w-[340px]
                    h-[62px]
                    rounded-[14px]
                    bg-[#D06F1D]
                    text-white
                    font-semibold
                    text-[18px]
                    flex items-center justify-center gap-3
                    hover:opacity-90
                    transition
                    disabled:opacity-50
                  "
                >

                  {loading
                    ? "Sending..."
                    : "Send Message"}

                  {!loading && (
                    <Send size={18} />
                  )}

                </button>

              </>

            ) : (

              <div
                className="
                  mt-10
                  text-[#D06F1D]
                  text-lg
                  font-medium
                "
              >
                ✅ Thank you! We will contact you
                soon.
              </div>

            )}

          </div>

        </div>

      </section>

    </div>

  );
}