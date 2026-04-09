export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">

      {/* TITLE */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#3A1F16]">
          About Us
        </h1>

        <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />

        <p className="mt-4 text-[#6F4E37] max-w-2xl mx-auto">
          Bringing pure, natural honey directly from our native forests to your home.
        </p>
      </div>


      {/* OUR JOURNEY */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img
          src="/farm.png"
          alt="Our Farm"
          className="rounded-lg shadow-md object-cover w-full h-72"
        />

        <div>
          <h2 className="text-3xl font-serif text-[#3A1F16] mb-4">
            Our Journey
          </h2>

          <p className="text-[#6F4E37] leading-relaxed">
            It started with a simple belief — that natural honey should remain
            pure, untouched, and in its native form, just the way nature intended.
            Our farms follow traditional methods that preserve the nutrients,
            aroma, and authenticity of each drop.
          </p>
        </div>
      </section>


      {/* PURITY PROMISE */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-[#3A1F16]">
            Our Purity Promise
          </h2>

          <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          <div className="bg-[#F4E6D5] p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#3A1F16]">
              100% Natural
            </h3>
            <p className="text-[#6F4E37] mt-3">
              No processing, no chemicals, no preservatives — only pure honey.
            </p>
          </div>

          <div className="bg-[#F4E6D5] p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#3A1F16]">
              No Sugar Added
            </h3>
            <p className="text-[#6F4E37] mt-3">
              We never mix sugar or additives — every bottle is naturally sweet.
            </p>
          </div>

          <div className="bg-[#F4E6D5] p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#3A1F16]">
              Native Taste
            </h3>
            <p className="text-[#6F4E37] mt-3">
              Sourced from local hives ensuring authentic regional flavor.
            </p>
          </div>
        </div>
      </section>


      {/* OUR VALUES */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-[#3A1F16]">
            Our Values
          </h2>

          <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          <div className="bg-[#F4E6D5] p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#3A1F16]">
              Honesty
            </h3>
            <p className="text-[#6F4E37] mt-3">
              We believe in transparency and pure, honest products.
            </p>
          </div>

          <div className="bg-[#F4E6D5] p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#3A1F16]">
              Sustainability
            </h3>
            <p className="text-[#6F4E37] mt-3">
              Our beekeeping methods protect bees and the environment.
            </p>
          </div>

          <div className="bg-[#F4E6D5] p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#3A1F16]">
              Community
            </h3>
            <p className="text-[#6F4E37] mt-3">
              We support local farmers and native traditions.
            </p>
          </div>
        </div>
      </section>


      {/* TEAM */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-serif text-[#3A1F16]">
          Our Small Team
        </h2>

        <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />

        <p className="mt-4 text-[#6F4E37] max-w-xl mx-auto">
          We are a passionate team dedicated to bringing the purest honey to your family.
        </p>

        <img
          src="/farm.png"
          alt="Team"
          className="rounded-lg shadow-md mx-auto mt-10 w-72 object-cover"
        />
      </section>

    </div>
  );
}