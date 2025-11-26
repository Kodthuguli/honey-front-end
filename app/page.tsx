import Hero from "@/components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />

      {/* 🌿 Gallery Preview Section */}
<section className="py-16 bg-[#fdfbf7]">
  <div className="mx-auto max-w-6xl px-6">
    <h2 className="text-3xl font-bold text-center text-[#2c3e1f]">
      Gallery
    </h2>
    <p className="text-center text-gray-600 mt-2">
      A glimpse of our natural process and purity.
    </p>

    {/* Image Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      {/* Replace with real API images later */}
      <img
        src="/g1.png"
        alt="Gallery 1"
        className="rounded-lg shadow-md object-cover h-40 w-full hover:scale-105 transition duration-300"
      />
      <img
        src="/g2.png"
        alt="Gallery 2"
        className="rounded-lg shadow-md object-cover h-40 w-full hover:scale-105 transition duration-300"
      />
      <img
        src="/g3.png"
        alt="Gallery 3"
        className="rounded-lg shadow-md object-cover h-40 w-full hover:scale-105 transition duration-300"
      />
      <img
        src="/g1.png"
        alt="Gallery 4"
        className="rounded-lg shadow-md object-cover h-40 w-full hover:scale-105 transition duration-300"
      />
    </div>

    {/* Button */}
    <div className="text-center mt-10">
      <Link href="/gallery">
        <button className="px-6 py-3 bg-[#88b04b] text-white rounded-lg shadow hover:bg-[#76963f] transition">
          View Full Gallery
        </button>
      </Link>
    </div>
  </div>
</section>


{/* 🌿 Testimonials Section */}
<section className="py-20 bg-white">
  <div className="mx-auto max-w-6xl px-6">
    <h2 className="text-3xl font-bold text-center text-[#2c3e1f]">
      What Our Customers Say
    </h2>
    <p className="text-center text-gray-600 mt-2">
      Trusted by families, loved for purity.
    </p>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      
      {/* Card 1 */}
      <div className="bg-[#fdfbf7] p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <p className="text-gray-700">
          “The honey is extremely pure and tastes amazing. I’ve stopped buying commercial honey completely.”
        </p>
        <h4 className="mt-4 font-semibold text-[#2c3e1f]">– Kavya</h4>
      </div>

      {/* Card 2 */}
      <div className="bg-[#fdfbf7] p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <p className="text-gray-700">
          “Loved the natural aroma! Packaging was neat and delivery was very fast.”
        </p>
        <h4 className="mt-4 font-semibold text-[#2c3e1f]">– Arjun</h4>
      </div>

      {/* Card 3 */}
      <div className="bg-[#fdfbf7] p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <p className="text-gray-700">
          “Best honey I’ve ever tried. Thick, natural, and has that perfect native taste.”
        </p>
        <h4 className="mt-4 font-semibold text-[#2c3e1f]">– Meera</h4>
      </div>
    </div>
  </div>
</section>



      {/* Other sections will come later */}
    </div>
  );
}
