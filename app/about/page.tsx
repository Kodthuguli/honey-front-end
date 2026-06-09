import {
  Beaker,
  Flower2,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden  text-[#3A1F16]">

      {/* TOP RIGHT LEAVES */}
      <img
        src="/patterns/leaves.svg"
        alt=""
        className="
          absolute top-0 right-0
          w-[180px] lg:w-[260px]
          opacity-[0.12]
          pointer-events-none
        "
      />

      {/* HERO */}
<section className="relative overflow-hidden">

  <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 pt-12 md:pt-16">

    {/* SIDE BY SIDE IN MOBILE ALSO */}
    <div
      className="
        grid
        grid-cols-[56%_44%]
        lg:grid-cols-2
        gap-4
        md:gap-10
        lg:gap-14
        items-center
      "
    >

      {/* LEFT */}
      <div className="relative z-10">

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
          About Us
        </p>

        <h1
          className="
            mt-3 md:mt-5
            font-serif
            leading-[0.92]
            text-[56px]
            sm:text-[72px]
            md:text-[110px]
            lg:text-[130px]
          "
        >
          About Us
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-6">
          <div className="w-10 md:w-20 h-[1px] bg-[#D7B98E]" />
          <div className="text-[#D8891C] text-xs md:text-lg">
            ✿
          </div>
          <div className="w-10 md:w-20 h-[1px] bg-[#D7B98E]" />
        </div>

        <p
          className="
            mt-5 md:mt-8
            text-[#5F4637]
            text-[13px]
            sm:text-[15px]
            md:text-lg
            leading-[1.8]
            max-w-xl
          "
        >
          Bringing pure, natural honey directly from our native
          forests to your home.
        </p>

      </div>

      {/* RIGHT */}
      <div className="relative flex justify-center">

        {/* Bees */}
        <img
          src="/bee.png"
          alt=""
          className="
            absolute
            top-2 md:top-8
            left-0 md:left-10
            w-4 md:w-10
            animate-float
            z-20
          "
        />

        <img
          src="/bee.png"
          alt=""
          className="
            absolute
            bottom-10
            right-0
            w-4 md:w-8
            animate-float
            z-20
          "
        />

        {/* Product */}
        <img
          src="/about-hero.png"
          alt="Honey"
          className="
            w-full
            max-w-[180px]
            sm:max-w-[260px]
            md:max-w-[420px]
            lg:max-w-[860px]
            object-contain
            relative z-10
          "
        />

      </div>

    </div>

  </div>

  {/* SOFT CURVE */}
  <div className="relative mt-8">
    <svg
      viewBox="0 0 1440 120"
      className="w-full h-[40px] lg:h-[55px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0,64L80,64C160,64,320,64,480,69.3C640,75,800,85,960,85.3C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        fill="#FBF7F1"
      />
    </svg>
  </div>

</section>

      {/* JOURNEY */}
      <section className="bg-[#FBF7F1] py-12 md:py-16">

        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">

          <div
            className="
              grid
              grid-cols-[42%_58%]
              lg:grid-cols-2
              gap-5
              md:gap-10
              lg:gap-20
              items-center
            "
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src="/farm.png"
                alt="Farm"
                className="
                  w-full
                  h-[260px]
                  sm:h-[320px]
                  md:h-[520px]
                  rounded-[22px]
                  md:rounded-[34px]
                  object-cover
                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                "
              />

              {/* Badge */}
              <div
                className="
                  absolute
                  -left-3
                  md:-left-8
                  bottom-5
                  md:bottom-8
                  w-[82px]
                  h-[82px]
                  md:w-[120px]
                  md:h-[120px]
                  rounded-full
                  bg-[#FFF9F2]
                  border border-[#E7D7BD]
                  shadow-md
                  flex flex-col items-center justify-center
                  text-center
                "
              >
                <span className="text-lg md:text-3xl font-bold">
                  100%
                </span>

                <span
                  className="
                    text-[9px]
                    md:text-xs
                    tracking-wide
                    text-[#6F4E37]
                    leading-3 md:leading-4
                    mt-1
                  "
                >
                  PURE &
                  <br />
                  NATURAL
                </span>
              </div>

            </div>

            {/* CONTENT */}
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
                Our Journey
              </p>

              <h2
                className="
                  mt-2 md:mt-4
                  font-serif
                  text-[34px]
                  leading-[1]
                  sm:text-[42px]
                  md:text-[72px]
                "
              >
                From Nature
                <br />

                <span className="text-[#D8891C]">
                  With Purpose
                </span>
              </h2>

              {/* Divider */}
              <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-7">
                <div className="w-10 md:w-16 h-[1px] bg-[#D7B98E]" />
                <div className="text-[#D8891C] text-xs md:text-base">
                  ✿
                </div>
                <div className="w-10 md:w-16 h-[1px] bg-[#D7B98E]" />
              </div>

              <p
                className="
                  mt-5 md:mt-8
                  text-[#5F4637]
                  text-[13px]
                  sm:text-[15px]
                  md:text-lg
                  leading-[1.9]
                "
              >
                It started with a simple belief — that natural honey
                should remain pure, untouched, and in its native form.
                Just the way nature intended.
              </p>

              <p
                className="
                  mt-4 md:mt-6
                  text-[#5F4637]
                  text-[13px]
                  sm:text-[15px]
                  md:text-lg
                  leading-[1.9]
                "
              >
                Our farms follow traditional methods that preserve the
                nutrients, aroma, and authenticity of each drop.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PURITY */}
      <section className="py-12 md:py-16 bg-[#F6F0E5]">

        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">

          <div className="text-center">

            <p
              className="
                uppercase
                tracking-[4px]
                text-[#D8891C]
                text-sm
                font-semibold
              "
            >
              Our Purity Promise
            </p>

            <div className="flex items-center justify-center gap-4 mt-5">
              <div className="w-16 h-[1px] bg-[#D7B98E]" />
              <div className="text-[#D8891C]">✿</div>
              <div className="w-16 h-[1px] bg-[#D7B98E]" />
            </div>
          </div>

          <div
            className="
              mt-10
              grid
              grid-cols-2
              lg:grid-cols-4
              border border-[#E8DCC8]
              rounded-[30px]
              overflow-hidden
              bg-[#FBF7F1]
            "
          >

            {[
              {
                title: "100% Natural",
                desc: "No processing, no chemicals, no preservatives — only pure honey.",
                icon: <Leaf size={30} />,
              },
              {
                title: "No Sugar Added",
                desc: "We never mix sugar or additives — every bottle is naturally sweet.",
                icon: <ShieldCheck size={30} />,
              },
              {
                title: "Native Taste",
                desc: "Sourced from real hives ensuring authentic regional flavor.",
                icon: <Flower2 size={30} />,
              },
              {
                title: "Unprocessed",
                desc: "Raw, unfiltered honey retaining all its natural nutrients.",
                icon: <Beaker size={30} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  px-5 md:px-7
                  py-8 md:py-10
                  text-center
                  border-b
                  lg:border-b-0
                  border-r
                  even:border-r-0
                  lg:even:border-r
                  lg:last:border-r-0
                  border-[#E8DCC8]
                "
              >

                <div
                  className="
                    w-16 h-16 md:w-20 md:h-20
                    rounded-full
                    border border-[#E7D7BD]
                    bg-[#F8F2E9]
                    flex items-center justify-center
                    text-[#D8891C]
                    mx-auto
                  "
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl md:text-3xl font-serif">
                  {item.title}
                </h3>

                <p className="mt-3 text-[#6F4E37] text-sm md:text-base leading-7">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="py-12 md:py-16 bg-[#FBF7F1]">

        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10">

          <div className="text-center">

            <p
              className="
                uppercase
                tracking-[4px]
                text-[#D8891C]
                text-sm
                font-semibold
              "
            >
              Our Values
            </p>

            <div className="flex items-center justify-center gap-4 mt-5">
              <div className="w-16 h-[1px] bg-[#D7B98E]" />
              <div className="text-[#D8891C]">✿</div>
              <div className="w-16 h-[1px] bg-[#D7B98E]" />
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-14">

            {[
              {
                title: "Honesty",
                desc: "We believe in transparency and pure, honest products.",
                icon: <HeartHandshake size={30} />,
              },
              {
                title: "Sustainability",
                desc: "Our beekeeping methods protect bees and the environment.",
                icon: <Leaf size={30} />,
              },
              {
                title: "Community",
                desc: "We support local farmers and preserve native traditions.",
                icon: <Users size={30} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex
                  items-start
                  gap-4 md:gap-5
                "
              >

                <div
                  className="
                    w-16 h-16 md:w-20 md:h-20
                    rounded-full
                    border border-[#E7D7BD]
                    bg-[#F8F2E9]
                    flex items-center justify-center
                    text-[#D8891C]
                    shrink-0
                  "
                >
                  {item.icon}
                </div>

                <div>

                  <h3 className="text-2xl md:text-3xl font-serif">
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2 md:mt-3
                      text-[#6F4E37]
                      text-sm md:text-base
                      leading-7
                    "
                  >
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TEAM */}
      <section className="relative py-12 md:py-16">

        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 text-center">

          <p
            className="
              uppercase
              tracking-[4px]
              text-[#D8891C]
              text-sm
              font-semibold
            "
          >
            Our Small Team
          </p>

          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="w-16 h-[1px] bg-[#D7B98E]" />
            <div className="text-[#D8891C]">✿</div>
            <div className="w-16 h-[1px] bg-[#D7B98E]" />
          </div>

          <p
            className="
              mt-6
              text-[#5F4637]
              text-base md:text-lg
              leading-[2]
              max-w-3xl
              mx-auto
            "
          >
            We are a passionate team dedicated to bringing the
            purest honey to your family.
          </p>

          <img
            src="/team.png"
            alt="Team"
            className="
              mt-10
              mx-auto
              w-full
              max-w-[980px]
              rounded-[30px]
              object-cover
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
            "
          />

        </div>

      </section>

    </div>
  );
}