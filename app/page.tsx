import Hero from "@/components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProducts from "../components/home/FeaturedProducts";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <GalleryPreview />

      {/* 🌿 Testimonials Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-[#3A1F16]">
              What Our Customers Say
            </h2>

            <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />

            <p className="mt-4 text-[#6F4E37] max-w-2xl mx-auto">
              Trusted by families, loved for purity.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

            {/* Card 1 */}
            <div className="bg-[#F4E6D5] p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-[#6F4E37] leading-relaxed">
                “The honey is extremely pure and tastes amazing. I’ve stopped buying commercial honey completely.”
              </p>
              <h4 className="mt-6 font-semibold text-[#3A1F16]">
                – Kavya
              </h4>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F4E6D5] p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-[#6F4E37] leading-relaxed">
                “Loved the natural aroma! Packaging was neat and delivery was very fast.”
              </p>
              <h4 className="mt-6 font-semibold text-[#3A1F16]">
                – Arjun
              </h4>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F4E6D5] p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-[#6F4E37] leading-relaxed">
                “Best honey I’ve ever tried. Thick, natural, and has that perfect native taste.”
              </p>
              <h4 className="mt-6 font-semibold text-[#3A1F16]">
                – Meera
              </h4>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}