export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center text-[#2c3e1f] mb-4">
        About Us
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Bringing pure, natural honey directly from our native farms to your home.
      </p>

      {/* OUR JOURNEY */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="/farm.png"
          alt="Our Farm"
          className="rounded-xl shadow-lg object-cover w-full h-72"
        />

        <div>
          <h2 className="text-3xl font-semibold text-[#2c3e1f] mb-4">
            Our Journey
          </h2>
          <p className="text-gray-700 leading-relaxed">
            It started with a simple belief — that natural honey should remain
            pure, untouched, and in its native form, just the way nature intended.
            Our farms follow traditional methods that preserve the nutrients,
            aroma, and authenticity of each drop.
          </p>
        </div>
      </section>

      {/* PURITY PROMISE */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-center text-[#2c3e1f] mb-10">
          Our Purity Promise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#fdfbf7] p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#2c3e1f]">
              100% Natural
            </h3>
            <p className="text-gray-700 mt-2">
              No processing, no chemicals, no preservatives — only pure honey.
            </p>
          </div>

          <div className="bg-[#fdfbf7] p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#2c3e1f]">
              No Sugar Added
            </h3>
            <p className="text-gray-700 mt-2">
              We never mix sugar or additives — every bottle is naturally sweet.
            </p>
          </div>

          <div className="bg-[#fdfbf7] p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#2c3e1f]">
              Native Taste
            </h3>
            <p className="text-gray-700 mt-2">
              Sourced from local hives ensuring authentic regional flavor.
            </p>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-center text-[#2c3e1f] mb-10">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-[#2c3e1f]">
              Honesty
            </h3>
            <p className="text-gray-600 mt-2">
              We believe in transparency and pure, honest products.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-[#2c3e1f]">
              Sustainability
            </h3>
            <p className="text-gray-600 mt-2">
              Our beekeeping methods protect bees and the environment.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-[#2c3e1f]">
              Community
            </h3>
            <p className="text-gray-600 mt-2">
              We support local farmers and native traditions.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM (OPTIONAL) */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold text-[#2c3e1f] mb-4">
          Our Small Team
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          We are a passionate team dedicated to bringing the purest honey to your family.
        </p>

        <img
          src="/farm.png"
          alt="Team"
          className="rounded-xl shadow-lg mx-auto mt-8 w-72 object-cover"
        />
      </section>
    </div>
  );
}
